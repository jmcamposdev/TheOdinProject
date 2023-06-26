const ticTacToe = (() => {
    const gameBoard = new Array(9).fill(undefined);
    const symbols = {
        symbolClass: "material-symbols-outlined",
        circleTextContent: "circle",
        crossTextContent: "close",
    }

    /*
    * Place a card on the board
    * @param {HTMLElement} card - The card to place
    * @param {string} symbol - The symbol to place
    * @param {number} index - The index of the card
    * @returns {void}
    */
    const placeCard = (card, symbol, index) => {
        if (card.classList.length > 0) {
            return;
        }
        gameBoard[index] = symbol;
        card.classList.add(symbols.symbolClass);
        if (symbol === "X") {
            card.textContent = symbols.crossTextContent;
        }
        else {
            card.textContent = symbols.circleTextContent;
        }
    }

    /*
    * Build the board with the current gameBoard array
    */
    const buildBoard = () => {
        const boardCards = document.querySelectorAll(".tab");
        for (let i = 0; i < 9; i++) {
            boardCards[i].innerHTML = "";
            const card = document.createElement("span");
            switch (gameBoard[i]) {
                case undefined: break;
                case "X":
                case "O": {
                    card.classList.add(symbols.symbolClass);
                    card.textContent = gameBoard[i] === "X" ? symbols.crossTextContent : symbols.circleTextContent;
                }
            }
            boardCards[i].appendChild(card);
        }
    }

    const cleanBoard = () => {
        gameBoard.fill(undefined);
        buildBoard();
    }

    const isDraw = () => { 
        return gameBoard.every((card) => card !== undefined);
    }
    return { placeCard, buildBoard, isDraw, cleanBoard}
})();

export default ticTacToe;