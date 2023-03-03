let a = 2;
let b = 2;

const container = document.getElementById("grid");
console.log(container);

function makeGrid(rows, cols){
    //set number of rows and columns in CSS
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    console.log(container.style.getPropertyValue("--grid-rows"));
    //create cells
    for (i = 0; i < (rows * cols); i++){
        //create a div
        let cell = document.createElement('div');
        cell.textContent = i+1;
        //add cell to grid
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrid(a, b);