const palindromes = function (letter) {
    let filterLetter = letter.replace(/[^a-zA-Z]/gm,"").toLowerCase();
    let reverseLetter = reverseString(filterLetter);
    return reverseLetter === filterLetter;
};

function reverseString (string) {
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString
}

// Do not edit below this line
module.exports = palindromes;
