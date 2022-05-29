const allArea = document.querySelectorAll('.area');

// ボックス初期値の成形
for(let i=0; i<allArea.length; i++){
    const area = allArea[i];
    const areaArrow = area.querySelectorAll('.arrow');

    i % 2 === 0 ? styleShaper('100px'): styleShaper('200px');

    function styleShaper(widthValue){
        for(let n = 0; n < areaArrow.length; n++){
            const arrows = area.getElementsByClassName('arrow')[n];
            arrows.style.height = '50px';
            arrows.style.width = widthValue;
        }
    }
}

//最初のボックス設定
const firstItemBox = allArea[1].querySelectorAll('.empty')[0];
firstItemBox.className = 'itemBox startEnd strongBE';

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
