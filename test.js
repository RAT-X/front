const allArea = document.querySelectorAll('.area');
const input = document.createElement('textarea');
const isHere = document.getElementsByClassName('isHere');

/* スタイル整備 */
// Area0のボックス初期値の成形
const area0Arrows = allArea[0].getElementsByClassName('arrow');
const area1Arrows = allArea[1].getElementsByClassName('arrow');
const areaChildren = allArea[1].children;
const area1Elements = allArea[1].children;

for(let i = 0; i < area1Arrows.length; i++){
    area1Arrows[i].style.height = area0Arrows[i].getBoundingClientRect().height + 'px';
}

for(let i=0; i< area0Arrows.length; i++){
    if(i % 2 === 0){
        area0Arrows[i].style.height = areaChildren[i].getBoundingClientRect().height + 6 + 'px';
    }
}

//Area0のElement幅の伸長
input.addEventListener('input',area0CanvasExtender);
function area0CanvasExtender(){
    for(let i = 0; i < area0Arrows.length; i++){
        if(i%2===0){
            area0Arrows[i].style.height = areaChildren[i].getBoundingClientRect().height + 'px';
        }
    }
}

//Area1以降のElement<幅>の設定
for(let i = 2; i < allArea.length; i++){
    if(i % 2 === 0){
        const thisArrows = allArea[i].getElementsByClassName('arrow');
        const previousDivs = allArea[i-1].children;
        for(let n = 0; n < thisArrows.length; n++){
            thisArrows[n].style.height = previousDivs[n].getBoundingClientRect().height + 'px';
        }
    }
}

//Area1以降のElement<幅の伸長>
input.addEventListener('input',afterCanvasExtender);
function afterCanvasExtender(){
    for(let i = 1; i < allArea.length; i++){
        if(i % 2 === 0){
            input.addEventListener('input',evenArea);
        }
        function evenArea(){
            const areaXAllChildren = allArea[i].children;
            const areaPXAllChildren = allArea[i-1].children;
            for(let n = 0; n < areaXAllChildren.length; n++){
                if(n % 2 === 0){
                    areaXAllChildren[n].style.height = areaPXAllChildren[n].getBoundingClientRect().height + 'px';
                }
            }
        }
    }
}

/* */

//最初のボックス設定
const firstItemBox = allArea[1].querySelectorAll('.empty')[0];
firstItemBox.className = 'itemBox startEnd strongBE isHere';

//最初の矢印の設定
const firstBoxUnderCanvas = allArea[1].querySelectorAll('.arrow')[0];
const firstAllWidth = firstBoxUnderCanvas.getBoundingClientRect().width;
const firstHalfWidth = firstAllWidth/1.35;
const firstContext = firstBoxUnderCanvas.getContext('2d');
createDownArrow(firstContext,firstHalfWidth);
//↓生成
function createDownArrow(xContext,width){
    xContext.beginPath();
    xContext.fillStyle = '#000';
    xContext.moveTo(width,0);
    xContext.lineTo(width,150);
    xContext.lineTo(width + 10 , 130);
    xContext.moveTo(width,150);
    xContext.lineTo(width - 10 , 130);
    xContext.stroke();
    xContext.closePath();
}

// 最初のボックスにinputタグを挿入
const p = document.createElement('p');
firstItemBox.appendChild(p).appendChild(input);
input.focus();

// inputタグ幅の伸縮
const temporaly = document.getElementById('temporaly');
input.addEventListener('input',inputExtender);
function inputExtender(){
    temporaly.textContent = input.value;
    const spanWidth = temporaly.getBoundingClientRect().width;
    const spanHeight = temporaly.getBoundingClientRect().height;
    input.style.width = spanWidth + 'px';
    input.style.height = spanHeight + 'px';
}

//keydownアクション
input.addEventListener('keydown',pressEnter);

function pressEnter(e){
    if(!e.isComposing && e.key === 'Enter'){
        const isHere = document.getElementsByClassName('isHere')[0];
        const strongs = ['strongBE','strongBr','strongPr','strongIn','strongLs','strongLe','strongDp'];
        strongs.forEach((value)=>{isHere.classList.remove(value);});
        isHere.classList.remove('isHere');

        const div = document.createElement('div');
        div.className = 'itemBox process strongPr isHere';

        const canvas = document.createElement('canvas');
        canvas.className = 'arrow';
        canvas.style.height = '50px';


        const baseParent = this.parentElement.parentElement.parentElement;
        baseParent.appendChild(div);
        baseParent.appendChild(canvas);

        const thisElement = document.getElementsByClassName('isHere')[0];
        const thisCanvas = thisElement.nextElementSibling;
        const thisContext = thisCanvas.getContext('2d');
        createDownArrow(thisContext,firstHalfWidth);

        input.replaceWith(input.value);
        input.value = '';
        temporaly.textContent = input.value;

        const newP = document.createElement('p');
        thisElement.appendChild(newP);
        newP.appendChild(input);
        input.focus();
        //０行目のcanvasの生成
        if(baseParent.classList.contains('area1')){
            for(let i = 1; i < 3; i++){
                allArea[0].insertAdjacentHTML('beforeend','<canvas class="arrow">');
            }
        };

        //2行目以降右側のcanvasの生成
        for(let i = 1; i < 3; i++){
            baseParent.nextElementSibling.insertAdjacentHTML('beforeend','<canvas class="arrow">');
        }//三項演算子だとバグが出る
    }
}

//boxチェンジ
class ShiftUD {
    
}
input.addEventListener('keydown',addArrowCount);

let arrowCount = 2;

function addArrowCount(e){
    const wantClasses = this.parentElement.parentElement;
    const rejectClass = wantClasses.classList.contains('startEnd');
    if(!rejectClass && e.shiftKey && e.key === 'ArrowUp'){
        arrowCount += 1;
        if(arrowCount === 9){
            arrowCount = 0;
        }
    }
}

input.addEventListener('keydown',chengeBox);
function chengeBox(e){
    const wantClasses = this.parentElement.parentElement;
    const rejectClass = wantClasses.classList.contains('startEnd');
    if(!rejectClass && e.shiftKey && e.key === 'ArrowUp'){
        switch(arrowCount){
            case 1:
                console.log('SE');
                break;
            case 2:
                console.log('BR');
                break;
            case 3:
                console.log('PR');
                break;
            case 4:
                console.log('IN');
                break;
            case 5:
                console.log('RS');
                break;
            case 6:
                console.log('RE');
                break;
            case 7:
                console.log('CO');
                break;
            case 8:
                console.log('CI');
                break;
        }
    }
}