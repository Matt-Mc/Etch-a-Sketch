
document.addEventListener('DOMContentLoaded', function() {
    generateGrid();
}, false);



function generateGrid(size){

    if(arguments[0] == null){
        size = 16;
    }

    const container = document.querySelector('#container');


    for(i=0; i<size; i++){
        for(j=0;j<size;j++){
            const gridItem = document.createElement('div');
            gridItem.setAttribute("class", 'gridOff');
            container.appendChild(gridItem);
        }
    }
}



container.addEventListener('mouseover',(e) => {
    gridToggle(e)

});


function gridToggle(e){

    if(e.target.className === "gridOff"){
        e.target.className = "gridOn";
    }
}
