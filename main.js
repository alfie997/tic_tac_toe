// const gameBoard = (function () {
//     const board = [
//         "_#_|_#_|_#_",
//         "_#_|_#_|_#_",
//         " # | # | # "
//     ]

    // function displayBoard() {
    //     console.log(board);
    //     for (const row of board) {
    //         console.log(row);
    //     }
    // }

//     return { displayBoard };
// })();

// function placeMark() {

// }

// gameBoard.displayBoard();

const gameBoard = (function () {
    const board = [
        [ '_','#','_','|','_','#','_','|','_','#','_' ],
        [ '_','#','_','|','_','#','_','|','_','#','_' ],
        [ ' ','#',' ','|',' ','#',' ','|',' ','#',' ' ]
    ];

    const addExOh = (cell) => {
        columns = "x";

        // const cells = 10;
        // for (const rows of board) {
        //     for (const columns of rows) {
        //         for (let i = 1; i < cells; i++) {
        //             if (cell === i && columns === "#") 
        //         }
        //     }
        // }
    }

    return { 
        board
    };
})();

const interface = (function () {
    const displayBoard = () => {
        const board = gameBoard.board;
        let string = "";
        for (const row of board) {
            for (const column of row) {
                string += column;
            }
            string += "\n";
        }
        console.log(string);
    };

    const askInput = () => {
        console.log(
        "pick a cell:\n",
        "(1) top left\n",
        "(2) top center\n",
        "(3) top right\n",
        "(4) middle left\n",
        "(5) middle center\n",
        "(6) middle right\n",
        "(7) bottom left\n",
        "(8) bottom center\n",
        "(9) bottom right"
        );
    };

    return {
        displayBoard,
        askInput
    };
})();

function Cell() {
    let cell = 0;

    const getCell = () => {

    };

}

interface.displayBoard();
interface.askInput();



// let game = true;

// let player = "x";

// function switchPlayer() {
//     if (player === "o") {
//         player = "x";
//     } else if (player === "x") {
//         player = "o";
//     }
//     console.log(`player ${player}: select cell`);
// }

// function checkGame() {
//     if (gameBoard[0][1] == "x" && gameBoard[0][5] == "x" && gameBoard[0][9] == "x"
//         || gameBoard[0][1] == "x" && gameBoard[1][1] == "x" && gameBoard[2][1] == "x"
//         || gameBoard[0][1] == "x" && gameBoard[1][5] == "x" && gameBoard[2][9] == "x"
//         || gameBoard[0][9] == "x" && gameBoard[1][5] == "x" && gameBoard[2][1] == "x"
//         || gameBoard[0][5] == "x" && gameBoard[1][5] == "x" && gameBoard[2][5] == "x"
//         || gameBoard[1][1] == "x" && gameBoard[1][5] == "x" && gameBoard[1][9] == "x"
//         || gameBoard[0][9] == "x" && gameBoard[1][9] == "x" && gameBoard[2][9] == "x"
//         || gameBoard[2][1] == "x" && gameBoard[2][5] == "x" && gameBoard[2][9] == "x") {
//             console.log(`player x wins!`);
//             game = false;
//     }

//     if (gameBoard[0][1] == "o" && gameBoard[0][5] == "o" && gameBoard[0][9] == "o"
//         || gameBoard[0][1] == "o" && gameBoard[1][1] == "o" && gameBoard[2][1] == "o"
//         || gameBoard[0][1] == "o" && gameBoard[1][5] == "o" && gameBoard[2][9] == "o"
//         || gameBoard[0][9] == "o" && gameBoard[1][5] == "o" && gameBoard[2][1] == "o"
//         || gameBoard[0][5] == "o" && gameBoard[1][5] == "o" && gameBoard[2][5] == "o"
//         || gameBoard[1][1] == "o" && gameBoard[1][5] == "o" && gameBoard[1][9] == "o"
//         || gameBoard[0][9] == "o" && gameBoard[1][9] == "o" && gameBoard[2][9] == "o"
//         || gameBoard[2][1] == "o" && gameBoard[2][5] == "o" && gameBoard[2][9] == "o") {
//             console.log(`player o wins!`);
//             game = false;
//     }
// }

// function playRound(cell) {
//     if (cell === "top left" && gameBoard[0][1] === "#") {
//         if (player === "x") {
//             gameBoard[0][1] = "x";
//         } else {
//             gameBoard[0][1] = "o";
//         }
//     }
//     if (cell === "top middle" && gameBoard[0][5] === "#") {
//         if (player === "x") {
//             gameBoard[0][5] = "x";
//         } else {
//             gameBoard[0][5] = "o";
//         }
//     }
//     if (cell === "top right" && gameBoard[0][9] === "#") {
//         if (player === "x") {
//             gameBoard[0][9] = "x";
//         } else {
//             gameBoard[0][9] = "o";
//         }
//     }
//     if (cell === "center left" && gameBoard[1][1] === "#") {
//         if (player === "x") {
//             gameBoard[1][1] = "x";
//         } else {
//             gameBoard[1][1] = "o";
//         }
//     }
//     if (cell === "center middle" && gameBoard[1][5] === "#") {
//         if (player === "x") {
//             gameBoard[1][5] = "x";
//         } else {
//             gameBoard[1][5] = "o";
//         }
//     }
//     if (cell === "center right" && gameBoard[1][9] === "#") {
//         if (player === "x") {
//             gameBoard[1][9] = "x";
//         } else {
//             gameBoard[1][9] = "o";
//         }
//     }
//     if (cell === "bottom left" && gameBoard[2][1] === "#") {
//         if (player === "x") {
//             gameBoard[2][1] = "x";
//         } else {
//             gameBoard[2][1] = "o";
//         }
//     }
//     if (cell === "bottom middle" && gameBoard[2][5] === "#") {
//         if (player === "x") {
//             gameBoard[2][5] = "x";
//         } else {
//             gameBoard[2][5] = "o";
//         }
//     }
//     if (cell === "bottom right" && gameBoard[2][9] === "#") {
//         if (player === "x") {
//             gameBoard[2][9] = "x";
//         } else {
//             gameBoard[2][9] = "o";
//         }
//     }
//     displayBoard();
//     checkGame();
//     if (game === true) switchPlayer();
// }

// for (const row of gameBoard) {
//     for (const column of row) {
//     }
//     console.log(row);
// };

// let string = "";

// for (const row of gameBoard) {
//     for (const column of row) {
//         string += column;
//     }
//     string += "\n";
// }

// console.log(string);

// console.log("player X: select cell");
