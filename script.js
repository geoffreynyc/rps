"use strict";

const playerText = document.querySelector("#player-text");
const computerText = document.querySelector("#computer-text");
const resultText = document.querySelector("#result-text");
const btnChoice = document.querySelectorAll(".btnChoice");
const playerScoreText = document.querySelector("#player-score-text");
const computerScoreText = document.querySelector("#computer-score-text");
let playerScore = 0;
let computerScore = 0;
let player;
let computer;
let result;

btnChoice.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${checkWinner()}`;
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
  })
);

function computerTurn() {
  const randInt = Math.floor(Math.random() * 3) + 1;

  switch (randInt) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreText.textContent = `Player Score: ${playerScore}`;
  computerScoreText.textContent = `Computer Score: ${computerScore}`;
  playerText.textContent = "Player: ";
  computerText.textContent = "Computer: ";
  resultText.textContent = "Result: ";
}
function checkWinner() {
  if (player == computer) {
    return "It's a tie!";
  } else if (computer == "Rock") {
    if (player == "Paper") {
      playerScore++;
      if (playerScore == 5) {
        resetGame();
        return "You Win! Game Over! New Game Started!";
      } else {
        return "You Win! Paper beats Rock!";
      }
    } else {
      computerScore++;
      if (computerScore == 5) {
        resetGame();
        return "You Lose! Game Over! New Game Started!";
      } else {
        return "You Lose!";
      }
    }
  } else if (computer == "Paper") {
    if (player == "Scissors") {
      playerScore++;
      if (playerScore == 5) {
        resetGame();
        return "You Win! Game Over! New Game Started!";
      } else {
        return "You Win! Scissors beats Paper!";
      }
    } else {
      computerScore++;
      if (computerScore == 5) {
        resetGame();
        return "You Lose! Game Over! New Game Started!";
      } else {
        return "You Lose!";
      }
    }
  } else if (computer == "Scissors") {
    if (player == "Rock") {
      playerScore++;
      if (playerScore == 5) {
        resetGame();
        return "You Win! Game Over! New Game Started!";
      } else {
        return "You Win! Rock beats Scissors!";
      }
    } else {
      computerScore++;
      if (computerScore == 5) {
        resetGame();
        return "You Lose! Game Over! New Game Started!";
      } else {
        return "You Lose!";
      }
    }
  }
}
