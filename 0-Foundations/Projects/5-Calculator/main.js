/* Get all the buttons */
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const display = document.querySelector("#display");
const displayHistory = document.querySelector("#display-history");
const plusMinus = document.querySelector("#plus-minus");

// Variables
let firstNumber = 0;
let secondNumber = 0;
let selectedOperator = "";
let isOperatorClicked = false;

// Clear the display and history
clearAll();



/* Add event listeners to all the buttons */
numbers.forEach(number => {  // Add event listeners to all the number buttons
    number.addEventListener("click", () => {
        setDisplayNumber(number.textContent);
    });
});
// Operator Functions
operators.forEach(operator => { // Add event listeners to all the operator buttons
    operator.addEventListener("click", () => {
        if (!isOperatorClicked) {
            selectedOperator = operator.textContent;
            firstNumber = +display.textContent;
            setHistoryDisplay(firstNumber, selectedOperator);
            clearDisplay();
            isOperatorClicked = true;
        } else if (getDisplayNumber()) {
            secondNumber = +display.textContent;
            firstNumber = operate(firstNumber, secondNumber, operator.textContent);
            clearBothDisplay();
            setHistoryDisplay(firstNumber, selectedOperator);
        }
    })});


decimal.addEventListener("click", () => { // Add event listener to the decimal button
    if (!display.textContent.includes(".")) {
        setDisplay(decimal.textContent);
    }
});
clear.addEventListener("click", clearAll);
equals.addEventListener("click", () => {
    if (getDisplayNumber() && isOperatorClicked) {
        secondNumber = +display.textContent;
        firstNumber = operate(firstNumber, secondNumber, selectedOperator);
        clearBothDisplay();
        setDisplayNumber(firstNumber);
        clearHistory();
        isOperatorClicked = false;
    }
});
plusMinus.addEventListener("click", changeNumberSimbol);

// Plus/Minus Functions
function changeNumberSimbol () {
    if (display.textContent) {
        display.textContent = (+display.textContent) * -1;
    }
}


// MAIN Display Functions
function getDisplayNumber () {
    return +display.textContent;
}
function setDisplay (number) {
    display.textContent += number;
}
function setDisplayNumber (number) {
    if (display.textContent.length < 15) {
        display.textContent += Math.round(number * 100) / 100;
    }
}

// History Display Functions
function setHistoryDisplay (number, operator) {
    displayHistory.textContent = `${number} ${operator}`;
}

// Clear Functions
function clearBothDisplay () {
    clearDisplay();
    clearHistory();
}
function clearDisplay () {
    display.textContent = "";
}
function clearHistory () {
    displayHistory.textContent = "";
}
function clearAll () {
    clearBothDisplay();
    firstNumber = 0;
    secondNumber = 0;
    selectedOperator = "";
    isOperatorClicked = false;
}

// Operation Functions
function add (num1, num2) {
    return num1 + num2;
}
function subtract (num1, num2) {
    return num1 - num2;
}
function multiply (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    return num1 / num2;
}

function operate (num1, num2, operator) {
    operator = operator.trim().toLowerCase();
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "x":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            break;
    }
    return result;
}
