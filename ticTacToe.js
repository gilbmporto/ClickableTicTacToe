// State Variables

// HTML elements
let squareOne = document.getElementById("js-cell-1")
let squareTwo = document.getElementById("js-cell-2")
let squareThree = document.getElementById("js-cell-3")
let squareFour = document.getElementById("js-cell-4")
let squareFive = document.getElementById("js-cell-5")
let squareSix = document.getElementById("js-cell-6")
let squareSeven = document.getElementById("js-cell-7")
let squareEight = document.getElementById("js-cell-8")
let squareNine = document.getElementById("js-cell-9")
const $startBtn = document.getElementById("start-btn")
const $resultSection = document.getElementById("result")
const $gameState = document.getElementById("game-state")
const $board = document.querySelector("#tictactoe-board")

// State variables space
let gameBoard = new Array(9).fill("-")
let players = ["O", "X"]
let nextPlayerIndex = 1
let currentPlayerSymbol
let hasGameStarted = false

function hasLastMoverWon(lastMove, gameBoard) {
	let winnerCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let [i1, i2, i3] of winnerCombos) {
		if (
			gameBoard[i1] === lastMove &&
			gameBoard[i1] === gameBoard[i2] &&
			gameBoard[i1] === gameBoard[i3] &&
			gameBoard[i1] !== "#"
		) {
			return true
		}
	}
	return false
}

function isGameOver(gameBoard, currentPlayerSymbol) {
	// 1. check if there is a winner
	let playerOne = "X"
	let playerTwo = "O"
	let lastMove = null

	if (currentPlayerSymbol === playerOne) {
		lastMove = playerOne
	} else {
		lastMove = playerTwo
	}

	if (hasLastMoverWon(lastMove, gameBoard)) {
		// Write a message that last mover has won the game
		$resultSection.innerHTML = `Congratulations, ${currentPlayerSymbol} has won the game!`
		return true

		// 2. check if the board is full
	} else if (gameBoard.find((position) => position === "-") === undefined) {
		$resultSection.innerHTML = `The game was a draw!`
		return true

		// Return: winner/draw OR game is still in progress
	} else {
		return false
	}
}

/*

  * Clickable Version Of Tic Tac Toe 

*/

function removeAllEventListeners() {
	squareOne.removeEventListener("click", handlePlayerClick)
	squareTwo.removeEventListener("click", handlePlayerClick)
	squareThree.removeEventListener("click", handlePlayerClick)
	squareFour.removeEventListener("click", handlePlayerClick)
	squareFive.removeEventListener("click", handlePlayerClick)
	squareSix.removeEventListener("click", handlePlayerClick)
	squareSeven.removeEventListener("click", handlePlayerClick)
	squareEight.removeEventListener("click", handlePlayerClick)
	squareNine.removeEventListener("click", handlePlayerClick)
}

function checkGameSituation(gameBoard, currentPlayerSymbol) {
	if (isGameOver(gameBoard, currentPlayerSymbol)) {
		$startBtn.removeEventListener("click", handleStartGame)
		$startBtn.innerHTML = "Refresh the page to play again"
		removeAllEventListeners()
		hasGameStarted = false
		$resultSection.style.display = "block"
		return true
	} else {
		return false
	}
}

