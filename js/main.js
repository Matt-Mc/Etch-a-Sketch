const eraser = document.querySelector('#eraser');
const container = document.querySelector('#container');


//Prompts the user for a board size only AFTER everything is loaded
document.addEventListener('DOMContentLoaded', function() {
    size = prompt("How large would you like the board? (up to 64)")
    generateGrid(size);
}, false);


//Generates the Grid to a specified size
function generateGrid(size){

    //checks if size is null or not a number and assigns a default value if it is
    if(arguments[0] == null || isNaN(size)){
        size = 16;
    }

    //this dynamically rezises the flexbox grid to match the size given by the user
    container.style.cssText = 'grid-template-columns: repeat('+size+',1fr);'


    //the actual algorithm used to generate the grid
    for(i=0; i<size; i++){
        for(j=0;j<size;j++){
            const gridItem = document.createElement('div');


            //this makes sure the "cells" are the correct size be adding them
            gridItem.style.height = 700/size;
            gridItem.style.width = 700/size;
            gridItem.setAttribute("class", 'gridOff');
            container.appendChild(gridItem);
        }   
    }

}



//just an evenlistener to check if the user has "hovered" over the container
container.addEventListener('mouseover',(e) => {
    gridToggle(e)
});


function gridToggle(e){

    //just applys the other css style 
    if(e.target.className === "gridOff"){
        e.target.className = "gridOn";
    }
}



eraser.addEventListener('click',(e) => {
    erase();
});


function erase(){

    //loops through the container and will delete the last element as long as there is a last element
     while(container.lastElementChild){
        container.removeChild(container.lastElementChild)
    }

    size = prompt("How large would you like the board? (up to 64)");
    generateGrid(size);
   

}