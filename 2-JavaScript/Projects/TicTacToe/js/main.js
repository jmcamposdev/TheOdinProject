import Player  from "./player.js";
import ticTacToe from "./tictactoe.js";

// Elements
const restartBtn = document.querySelector("#restart");
const roundCounter = document.querySelector("#round-counter");
const modalText = document.querySelector(".modal-text");
const player1Points = document.querySelector("#player1-points");
const player2Points = document.querySelector("#player2-points");

const player1 = new Player("Player 1", "X");
const player2 = new Player("Player 2", "O");
let currentPlayer = player1;

// Event listeners
restartBtn.addEventListener("click", restartGame);
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        const card = e.target.children[0];
        if (card.classList.length > 0) { // If the card already has a symbol, return
            return;
        }

        ticTacToe.placeCard(card, currentPlayer.symbol, index);
        
        if (ticTacToe.isWinner(currentPlayer.symbol)) {
            setModalText(`${currentPlayer.name} wins!`);
            ticTacToe.cleanBoard();
            addRound();
            addPlayerPoints(currentPlayer);
            return;
        }

        if (ticTacToe.isDraw()) {
            setModalText("Draw!");
            ticTacToe.cleanBoard();
            addRound();
            return;
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1;

    });
});

ticTacToe.buildBoard();

function restartGame() {
    ticTacToe.cleanBoard();
    player1.points = 0;
    player2.points = 0;
    updatePlayerPoints();
    setRound(0);
    setModalText("");
}

function setRound(round) {
    roundCounter.textContent = round;
}
function addRound() {
    roundCounter.textContent = Number(roundCounter.textContent) + 1;
};

function addPlayerPoints(player) {
    player.points += 1;
    updatePlayerPoints();
}

function updatePlayerPoints() {
    player1Points.textContent = player1.points;
    player2Points.textContent = player2.points;
}
function setModalText(text) {
    modalText.textContent = text;
}