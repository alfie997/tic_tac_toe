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

// for (const cell of gameBoard) {
//     console.log(cell);
// };

// const board = [
//     "_#_|_#_|_#_",
//     "_#_|_#_|_#_",
//     " # | # | # "
// ];

// const height = 3;
// const width = 3;
// const board = [];

// for (let i = 0; i < height; i++) {
//     board[i] = [];
//     for (let j = 0; j < width; j++) {

//     }
// }

const gameBoard = [
    [ '_','#','_','|','_','#','_','|','_','#','_' ],
    [ '_','#','_','|','_','#','_','|','_','#','_' ],
    [ ' ','#',' ','|',' ','#',' ','|',' ','#',' ' ]
];

let player = "x";

// console.table(gameBoard);

function displayBoard() {
    let string = "";
    for (const row of gameBoard) {
        for (const column of row) {
            string += column;
        }
        string += "\n";
    }
    console.log(string);
}

function switchPlayer() {
    if (player === "o") {
        player = "x";
    } else if (player === "x") {
        player = "o";
    }
    console.log(`player ${player}: select cell`);
}
 
function playRound(cell) {
    if (cell === "top left" && gameBoard[0][1] === "#") {
        if (player === "x") {
            gameBoard[0][1] = "x";
        } else {
            gameBoard[0][1] = "o";
        }
    }
    if (cell === "top middle" && gameBoard[0][5] === "#") {
        if (player === "x") {
            gameBoard[0][5] = "x";
        } else {
            gameBoard[0][5] = "o";
        }
    }
    if (cell === "top right" && gameBoard[0][9] === "#") {
        if (player === "x") {
            gameBoard[0][9] = "x";
        } else {
            gameBoard[0][9] = "o";
        }
    } 
    if (cell === "center left" && gameBoard[1][1] === "#") {
        if (player === "x") {
            gameBoard[1][1] = "x";
        } else {
            gameBoard[1][1] = "o";
        }
    }
    if (cell === "center middle" && gameBoard[1][5] === "#") {
        if (player === "x") {
            gameBoard[1][5] = "x";
        } else {
            gameBoard[1][5] = "o";
        }
    }
    if (cell === "center right" && gameBoard[1][9] === "#") {
        if (player === "x") {
            gameBoard[1][9] = "x";
        } else {
            gameBoard[1][9] = "o";
        }
    }
    if (cell === "bottom left" && gameBoard[2][1] === "#") {
        if (player === "x") {
            gameBoard[2][1] = "x";
        } else {
            gameBoard[2][1] = "o";
        }
    }
    if (cell === "bottom middle" && gameBoard[2][5] === "#") {
        if (player === "x") {
            gameBoard[2][5] = "x";
        } else {
            gameBoard[2][5] = "o";
        }
    }
    if (cell === "bottom right" && gameBoard[2][9] === "#") {
        if (player === "x") {
            gameBoard[2][9] = "x";
        } else {
            gameBoard[2][9] = "o";
        }
    }
    displayBoard();
    switchPlayer();
}

// function playGame() {
//     while (state) {

//     }
// }

for (const row of gameBoard) {
    for (const column of row) {
        // console.log(column);
    }
    console.log(row);
};

let string = "";

for (const row of gameBoard) {
    for (const column of row) {
        string += column;
    }
    string += "\n";
}

console.log(string);

console.log("player X: select cell");
