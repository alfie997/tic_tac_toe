const gameBoard = (function () {
    const board = [
        "__|__|__",
        "__|__|__",
        "  |  |  "
    ]

    function displayBoard() {
        console.log(board);
        for (const row of board) {
            console.log(row);
        }
    }

    return { displayBoard };
})();

gameBoard.displayBoard();