function handlePlayerClick(e) {
	switch (e.target.id) {
		case "js-cell-1":
			gameBoard[0] = currentPlayerSymbol
			e.target.innerHTML = currentPlayerSymbol

			if (checkGameSituation(gameBoard, currentPlayerSymbol)) {
				break
			}

			nextPlayerIndex = (nextPlayerIndex + 1) % 2
			currentPlayerSymbol = players[nextPlayerIndex]
			$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
			break

		case "js-cell-2":
			gameBoard[1] = currentPlayerSymbol
			e.target.innerHTML = currentPlayerSymbol

			if (checkGameSituation(gameBoard, currentPlayerSymbol)) {
				break
			}

			nextPlayerIndex = (nextPlayerIndex + 1) % 2
			currentPlayerSymbol = players[nextPlayerIndex]
			$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
			break

		case "js-cell-3":
			gameBoard[2] = currentPlayerSymbol
			e.target.innerHTML = currentPlayerSymbol

			if (checkGameSituation(gameBoard, currentPlayerSymbol)) {
				break
			}

			nextPlayerIndex = (nextPlayerIndex + 1) % 2
			currentPlayerSymbol = players[nextPlayerIndex]
			$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
			break

		case "js-cell-4":
			gameBoard[3] = currentPlayerSymbol
			e.target.innerHTML = currentPlayerSymbol

			if (checkGameSituation(gameBoard, currentPlayerSymbol)) {
				break
			}

			nextPlayerIndex = (nextPlayerIndex + 1) % 2
			currentPlayerSymbol = players[nextPlayerIndex]
			$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
			break

		case "js-cell-5":
			gameBoard[4] = currentPlayerSymbol
			e.target.innerHTML = currentPlayerSymbol

			if (checkGameSituation(gameBoard, currentPlayerSymbol)) {
				break
			}

			nextPlayerIndex = (nextPlayerIndex + 1) % 2
			currentPlayerSymbol = players[nextPlayerIndex]
			$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
			break

		case "js-cell-6":
			gameBoard[5] = currentPlayerSymbol
			e.target.innerHTML = currentPlayerSymbol

			if (checkGameSituation(gameBoard, currentPlayerSymbol)) {
				break
			}

			nextPlayerIndex = (nextPlayerIndex + 1) % 2
			currentPlayerSymbol = players[nextPlayerIndex]
			$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
			break

		case "js-cell-7":
			gameBoard[6] = currentPlayerSymbol
			e.target.innerHTML = currentPlayerSymbol

			if (checkGameSituation(gameBoard, currentPlayerSymbol)) {
				break
			}

			nextPlayerIndex = (nextPlayerIndex + 1) % 2
			currentPlayerSymbol = players[nextPlayerIndex]
			$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
			break

		case "js-cell-8":
			gameBoard[7] = currentPlayerSymbol
			e.target.innerHTML = currentPlayerSymbol

			if (checkGameSituation(gameBoard, currentPlayerSymbol)) {
				break
			}

			nextPlayerIndex = (nextPlayerIndex + 1) % 2
			currentPlayerSymbol = players[nextPlayerIndex]
			$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
			break

		case "js-cell-9":
			gameBoard[8] = currentPlayerSymbol
			e.target.innerHTML = currentPlayerSymbol

			if (checkGameSituation(gameBoard, currentPlayerSymbol)) {
				break
			}

			nextPlayerIndex = (nextPlayerIndex + 1) % 2
			currentPlayerSymbol = players[nextPlayerIndex]
			$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
			break
	}
}

function handleStartGame() {
	if (!hasGameStarted) {
		hasGameStarted = true

		squareOne.addEventListener("click", handlePlayerClick)
		squareTwo.addEventListener("click", handlePlayerClick)
		squareThree.addEventListener("click", handlePlayerClick)
		squareFour.addEventListener("click", handlePlayerClick)
		squareFive.addEventListener("click", handlePlayerClick)
		squareSix.addEventListener("click", handlePlayerClick)
		squareSeven.addEventListener("click", handlePlayerClick)
		squareEight.addEventListener("click", handlePlayerClick)
		squareNine.addEventListener("click", handlePlayerClick)

		currentPlayerSymbol = players[nextPlayerIndex]
		$gameState.innerText = `Next player: ${players[nextPlayerIndex]}!`
		$board.removeEventListener("click", boardWarning)
	} else {
		alert("Game has already started!")
	}
}

function boardWarning() {
	alert("Press the 'START' button to play the game!")
}

$startBtn.addEventListener("click", handleStartGame)
$board.addEventListener("click", boardWarning)

// ticTacToe()
