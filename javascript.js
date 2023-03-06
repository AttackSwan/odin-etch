const defaultGridSize   = 12;
const grid              = document.getElementById("grid");
const sizeButton        = document.getElementById("sizeBTN");
const clearButton       = document.getElementById("clearBTN");
const rainbowButton     = document.getElementById("rainbowBTN");
const bgColor           = getComputedStyle(document.documentElement)
                            .getPropertyValue('--bgColor');

sizeButton.onclick      = () => getNewSize();
clearButton.onclick     = () => clearCells();
rainbowButton.onclick   = () => RGBCells();



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
    let newSize = prompt("Please enter a new grid size between 1 and 256");
    sizeValidate(newSize);
}

function sizeValidate(size){
    while (size <= 0 || size > 256){
        size = prompt("Invalid size! Please enter a new grid size between 1 and 256");
    }
    clearCells();    
    makeGrid(size);
}

function clearCells(){
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        const element = cell;
        element.style.backgroundColor = bgColor;
    });
}

function RGBCells(){
    alert("RGB Cells");
}
function colorCell(e){
    e.target.style.backgroundColor = "pink";
}

