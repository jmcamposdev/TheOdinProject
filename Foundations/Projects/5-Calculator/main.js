/* Get all the buttons */
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const display = document.querySelector("#display");
const displayHistory = document.querySelector("#display-history");
clearDisplay();

/* Add event listeners to all the buttons */
numbers.forEach(number => {
    number.addEventListener("click", () => {
        displayNumber(number.textContent);
    });
});
clear.addEventListener("click", clearDisplay);


// Display Functions
function displayNumber (number) {
    if (display.textContent.length < 15) {
        display.textContent += number;
    }
}
function clearDisplay () {
    display.textContent = "";
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
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
             break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break
        default:
            break;
    }
    return result;
}
