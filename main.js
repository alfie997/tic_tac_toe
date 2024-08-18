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
        [ '_',1,'_','|','_',2,'_','|','_',3,'_' ],
        [ '_',4,'_','|','_',5,'_','|','_',6,'_' ],
        [ ' ',7,' ','|',' ',8,' ','|',' ',9,' ' ]
    ];

    const updateBoard = (cell) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === cell) {
                    board[i][j] = players.getPlayer();
                }
            }
        }
    };

    const getBoard = () => {
        return board;
    };

    return {
        updateBoard,
        getBoard
    };
})();

const players = (function () {
    const playerX = "X";
    const playerO = "O";

    let currentPlayer = playerX;

    const switchPlayers = () => {
        if (currentPlayer === playerX) {
            currentPlayer = playerO;
        } else {
            currentPlayer = playerX;
        }
    };

    const getPlayer = () => {
        return currentPlayer;
    }

    return {
        switchPlayers,
        getPlayer
    };
})();

// function createPlayer() {
//     const playerX = "X";
//     const playerO = "O";

//     let currentPlayer = "X";
//     // let reputation = 0;

//     const switchPlayers = () => {
//         currentPlayer = "O";
//         // reputation++;
//     };

//     const getPlayer = () => {
//         return currentPlayer;
//     }

//     return {
//         switchPlayers,
//         getPlayer
//     };
// }

// const player = createPlayer();

// const interface = (function () {
//     let cell = 0;

//     const displayBoard = () => {
//         let board = [];
//         board = gameBoard.getBoard;
//         let string = "";
//         for (const row of board) {
//             for (const column of row) {
//                 string += column;
//             }
//             string += "\n";
//         }
//         console.log(string);
//     };

//     const askInput = () => {
//         console.log("pick a cell");
//     };

//     const pick = (cell) => {
//         gameBoard.updateBoard(cell);
//         players.switchPlayers();
//         displayBoard();
//     };

//     return {
//         displayBoard,
//         askInput,
//         pick
//     };
// })();

// interface.displayBoard();
// interface.askInput();

// function Cell() {
//     let cell = 0;

//     const getCell = () => {

//     };

//     return {
//         getCell
//     };
// }

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
