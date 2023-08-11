const repeatString = function(string, num) {
    if (num < 0) { // negative numbers are not valid
        return "ERROR";
    }

    // Generate a string with the given string repeated num times
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
        repeatedString += string;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
