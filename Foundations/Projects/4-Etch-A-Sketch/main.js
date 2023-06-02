const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = '#1A1A1A';
const DEFAULT_MODE = 'color';
const DEFAULT_ERASER = '#FFFFFF';

let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;
let currentGridSize = DEFAULT_GRID_SIZE;
let painting = false;

// Setters

function setCurrentGridSize(newSize) {
    currentGridSize = newSize;
}
function setCurrentColor(newColor) {
    currentColor = newColor;
}

function changeMode(newMode) {
    currentMode = newMode;
}

// DOM Elements
const divGrid = document.querySelector('#grid');
const sliderGrid = document.querySelector('.slider');
const sliderValue = document.querySelector('#grid-size');
const pickColor = document.querySelector('#pick-color');
const btnClear = document.querySelector('#clear');
const btnRainbow = document.querySelector('#rainbow');
const btnColorMode = document.querySelector('#color-mode');
const btnEraser = document.querySelector('#eraser');

// Event Listeners
sliderGrid.onchange = () => changeGridSize(sliderGrid.value);
sliderGrid.oninput = () => sliderValue.textContent = sliderGrid.value;
btnClear.onclick = () => reloadGrid();
btnRainbow.onclick = () => changeMode('rainbow');
pickColor.onchange = () => setCurrentColor(pickColor.value);
btnColorMode.onclick = () => changeMode('color');
btnEraser.onclick = () => changeMode('eraser');
// For mobile touch events
divGrid.addEventListener("touchmove", paint);
divGrid.addEventListener("touchstart", startPainting);
divGrid.addEventListener("touchend", stopPainting);
// On page load create the grid
window.onload = () => reloadGrid();

/**
 * Function to change the grid size
 * Called when the slider value is changed
 * @param newSize New grid size
 */
function changeGridSize(newSize) {
    setCurrentGridSize(newSize);
    reloadGrid();
}

/**
 * Function to reload the grid
 * Clears the grid and creates a new one
 * Called when the grid size is changed
 */
function reloadGrid() {
    clearGrid();
    createGrid();
}

/**
 * Function to create the grid
 * Creates a grid with the current grid size
 * Adds a mouseover event listener to each grid item
 * Calls the changeColor function on mouseover
 */
function createGrid() {
    divGrid.style.gridTemplateColumns = `repeat(${currentGridSize}, 1fr)`;
    divGrid.style.gridTemplateRows = `repeat(${currentGridSize}, 1fr)`;
    for (let i = 0; i < (currentGridSize**2); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        divGrid.appendChild(cell).className = 'grid-item';
    }
}

/**
 * Function to clear the grid
 * Removes all the grid items
 */
function clearGrid() {
    divGrid.textContent = '';
}

/**
 * Function to change the color of the grid item
 * @param e MouseOver event
 */
function changeColor(e) {
    console.log(e);
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'rainbow'){
        e.target.style.backgroundColor = getRandomColor();
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = DEFAULT_ERASER;
    }
}


/**
 * Function to generate a random color
 * @returns {string} Random color in rgb format
 */
function getRandomColor() {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   return `rgb(${r}, ${g}, ${b})`;
}

/* ------------------ Mobile Touch Functions ------------------ */

/**
 * Function to start painting on touch devices
 * @param event TouchStart event
 */
function startPainting(event) {
    painting = true;
    paint(event);
}

/**
 * Function to paint on touch devices
 * @param event TouchMove event
 */
function paint(event) {
    if (!painting) return;
    // Obtain the element at the touch position
    let target = document.elementFromPoint(
        event.touches[0].clientX,
        event.touches[0].clientY
    );
    // Paint if the element is a grid item
    if (target !== divGrid && target.classList.contains("grid-item")) {
        // Call the changeColor function with the target element
        changeColor({target: target});
    }
}

/**
 * Function to stop painting on touch devices
 */
function stopPainting() {
    painting = false;
}