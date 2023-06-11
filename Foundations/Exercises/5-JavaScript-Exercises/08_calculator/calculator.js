const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(listOfNums) {
    return listOfNums.reduce((sum, currentNum) => sum + currentNum, 0);
};

const multiply = function(listOfNums) {
    return listOfNums.reduce((multiplication, currentNum) => multiplication * currentNum, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(number) {
    let factorial = 1;
    for (let i = 1; i <= number ; i++) {
        factorial *= i;
    }
    return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
