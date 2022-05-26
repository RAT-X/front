window.onload = () => {
    input.focus();
}
const flowChartArea = document.getElementById('flowChartArea');
const confirmation = document.getElementById('confirmation');
const allCanvas = document.querySelectorAll('canvas');
const firstBox = document.getElementsByClassName('itemBox')[0];
const firstArrow = document.getElementsByClassName('firstArrow')[0];
const temporaly = document.getElementById('temporaly');
const input = document.querySelector('textarea');

const firstRect = firstBox.getBoundingClientRect();
const baseWidth = firstRect.width;
const baseHeight = firstRect.height;
const halfWidth = baseWidth / 2;

//divタグの幅の調整
const eAreaLength = document.getElementsByClassName('eArea').length;

for(let i = 0; i < eAreaLength; i++){
    i % 2 !== 0 ? resizeAreaWidth(baseWidth) : resizeAreaWidth(halfWidth);
    function resizeAreaWidth(innerWidth){
        const eArea = document.getElementsByClassName('eArea')[i];
        eArea.style.width = innerWidth + 'px';
    }
}

//canvasの高さの調整（1行目）
const area0 = document.getElementsByClassName('eArea')[0];
const area0Canvas = area0.querySelectorAll('canvas');
const area1 = document.getElementsByClassName('eArea')[1];
const area1Div = area1.getElementsByClassName('itemBox');
const area1Canvas = area1.querySelectorAll('canvas');

for(let n = 0; n < area0Canvas.length; n++){
    n % 2 === 0 ? evenHeight() : oddHeight();
    function evenHeight(){
        area0Canvas[n].setAttribute('width','100%');
        area0Canvas[n].setAttribute('height', area1Div[n].getBoundingClientRect().height + 'px');
        input.addEventListener('input',()=>{
            area0Canvas[n].setAttribute('height', area1Div[n].getBoundingClientRect().height + 'px');
        });
    }
    function oddHeight(){
        area0.querySelectorAll('canvas')[n].setAttribute('width','100%');
        area0.querySelectorAll('canvas')[n].setAttribute('height','50px');
    }
}
//canvasの高さの調整（2行目）
for(let n = 0; n < area1Canvas.length; n++){
    area1Canvas[n].setAttribute('width','200px');
    area1Canvas[n].setAttribute('height','50px');
}

// 矢印の型を用意
const firstContext = firstArrow.getContext('2d');

firstContext.beginPath();
firstContext.fillStyle = '#000';
firstContext.moveTo(halfWidth,0);
firstContext.lineTo(halfWidth,50);
firstContext.lineTo(halfWidth + 5 , 45);
firstContext.moveTo(halfWidth,50);
firstContext.lineTo(halfWidth - 5 , 45);
firstContext.stroke();

//文字列に合わせてインプットタグの幅を調整
input.addEventListener('input',inputExtender);
const span = document.getElementById('temporaly');
function inputExtender(){
    span.textContent = input.value;
    const spanWidth = span.getBoundingClientRect().width;
    const spanHeight = span.getBoundingClientRect().height*1.1;
    input.style.width = spanWidth + 'px';
    input.style.height = spanHeight + 'px';
}