document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        return null;
    };

    const checkDraw = () => {
        return !gameBoard.includes('');
    };

    const displayPopup = (message) => {
        popupMessage.textContent = message;
        popup.style.display = 'block';
    };

    const closePopup = () => {
        popup.style.display = 'none';
    };

    const handleClick = (index) => {
        if (gameBoard[index] || !gameActive) {
            return;
        }

        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;

        const winner = checkWinner();
        if (winner) {
            displayPopup(`Player ${winner} wins!`);
            gameActive = false;
        } else if (checkDraw()) {
            displayPopup('It\'s a draw!');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    };

    const handleCellClick = (event) => {
        const index = event.target.dataset.index;
        handleClick(index);
    };

    const resetGame = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => {
            cell.textContent = '';
        });
        result.textContent = '';
        currentPlayer = 'X';
        gameActive = true;
        closePopup();
    };

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    resetBtn.addEventListener('click', resetGame);
});


document.addEventListener('DOMContentLoaded', () => {
    // ... (previous code)

    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupClose = document.getElementById('popup-close');

    // ... (previous code)

    const displayPopup = (message) => {
        popupMessage.textContent = message;
        popup.style.display = 'flex';
    };

    const closePopup = () => {
        popup.style.display = 'none';
    };

    // ... (previous code)

    popupClose.addEventListener('click', closePopup);
});

const displayPopup = (message) => {
    popupMessage.textContent = message;
    popup.style.display = 'flex';
    document.body.classList.add('game-over');
};

const closePopup = () => {
    popup.style.display = 'none';
    document.body.classList.remove('game-over');
};




document.addEventListener('DOMContentLoaded', () => {
    // ... (previous code)

    const turnDisplay = document.getElementById('turnDisplay');

    // ... (previous code)

    const updateTurnDisplay = () => {
        turnDisplay.textContent = `Current Turn: ${currentPlayer}`;
    };

    const handleClick = (index) => {
        if (gameBoard[index] || !gameActive) {
            return;
        }

        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;

        const winner = checkWinner();
        if (winner) {
            displayPopup(`Player ${winner} wins!`);
            gameActive = false;
        } else if (checkDraw()) {
            displayPopup('It\'s a draw!');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateTurnDisplay(); // Update the turn display after each move
        }
    };

    // ... (previous code)

    updateTurnDisplay(); // Initial update for turn display
});





document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupClose = document.getElementById('popup-close');
    const turnDisplay = document.getElementById('turnDisplay'); // Add this line
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // ... (rest of your code)

    const updateTurnDisplay = () => {
        turnDisplay.textContent = `Current Turn: ${currentPlayer}`;
    };

    // ... (rest of your code)

    updateTurnDisplay(); // Initial update for turn display
});



const updateTurnDisplay = () => {
    turnDisplay.textContent = `Current Turn: ${currentPlayer}`;
};




document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupClose = document.getElementById('popup-close');
    const turnDisplay = document.getElementById('turnDisplay');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        return null;
    };

    const checkDraw = () => {
        return !gameBoard.includes('');
    };

    const displayPopup = (message) => {
        popupMessage.textContent = message;
        popup.style.display = 'flex';
    };

    const resetGame = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => {
            cell.textContent = '';
        });
        result.textContent = '';
        currentPlayer = 'X';
        gameActive = true;
        popup.style.display = 'none'; // Hide the popup
        updateTurnDisplay(); // Update the turn display after the reset
    };

    const updateTurnDisplay = () => {
        turnDisplay.textContent = `Current Turn: ${currentPlayer}`;
    };

    const handleCellClick = (event) => {
        const index = event.target.dataset.index;
        if (!gameBoard[index] && gameActive) {
            gameBoard[index] = currentPlayer;
            cells[index].textContent = currentPlayer;

            const winner = checkWinner();
            if (winner) {
                displayPopup(`Player ${winner} wins!`);
                gameActive = false;
            } else if (checkDraw()) {
                displayPopup('It\'s a draw!');
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateTurnDisplay();
            }
        }
    };

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    resetBtn.addEventListener('click', resetGame);
    popupClose.addEventListener('click', resetGame); // Reset the game when OK is clicked in the popup

    updateTurnDisplay(); // Initial update for turn display
});
