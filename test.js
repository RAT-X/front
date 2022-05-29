const allArea = document.querySelectorAll('.area');

// ボックスの成形
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
