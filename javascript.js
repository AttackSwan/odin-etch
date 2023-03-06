const defaultGridSize   = 24;
const grid              = document.getElementById("grid");
const sizeButton        = document.getElementById("sizeBTN");
const clearButton       = document.getElementById("clearBTN");
const monoButton        = document.getElementById("monoBTN");
const rainbowButton     = document.getElementById("rainbowBTN");
const bgColor           = getComputedStyle(document.documentElement)
                            .getPropertyValue('--bgColor');
let colorMode           = "mono";

sizeButton.onclick      = () => getNewSize();
clearButton.onclick     = () => clearCells();
monoButton.onclick      = () => monoMode()
rainbowButton.onclick   = () => rgbMode();

makeGrid(defaultGridSize);

function makeGrid(size){  
    //set row and column layout
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    //create and append cells
    for (i = 0; i < (size * size); i++){
        let cell = document.createElement('div');
        cell.classList.add("grid-item");
        //add listener
        cell.addEventListener('mouseover', (e) => {
            colorCell(e);
        });
        grid.appendChild(cell);
    }
}

function getNewSize(){
    let newSize = prompt("Please enter a new grid size between 1 and 100");
    newSize = sizeValidate(newSize);
    deleteCells();    
    makeGrid(newSize);
}
function sizeValidate(size){
    while (size <= 0 || size > 100){
        size = prompt("Invalid size! Please enter a new grid size between 1 and 100");
    }
    return size;
}
function deleteCells(){
    grid.innerHTML = '';  //removes all child elements of grid
}
function clearCells(){
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        const element = cell;
        element.style.backgroundColor = bgColor;
    });
}

function monoMode() {
    colorMode = "mono";
}

function rgbMode(){
    colorMode = "rgb";
    console.log(colorMode);
}
function colorCell(e){
    if (colorMode === "mono"){
        e.target.style.backgroundColor = "pink";
    }
    else if (colorMode === "rgb"){
        const rgb1 = getRandom(0,255);
        const rgb2 = getRandom(0,255);
        const rgb3 = getRandom(0,255);
        e.target.style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`;
    }
}

function getRandom(min, max){
    return Math.random() * (max - min) + min;
}