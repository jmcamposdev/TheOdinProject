import Player  from "./player.js";
import ticTacToe from "./tictactoe.js";

const player1 = new Player("Player 1", "X");
const player2 = new Player("Player 2", "O");
let currentPlayer = player1;

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const card = e.target.children[0];
        ticTacToe.placeCard(card, currentPlayer.symbol);
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    });
});

ticTacToe.buildBoard();