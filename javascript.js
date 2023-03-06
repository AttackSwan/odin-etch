const defaultGridSize   = 24;
const grid              = document.getElementById("grid");
const sizeButton        = document.getElementById("sizeBTN");
const clearButton       = document.getElementById("clearBTN");
const monoButton        = document.getElementById("monoBTN");
const rainbowButton     = document.getElementById("rainbowBTN");
const shadeButton       = document.getElementById("shadeBTN");
const bgColor           = getComputedStyle(document.documentElement)
                            .getPropertyValue('--color-bg');
const hdrColor          = getComputedStyle(document.documentElement)
                            .getPropertyValue('--color-header');
let colorMode           = "mono";

sizeButton.onclick      = () => getNewSize();
clearButton.onclick     = () => clearCells();
monoButton.onclick      = () => {colorMode = "mono";}
rainbowButton.onclick   = () => {colorMode = "rgb";}
shadeButton.onclick     = () => {colorMode = "shade";};

function makeGrid(size){  
    //set row and column layout
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    //create and append cells
    for (i = 0; i < (size * size); i++){
        let cell = document.createElement('div');
        cell.classList.add("grid-item");
        cell.setAttribute('Data-opacity', 0);

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
    //Add integer validation
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
        cell.setAttribute("data-opacity", 0);
    });
}
function colorCell(e){
    if (colorMode === "mono"){
        e.target.style.backgroundColor = hdrColor;
    }
    else if (colorMode === "rgb"){
        const rgb1 = getRandom(0,255);
        const rgb2 = getRandom(0,255);
        const rgb3 = getRandom(0,255);
        e.target.style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`;
    }
    else if (colorMode === "shade"){
        let shade = parseFloat(e.target.getAttribute("data-opacity"));
        let newShade = shade + 0.1;
        if (shade < 1){
            e.target.style.backgroundColor = `rgb(252,203,6, ${newShade})`; 
            e.target.setAttribute("data-opacity", newShade);
        }
    }
}
function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

window.onload = () => {
    makeGrid(defaultGridSize);
}