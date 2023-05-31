let rows = 16;
let columns = 16;
const divGrid = document.querySelector('#grid');
const sliderGrid = document.querySelector('.slider');
const sliderValue = document.querySelector('#grid-size');
const pickColor = document.querySelector('#pick-color');
console.log(sliderValue)

createGrid();


function createGrid() {
    divGrid.textContent = '';
    divGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    divGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        divGrid.appendChild(cell).className = 'grid-item';
    }
}

function changeColor(e) {
    if (e.buttons === 1) {
        let selectedColor = pickColor.value;
        e.target.style.backgroundColor = selectedColor;
    }
}

sliderGrid.addEventListener('change', function () {
    rows = columns = sliderGrid.value;
    createGrid()
});

sliderGrid.oninput = function () {
    sliderValue.textContent = sliderGrid.value;
}

function clearGrid() {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}