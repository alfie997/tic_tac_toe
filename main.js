const gameBoard = (function () {
    let board = [
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

    const cleanBoard = () => {
        board = [
            [ '_',1,'_','|','_',2,'_','|','_',3,'_' ],
            [ '_',4,'_','|','_',5,'_','|','_',6,'_' ],
            [ ' ',7,' ','|',' ',8,' ','|',' ',9,' ' ]
        ];
    };

    const getBoard = () => {
        return board;
    };

    return {
        updateBoard,
        checkGame,
        cleanBoard,
        getBoard
    };
})();

const players = (function () {
    const playerX = "X";
    const playerO = "O";

    let currentPlayer = playerX;

    const switchPlayer = () => {
        if (currentPlayer === playerX) {
            currentPlayer = playerO;
        } else {
            currentPlayer = playerX;
        }
    };

    const assignWinner = (player) => {
        currentPlayer = player;
    };

    const getPlayer = () => {
        return currentPlayer;
    };

    const resetPlayer = () => {
        currentPlayer = playerX;
    };

    return {
        switchPlayer,
        assignWinner,
        resetPlayer,
        getPlayer
    };
})();

const interface = (function () {
    let cell = 0;
    let game = true;
    let round = 1;

    const displayBoard = () => {
        const board = gameBoard.getBoard();
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
        // console.log(round);
        console.log(`player ${players.getPlayer()}: pick a cell`);
    };

    const declareResult = () => {
        if (round < 9) {
            console.log(`player ${players.getPlayer()} wins!`);
            console.log("play again?");
        } else {
            console.log("it's a tie");
            console.log("play again?");
        }
    };

    const retry = () => {
        game = true;
        round = 1;
        gameBoard.cleanBoard();
        players.resetPlayer();
        displayBoard();
        askInput();
    };

    const pick = (cell) => {
        if (game) {
            const picked = gameBoard.updateBoard(cell);
            if (picked) {
                players.switchPlayer();
                round++;
            }
            game = gameBoard.checkGame();
            if (round > 9) {
                game = false;
            }
            displayBoard();
            if (game) {
                askInput();
            } else {
                declareResult();
            }
        }
    };

    return {
        displayBoard,
        askInput,
        pick,
        retry
    };
})();

interface.displayBoard();
interface.askInput();
