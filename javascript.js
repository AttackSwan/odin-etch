let gridSize    = 12;
const grid      = document.getElementById("grid");

function makeGrid(size){
    //set number of rows and columns in CSS
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

function colorCell(e){
    e.target.style.backgroundColor = "pink";
}

makeGrid(gridSize);