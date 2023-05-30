// Objective: Create a rock, paper, scissors game
const TYPES = {
    0: "rock",
    1: "paper",
    2: "scissors",
};
const buttons = document.querySelectorAll('button');
const divResult = document.querySelector('#result');
const divUserScore = document.querySelector("#userScore");
const divComputerScore = document.querySelector("#computerScore");
const divRound = document.querySelector("#round");
const divWinner = document.querySelector("#winner");

let userScore = 0;
let computerScore = 0;
let round = 0;
let winner;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(getUserChoiceId(e), getComputerChoiceId());
    })
})




function playRound(playerSelection, computerSelection) {
    let hasUserWin;
    let resultMessage;
    let isTie = false;
    if (playerSelection === computerSelection) { // Tie
        isTie = true;
        resultMessage = "Is a Tie";
    } else if (playerSelection === getIdFromType("rock")) { // Rock
        hasUserWin = computerSelection === getIdFromType("scissors"); // If computer chose scissors, user wins
    } else if (playerSelection === getIdFromType("paper")) { // Paper
        hasUserWin = computerSelection === getIdFromType("rock"); // If computer chose rock, user wins
    } else { // Scissors
        hasUserWin = computerSelection === getIdFromType("paper"); // If computer chose paper, user wins
    }
    if (hasUserWin && !isTie) {
        userScore++;
        resultMessage = `The user win with ${TYPES[playerSelection]} vs ${TYPES[computerSelection]}`;
    } else if (!isTie){
        computerScore++;
        resultMessage = `The computer win with ${TYPES[computerSelection]} vs ${TYPES[playerSelection]}`;
    }
    round++;
    if (isWinner()) {
        let winnerName = userScore === 5 ? "User" : "Computer";
        updateWinnerContent(winnerName);

        round = 0;
        userScore = 0;
        computerScore = 0
        updateRoundContent();
        updateUserScoreContent()
        updateComputerScoreContent()
    }

    updateResultContent(resultMessage)
    updateUserScoreContent()
    updateComputerScoreContent()
    updateRoundContent()

}

function isWinner() {
    return userScore === 5 || computerScore === 5;
}

/**
 * Generates a random number between 0 and 2
 * @returns {number} - A random number between 0 and 2
 */
function getComputerChoiceId() {
    return Math.floor(Math.random() * Object.keys(TYPES).length);
}

function getUserChoiceId(event) {
    return getIdFromType(event.target.id);
}

function getIdFromType(type) {
    return +Object.keys(TYPES).find(key => TYPES[key] === type);
}

// ----------------------------
//      Setter of Content to HTML
// ----------------------------
function updateResultContent(string) {
    divResult.textContent = string;
}
function updateRoundContent() {
    divRound.textContent = `The Round ${round}`;
}
function updateUserScoreContent() {
    divUserScore.textContent = `The user has ${userScore} score.`;
}
function updateComputerScoreContent() {
    divComputerScore.textContent = `The computer has ${computerScore} score.`;
}
function updateWinnerContent(winnerName) {
    divWinner.textContent = `The winner is ${winnerName}`;
}

