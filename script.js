"use strict";

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) return "Rock";
  else if (choice == 2) return "Paper";
  else if (choice == 3) return "Scissors";
}

const computerSelection = getComputerChoice();

// function playRound(playerSelection, computerSelection) {
//   // Win
//   if (playerSelection == "Rock" && computerSelection == "Scissors") {
//     return "You win! Rock beats Scissors!";
//   } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
//     return "You win! Scissors beats Paper!";
//   } else if (playerSelection == "Paper" && computerSelection == "Rock") {
//     return "You win! Paper beats Rock!";
//     // Lose
//   } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
//     return "You lose! Rock beats Scissors!";
//   } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
//     return "You lose! Scissors beats Paper!";
//   } else if (playerSelection == "Rock" && computerSelection == "Paper") {
//     return "You lose! Paper beats Rock!";
//   } else return "It's a tie!";
// }

// console.log(playRound("Rock", computerSelection));

// Refactoring
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

console.log(playRound("Rock", computerSelection));
