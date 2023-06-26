const ticTacToe = (() => {
    const gameBoard = new Array(9);
    const symbols = {
        symbolClass: "material-symbols-outlined",
        circleTextContent: "circle",
        crossTextContent: "close",
    }

    const placeCard = (card, symbol) => {
        if (card.classList.length > 0) {
            return;
        }
        card.classList.add(symbols.symbolClass);
        if (symbol === "X") {
            card.textContent = symbols.crossTextContent;
        }
        else {
            card.textContent = symbols.circleTextContent;
        }
    }

    const buildBoard = () => {
        const boardCards = document.querySelector(".tab");
        console.log(boardCards);
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