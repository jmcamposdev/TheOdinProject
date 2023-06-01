const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = '#1A1A1A';
const DEFAULT_MODE = 'color';
const DEFAULT_ERASER = '#FFFFFF';

let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;
let currentGridSize = DEFAULT_GRID_SIZE;

function setCurrentGridSize(newSize) {
    currentGridSize = newSize;
}
function setCurrentColor(newColor) {
    currentColor = newColor;
}


function changeMode(newMode) {
    currentMode = newMode;
}

const divGrid = document.querySelector('#grid');
const sliderGrid = document.querySelector('.slider');
const sliderValue = document.querySelector('#grid-size');
const pickColor = document.querySelector('#pick-color');
const btnClear = document.querySelector('#clear');
const btnRainbow = document.querySelector('#rainbow');
const btnColorMode = document.querySelector('#color-mode');

sliderGrid.onchange = () => changeGridSize(sliderGrid.value);
sliderGrid.oninput = () => sliderValue.textContent = sliderGrid.value;
btnClear.onclick = () => reloadGrid();
btnRainbow.onclick = () => changeMode('rainbow');
pickColor.onchange = () => setCurrentColor(pickColor.value);
btnColorMode.onclick = () => changeMode('color');



function changeGridSize(newSize) {
    setCurrentGridSize(newSize);
    reloadGrid();
}

function reloadGrid() {
    clearGrid();
    createGrid();
}


function createGrid() {
    divGrid.style.gridTemplateColumns = `repeat(${currentGridSize}, 1fr)`;
    divGrid.style.gridTemplateRows = `repeat(${currentGridSize}, 1fr)`;
    for (let i = 0; i < (currentGridSize**2); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        divGrid.appendChild(cell).className = 'grid-item';
    }
}

function clearGrid() {
    divGrid.textContent = '';
}

function changeColor(e) {

    if (e.buttons === 1) {
        if (currentMode === 'color') {
            e.target.style.backgroundColor = currentColor;
        } else if (currentMode === 'rainbow'){
            e.target.style.backgroundColor = getRandomColor();
        }
    }
}

function getRandomColor() {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   return `rgb(${r}, ${g}, ${b})`;
}

window.onload = () => reloadGrid();