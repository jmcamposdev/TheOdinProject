const rows = 16;
const columns = 16;
const divGrid = document.querySelector('#grid');
createGrid(rows, columns);


function createGrid(rows, columns) {
    divGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    divGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement('div');
        //cell.addEventListener('mouseover', changeColor);
        divGrid.appendChild(cell).className = 'grid-item';
    }
}