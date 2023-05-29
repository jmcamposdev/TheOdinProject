const TYPES = {
    0: "Rock",
    1: "Paper",
    2: "Scissors",
};

const playerSelection = 0;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function playRound(playerSelection, computerSelection) {
    let hasUserWin;
    if (playerSelection === computerSelection) { // Tie
        return "It's a tie!";
    } else if (playerSelection === 0) { // Rock
        hasUserWin = computerSelection === 2; // If computer chose scissors, user wins
    } else if (playerSelection === 1) { // Paper
        hasUserWin = computerSelection === 0; // If computer chose rock, user wins
    } else { // Scissors
        hasUserWin = computerSelection === 1; // If computer chose paper, user wins
    }

    if (hasUserWin) {
        return `You win! ${TYPES[playerSelection]} beats ${TYPES[computerSelection]}`;
    } else {
        return `You lose! ${TYPES[computerSelection]} beats ${TYPES[playerSelection]}`;
    }
}

/**
 * Generates a random number between 0 and 2
 * @returns {number} - A random number between 0 and 2
 */
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}