const eraser = document.querySelector('#eraser');



document.addEventListener('DOMContentLoaded', function() {
    size = prompt("How large would you like the board? (up to 64)")
    generateGrid(size);
}, false);



function generateGrid(size){

    if(arguments[0] == null){
        size = 16;
    }

    const container = document.querySelector('#container');
    container.style.cssText = 'grid-template-columns: repeat(${size},1fr);'



    for(i=0; i<size; i++){
        for(j=0;j<size;j++){
            const gridItem = document.createElement('div');
            gridItem.setAttribute("class", 'gridOff');
            container.appendChild(gridItem);
        }
    }

    const gridpiece = document.querySelectorAll('#gridOff');

    gridpiece.style.height = 700/size;
    gridpiece.style.width = 700/size;

}



container.addEventListener('mouseover',(e) => {
    gridToggle(e)

});


function gridToggle(e){
    if(e.target.className === "gridOff"){
        e.target.className = "gridOn";
    }
}



eraser.addEventListener('click',(e) => {
    erase();
});


function erase(){
    const gridcolored = document.querySelectorAll('#gridOn');
    gridcolored.className = "gridOff"
    size = prompt("How large would you like the board? (up to 64)")
    generateGrid(size);

}