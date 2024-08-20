const gameBoard = (function () {
    const board = [
        [ '_',1,'_','|','_',2,'_','|','_',3,'_' ],
        [ '_',4,'_','|','_',5,'_','|','_',6,'_' ],
        [ ' ',7,' ','|',' ',8,' ','|',' ',9,' ' ]
    ];

    const updateBoard = (cell) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === cell &&
                    !(board[i][j] === "X" && board[i][j] === "O")) {
                    board[i][j] = players.getPlayer();
                    return true;
                }
            }
        }
        return false;
    };

    const checkGame = () => {
        if (board[0][1] == "X" && board[0][5] == "X" && board[0][9] == "X"
            || board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X"
            || board[0][1] == "X" && board[1][5] == "X" && board[2][9] == "X"
            || board[0][9] == "X" && board[1][5] == "X" && board[2][1] == "X"
            || board[0][5] == "X" && board[1][5] == "X" && board[2][5] == "X"
            || board[1][1] == "X" && board[1][5] == "X" && board[1][9] == "X"
            || board[0][9] == "X" && board[1][9] == "X" && board[2][9] == "X"
            || board[2][1] == "X" && board[2][5] == "X" && board[2][9] == "X") {
                players.assignWinner("X");
                return false;
        }
        if (board[0][1] == "O" && board[0][5] == "O" && board[0][9] == "O"
            || board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"
            || board[0][1] == "O" && board[1][5] == "O" && board[2][9] == "O"
            || board[0][9] == "O" && board[1][5] == "O" && board[2][1] == "O"
            || board[0][5] == "O" && board[1][5] == "O" && board[2][5] == "O"
            || board[1][1] == "O" && board[1][5] == "O" && board[1][9] == "O"
            || board[0][9] == "O" && board[1][9] == "O" && board[2][9] == "O"
            || board[2][1] == "O" && board[2][5] == "O" && board[2][9] == "O") {
                players.assignWinner("O");
                return false;
        }
        return true;
    };

    const getBoard = () => {
        return board;
    };

    return {
        updateBoard,
        checkGame,
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

    const assignWinner = (player) => {
        currentPlayer = player;
    }

    const getPlayer = () => {
        return currentPlayer;
    }

    return {
        switchPlayers,
        assignWinner,
        getPlayer
    };
})();

const interface = (function () {
    let cell = 0;
    let game = true;

    const displayBoard = () => {
        // let board = [];
        const board = gameBoard.getBoard();
        // console.log(board);
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
        // console.log("pick a cell");
        console.log(`player ${players.getPlayer()}: pick a cell`);
    };

    const declareWinner = () => {
        console.log(`player ${players.getPlayer()} wins!`);
    }

    const pick = (cell) => {
        // let picked = false;
        if (game) {
            const picked = gameBoard.updateBoard(cell);
            if (picked) {
                players.switchPlayers();
            }
            displayBoard();
            game = gameBoard.checkGame();
            if (game) {
                askInput();
            } else {
                declareWinner();
            }
        }
    };

    return {
        displayBoard,
        askInput,
        pick
    };
})();

interface.displayBoard();
interface.askInput();

// const board = (function () {
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

// board.displayBoard();

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
//     if (board[0][1] == "x" && board[0][5] == "x" && board[0][9] == "x"
//         || board[0][1] == "x" && board[1][1] == "x" && board[2][1] == "x"
//         || board[0][1] == "x" && board[1][5] == "x" && board[2][9] == "x"
//         || board[0][9] == "x" && board[1][5] == "x" && board[2][1] == "x"
//         || board[0][5] == "x" && board[1][5] == "x" && board[2][5] == "x"
//         || board[1][1] == "x" && board[1][5] == "x" && board[1][9] == "x"
//         || board[0][9] == "x" && board[1][9] == "x" && board[2][9] == "x"
//         || board[2][1] == "x" && board[2][5] == "x" && board[2][9] == "x") {
//             console.log(`player x wins!`);
//             game = false;
//     }

//     if (board[0][1] == "o" && board[0][5] == "o" && board[0][9] == "o"
//         || board[0][1] == "o" && board[1][1] == "o" && board[2][1] == "o"
//         || board[0][1] == "o" && board[1][5] == "o" && board[2][9] == "o"
//         || board[0][9] == "o" && board[1][5] == "o" && board[2][1] == "o"
//         || board[0][5] == "o" && board[1][5] == "o" && board[2][5] == "o"
//         || board[1][1] == "o" && board[1][5] == "o" && board[1][9] == "o"
//         || board[0][9] == "o" && board[1][9] == "o" && board[2][9] == "o"
//         || board[2][1] == "o" && board[2][5] == "o" && board[2][9] == "o") {
//             console.log(`player o wins!`);
//             game = false;
//     }
// }

// function playRound(cell) {
//     if (cell === "top left" && board[0][1] === "#") {
//         if (player === "x") {
//             board[0][1] = "x";
//         } else {
//             board[0][1] = "o";
//         }
//     }
//     if (cell === "top middle" && board[0][5] === "#") {
//         if (player === "x") {
//             board[0][5] = "x";
//         } else {
//             board[0][5] = "o";
//         }
//     }
//     if (cell === "top right" && board[0][9] === "#") {
//         if (player === "x") {
//             board[0][9] = "x";
//         } else {
//             board[0][9] = "o";
//         }
//     }
//     if (cell === "center left" && board[1][1] === "#") {
//         if (player === "x") {
//             board[1][1] = "x";
//         } else {
//             board[1][1] = "o";
//         }
//     }
//     if (cell === "center middle" && board[1][5] === "#") {
//         if (player === "x") {
//             board[1][5] = "x";
//         } else {
//             board[1][5] = "o";
//         }
//     }
//     if (cell === "center right" && board[1][9] === "#") {
//         if (player === "x") {
//             board[1][9] = "x";
//         } else {
//             board[1][9] = "o";
//         }
//     }
//     if (cell === "bottom left" && board[2][1] === "#") {
//         if (player === "x") {
//             board[2][1] = "x";
//         } else {
//             board[2][1] = "o";
//         }
//     }
//     if (cell === "bottom middle" && board[2][5] === "#") {
//         if (player === "x") {
//             board[2][5] = "x";
//         } else {
//             board[2][5] = "o";
//         }
//     }
//     if (cell === "bottom right" && board[2][9] === "#") {
//         if (player === "x") {
//             board[2][9] = "x";
//         } else {
//             board[2][9] = "o";
//         }
//     }
//     displayBoard();
//     checkGame();
//     if (game === true) switchPlayer();
// }

// for (const row of board) {
//     for (const column of row) {
//     }
//     console.log(row);
// };

// let string = "";

// for (const row of board) {
//     for (const column of row) {
//         string += column;
//     }
//     string += "\n";
// }

// console.log(string);

// console.log("player X: select cell");
