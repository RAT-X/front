const allArea = document.querySelectorAll('.area');
const input = document.createElement('textarea');

// Area0のボックス初期値の成形
const area0Arrows = allArea[0].getElementsByClassName('arrow');
const area1Arrows = allArea[1].getElementsByClassName('arrow');
const areaChildren = allArea[1].children;
const area1Elements = allArea[1].children;

for(let i = 0; i < area1Arrows.length; i++){
    area1Arrows[i].style.height = "50px";
}

for(let i=0; i< area0Arrows.length; i++){
    if(i % 2 === 0){
        area0Arrows[i].style.height = areaChildren[i].getBoundingClientRect().height + 'px';
    }
}

//Area0のElement幅の伸長
input.addEventListener('input',canvasExtender);
function canvasExtender(){
    for(let i = 0; i < area0Arrows.length-1; i++){
        if(i%2===0){
            area0Arrows[i].style.height = areaChildren[i].getBoundingClientRect().height + 'px';
        }
    }
}

for(let i=0; i<area0Arrows.length-1; i++){
    i%2 === 0 ? area0EvenCanvases() : area0OddCanvases();

    function area0EvenCanvases(){
        const arrow0Even = area0Arrows[i];
        const arrow1Elements = area1Elements[i];
        const wantHeight = arrow1Elements.getBoundingClientRect().height + 'px';
        arrow0Even.style.height = wantHeight;
    }

    function area0OddCanvases(){
        const arrow0Odd = area0Arrows[i];
        const arrow1Elements = area1Elements[i];
        const wantHeight = arrow1Elements.getBoundingClientRect().height + 'px';
        arrow0Odd.style.height = wantHeight;
    }

}


//最初のボックス設定
const firstItemBox = allArea[1].querySelectorAll('.empty')[0];
firstItemBox.className = 'itemBox startEnd strongBE isHere';

//最初の矢印の設定
const firstBoxUnderCanvas = allArea[1].querySelectorAll('.arrow')[0];
const firstAllWidth = firstBoxUnderCanvas.getBoundingClientRect().width;
const halfWidth = firstAllWidth/1.35;
const firstContext = firstBoxUnderCanvas.getContext('2d');
firstContext.beginPath();
firstContext.fillStyle = 'blue';
firstContext.moveTo(halfWidth,0);
firstContext.lineTo(halfWidth,150);
firstContext.lineTo(halfWidth + 10 , 130);
firstContext.moveTo(halfWidth,150);
firstContext.lineTo(halfWidth - 10 , 130);
firstContext.stroke();

// 最初のボックスにinputタグを挿入
firstItemBox.appendChild(input);
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

