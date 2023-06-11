const fibonacci = function(number) {
    number = +number; // Convert to number
    if (number <= 0) {
        return "OOPS";
    }
    let x1 = 1;
    let x2 = 1;
    let aux;
    for (let i = 2; i < number; i++) {
        aux = x1;
        x1 += x2;
        x2 = aux;
    }
    return x1;
};

// Do not edit below this line
module.exports = fibonacci;
