import Player  from "./player.js";
import ticTacToe from "./tictactoe.js";

// Elements
const roundCounter = document.querySelector("#round-counter");
const modalText = document.querySelector(".modal-text");

const player1 = new Player("Player 1", "X");
const player2 = new Player("Player 2", "O");
let currentPlayer = player1;

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        const card = e.target.children[0];
        if (card.classList.length > 0) { // If the card already has a symbol, return
            return;
        }

        ticTacToe.placeCard(card, currentPlayer.symbol, index);
        
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

function addRound() {
    roundCounter.textContent = Number(roundCounter.textContent) + 1;
};

function setModalText(text) {
    modalText.textContent = text;
}