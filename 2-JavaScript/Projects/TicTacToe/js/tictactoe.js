const ticTacToe = (() => {
    const gameBoard = new Array(9);
    const symbols = {
        symbolClass: "material-symbols-outlined",
        circleTextContent: "circle",
        crossTextContent: "close",
    }

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
    return { placeCard, buildBoard}
})();

export default ticTacToe;