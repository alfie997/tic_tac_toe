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

    const resetPlayer = () => {
        currentPlayer = playerX;
    };

    const getPlayer = () => {
        return currentPlayer;
    };

    return {
        switchPlayer,
        assignWinner,
        resetPlayer,
        getPlayer
    };
})();

const controller = (function () {
    // let cell = 0;
    let game = true;
    let round = 1;

    const displayBoard = () => {
        const board = gameBoard.getBoard();
        let string = "";
        for (const row of board) {
            for (const cell of row) {
                string += cell;
            }
            string += "\n";
        }
        console.log(string);
    };

    const askInput = () => {
        console.log(round);
        console.log(`player ${players.getPlayer()}: pick a cell`);
    };

    const declareResult = () => {
        if (round < 10) {
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

    const getState = () => {
        if (game === false && round < 10) {
            return "win";
        } else if (game === false) {
            return "tie";
        }
        if (players.getPlayer() === "X") {
            return "X";
        } else {
            return "O";
        }
    };

    const getGame = () => {
        return game;
    }

    return {
        displayBoard,
        askInput,
        pick,
        retry,
        getState,
        getGame
    };
})();

function controlGUI() {
    const cells = document.querySelectorAll(".container div");
    const retry = document.querySelector(".retry");
    const state = document.querySelector(".state");
    const submit = document.querySelector(".submit");
    // console.log(cells);

    document.getElementById("playerOne").value = "";
    document.getElementById("playerTwo").value = "";

    let playerOne = "";
    let playerTwo = "";

    const displayState = () => {
        // state.textContent = ""
        if (playerOne === "" && playerTwo === "") {
            if (controller.getState() === "X") {
                state.textContent = "player X to play";
            } else if (controller.getState() === "O") {
                state.textContent = "player O to play";
            }
            if (controller.getState() === "win") {
                state.textContent = `player ${players.getPlayer()} wins`;
            } else if (controller.getState() === "tie") {
                state.textContent = "it's a tie";
            }
        } else {
            if (controller.getState() === "X") {
                state.textContent = `${playerOne} to play`;
            } else if (controller.getState() === "O") {
                state.textContent = `${playerTwo} to play`;                
            }
            if (controller.getState() === "win") {
                if (players.getPlayer() === "X") {
                    state.textContent = `${playerOne} wins`;
                } else if (players.getPlayer() === "O") {
                    state.textContent = `${playerTwo} wins`;
                }
            } else if (controller.getState() === "tie") {
                state.textContent = "it's a tie";
            }
        }
    };

    displayState();

    const handleInput = () => {
        // cells[1].textContent = "X";
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", (e) => {
                if (controller.getGame() === true &&
                    !(cells[i].textContent === "X" || cells[i].textContent === "O")) {
                    if (players.getPlayer() === "X") {
                        controller.pick(i+1);
                        cells[i].textContent = "X";
                    } else {
                        controller.pick(i+1);
                        cells[i].textContent = "O";
                    }
                }
                displayState();
            });
        }

        retry.addEventListener("click", (e) => {
            controller.retry();
            for (let i = 0; i < cells.length; i++) {
                cells[i].textContent = "";
            }
            displayState();
        });

        submit.addEventListener("click", (e) => {
            playerOne = document.getElementById("playerOne").value;
            playerTwo = document.getElementById("playerTwo").value;
            console.log(playerOne);
            console.log(playerTwo);
            displayState();
        });
    };

    handleInput();
}

controller.displayBoard();
controller.askInput();

controlGUI();
