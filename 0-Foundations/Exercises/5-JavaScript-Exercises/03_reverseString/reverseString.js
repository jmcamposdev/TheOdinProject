const reverseString = function(string) {
    // Convert string to array, reverse array, join all characters by empty string
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
