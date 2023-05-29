const TYPES = {
    0: "Rock",
    1: "Paper",
    2: "Scissors",
};

game()



function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    while (round <= 5) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result) {
            playerScore++;
            console.log(`You win! ${TYPES[playerSelection]} beats ${TYPES[computerSelection]}`);
        } else {
            computerScore++;
            console.log(`You lose! ${TYPES[computerSelection]} beats ${TYPES[playerSelection]}`);
        }
        round++;
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}

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

    return hasUserWin;
    // if (hasUserWin) {
    //     return `You win! ${TYPES[playerSelection]} beats ${TYPES[computerSelection]}`;
    // } else {
    //     return `You lose! ${TYPES[computerSelection]} beats ${TYPES[playerSelection]}`;
    // }
}

/**
 * Generates a random number between 0 and 2
 * @returns {number} - A random number between 0 and 2
 */
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
    if (playerChoice === "rock") {
        return 0;
    } else if (playerChoice === "paper") {
        return 1;
    } else if (playerChoice === "scissors") {
        return 2;
    } else {
        alert("Invalid choice!");
        return getPlayerChoice();
    }
}