const main = document.getElementById('main');
const shape = document.getElementById('shape');
const shapeRect = shape.getBoundingClientRect();
console.log(shapeRect); //デバッグ用
const halfWidth = shapeRect.width /1.35;
const arrow1 = document.getElementById("arrow1");
const context = arrow1.getContext('2d');

context.beginPath();
context.fillStyle = 'blue';
context.moveTo(halfWidth,0);//ペンを離した状態で移動：moveTo
context.lineTo(halfWidth,50);//ペンを付けた状態で移動：lineTo
context.lineTo(halfWidth + 5 , 45);
context.moveTo(halfWidth,50);
context.lineTo(halfWidth - 5 , 45);
context.stroke();


const input = document.querySelector('input');


window.onload = () => {
    input.focus();
}

window.addEventListener('keydown',changeShape);

let count = 0;


function changeShape(e){
    if(e.key === 'ArrowRight'){
        count++;
        switch(count){
            case 1:
                green();
                break;
            case 2:
                red()
                break;
            case 3:
                purple()
                break;
        }
    }else { 
        input.addEventListener('keydown',pressEnter)
    }
}


function green() {
    shape.removeAttribute('class','beginEnd around0 itemBox');
    shape.setAttribute('class','process around1 itemBox1');
}
function red() {
    shape.removeAttribute('class','process around1 itemBox1');
    shape.setAttribute('class','hishigata around2 itemBox2');
}
function purple() {
    shape.removeAttribute('class','hishigata around2 itemBox2');
    shape.setAttribute('class','beginEnd around0 itemBox');
    count = 0;
}

function pressEnter(e){
    if(e.key === 'Enter' && input.value !== ''){
        input.replaceWith(input.value);//inputnお中身をdivエリアに書き込む
        const nextDiv = document.createElement('div');//挿入する子要素を用意
        nextDiv.className = 'beginEnd around0 itemBox';//子要素のクラスを追加
        main.appendChild(nextDiv);//作った次の要素を子要素に追加
        document.getElementsByClassName('beginEnd around0 itemBox')[1].insertAdjacentElement('beforeend',input);
        //造られた子要素にinputタグを挿入
        input.value = '';//inputの値を初期化
        input.focus();//inputにカーソルを合わせる

        const nextBox = document.createElement('canvas');//canvasタグを作成
        main.appendChild(nextBox);//canvasタグを子要素に追加
        nextBox.className = 'arrow1';//クラスに関連付けて高さを調節
        //canvasライン
        const nextContext = nextBox.getContext('2d');
        nextContext.beginPath();
        nextContext.fillStyle = '#000';
        nextContext.moveTo(157,0);
        nextContext.lineTo(157,150);
        nextContext.lineTo(157 + 5 , 140);
        nextContext.moveTo(157,150);
        nextContext.lineTo(157 - 5 , 140);
        nextContext.stroke();
    }
} 