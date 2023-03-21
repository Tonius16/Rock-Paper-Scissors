/*Initialize function for random value selection
  Get input prom player
  Evaluate the two selections
  if paper is true and scissors is true, scissors win
  else if paper is true and rock is true, peper wins
  else if paper is true and paper is true, replay both choice functions
  (repeat for rock and scissors)
  Points function gives one point to winner,
  initiate next round
  First to 5 points wins game ends 
  Offer replay*/

// fetch all needed elements from html

const rockBtn = document.getElementById("btnRock");
const paperBtn = document.getElementById("btnPaper");
const scissBtn = document.getElementById("btnScissors");
const resultDiv = document.getElementById("resultDiv");
const previewPicDivLeft = document.getElementById("previewPicDivLeft");
const previewPicDivRight = document.getElementById("previewPicDivRight");
const resultInfoContainer = document.getElementById("resultInfoContainer");
const resultInfo = document.getElementById("resultInfo");
const scoreDiv = document.getElementById("scoreDiv");
const playerDiv = document.getElementById("playerDiv");
const cpuDiv = document.getElementById("cpuDiv");
const cpuScoreDefaultText = document.getElementById("cpuScore");
const playerScoreDefaultText = document.getElementById("playerScore");

// variables keeping track of scores

let playerScoreNum = 0;
let cpuScoreNum = 0;

// array of choices for the cpu to run through

const choices = ["rock", "paper", "scissors"];

// function that returns a random string from the choices array

function getComputerChoice() {
  let cpuChoice = choices[Math.floor(Math.random() * choices.length)];
  return cpuChoice;
}

/* function that takes a few parameters, 
   generates images and displays the result of the round
   based on the current combination */

function resultWindow(imgLeftsrc, imgRightsrc, resultInfoTextContent) {
  imgLeft = document.createElement("img");
  imgLeft.src = imgLeftsrc;
  imgLeft.classList.add("previewPicLeft");
  previewPicDivLeft.appendChild(imgLeft);
  imgRight = document.createElement("img");
  imgRight.src = imgRightsrc;
  imgRight.classList.add("previewPicRight");
  previewPicDivRight.appendChild(imgRight);
  resultInfoText = document.createElement("a");
  resultInfoText.textContent = resultInfoTextContent;
  resultInfo.appendChild(resultInfoText);
}

/* here we disable interactions with the 3 buttons by giving them,
  a class that sets pointer events to none and we focus on the,
  next round button */

function disableBtnClick() {
  rockBtn.classList.add("disableClick");
  paperBtn.classList.add("disableClick");
  scissBtn.classList.add("disableClick");
  document.querySelector(".clearButton").focus();
}

// generates a next round button element

function createClearButton() {
  clearButton = document.createElement("button");
  clearButton.classList.add("clearButton");
  clearButton.textContent = "Next Round";
  resultInfoContainer.insertBefore(clearButton, resultInfoContainer.firstChild);
}

/* function that removes all elements from the previous round,
   and removes the disable click class */

function nextRound() {
  imgLeft.remove();
  imgRight.remove();
  resultInfoText.remove();
  rockBtn.classList.remove("disableClick");
  paperBtn.classList.remove("disableClick");
  scissBtn.classList.remove("disableClick");
  clearButton.remove();
}

// these two functions update the text of the score tracker

function updatePlayerScore(playerScoreNum) {
  playerScoreDefaultText.innerText = `Player Score: ${playerScoreNum}`;
}

function updateCpuScore() {
  cpuScoreDefaultText.innerText = `CPU Score: ${cpuScoreNum}`;
}

// generating a retry button that triggers the refresh page function on click

function createRefreshButton() {
  clearButton = document.querySelector(".clearButton");
  clearButton.textContent = "Retry?";
  clearButton.addEventListener("click", () => {
    refreshPage();
  });
}

function refreshPage() {
  window.location.reload();
}

// here we generate a text element that displays if the player lost or won

function displayWinner(text) {
  winnerText = document.createElement("a");
  winnerText.classList.add("winnerText");
  resultDiv.insertBefore(winnerText, resultDiv.firstChild);
  winnerText.textContent = text;
}

/* here we are adding event listeners to each of the 3 buttons,
  that on click return a string with the players choice,
  calls the game function (plays a round) and calls the function that
  disables clicking on the buttons after the first time */

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  game(playerSelection, getComputerChoice());
  disableBtnClick();
});

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  game(playerSelection, getComputerChoice());
  disableBtnClick();
});

scissBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  game(playerSelection, getComputerChoice());
  disableBtnClick();
});

/* main game function that takes 2 parameters and depending on the selections
  sends the appropriate image and text to the result window function as its 
  parameters also stores a string in the result variable */

function game(playerSelection, cpuSelection) {
  let result = "";

  if (playerSelection === "scissors" && cpuSelection === "rock") {
    resultWindow(
      "./imgs/scissors.jpg",
      "./imgs/Rock.jpg",
      "Rock Beats Scissors, Sorry!"
    );
    result = "you lose";
  } else if (playerSelection === "scissors" && cpuSelection === "paper") {
    resultWindow(
      "./imgs/scissors.jpg",
      "./imgs/paper.jpg",
      "Scissors Beats Paper, Nice!"
    );
    result = "you win";
  } else if (playerSelection === "scissors" && cpuSelection === "scissors") {
    resultWindow("./imgs/scissors.jpg", "./imgs/scissors.jpg", "Draw!");
    result = "draw";
  } else if (playerSelection === "rock" && cpuSelection === "paper") {
    resultWindow(
      "./imgs/Rock.jpg",
      "./imgs/paper.jpg",
      "Paper Beats Rock, Sorry!"
    );
    result = "you lose";
  } else if (playerSelection === "rock" && cpuSelection === "scissors") {
    resultWindow(
      "./imgs/Rock.jpg",
      "./imgs/scissors.jpg",
      "Rock Beats Scissors, Nice!"
    );
    result = "you win";
  } else if (playerSelection === "rock" && cpuSelection === "rock") {
    resultWindow("./imgs/Rock.jpg", "./imgs/Rock.jpg", "Draw!");
    result = "draw";
  } else if (playerSelection === "paper" && cpuSelection === "scissors") {
    resultWindow(
      "./imgs/paper.jpg",
      "./imgs/scissors.jpg",
      "Scissors Beats Paper, Sorry!"
    );
    result = "you lose";
  } else if (playerSelection === "paper" && cpuSelection === "rock") {
    resultWindow(
      "./imgs/paper.jpg",
      "./imgs/Rock.jpg",
      "Paper Beats Rock, Nice!"
    );
    result = "you win";
  } else if (playerSelection === "paper" && cpuSelection === "paper") {
    resultWindow("./imgs/paper.jpg", "./imgs/paper.jpg", "Draw!");
    result = "draw";
  } else {
    return "wrong value";
  }

  /* here we are incrementing the score based on the result variable and 
    calling 2 functions one with a parameter */

  if (result === "you win") {
    playerScoreNum += 1;
    createClearButton();
    updatePlayerScore(playerScoreNum);
  } else if (result === "you lose") {
    cpuScoreNum += 1;
    createClearButton();
    updateCpuScore();
  } else {
    createClearButton();
  }

  /* here we are checking for the winner based on the scores
     also calling 2 functions */

  let winner = "";

  if (playerScoreNum > cpuScoreNum && playerScoreNum === 5) {
    displayWinner("You Won, Congratulations!!");
    createRefreshButton();
    winner = "You Win";
  } else if (cpuScoreNum > playerScoreNum && cpuScoreNum === 5) {
    displayWinner("Sorry, You Lost!!");
    createRefreshButton();
    winner = "You lose";
  }

  // selecting the next round button element and on click calling the next round function

  if (clearButton) {
    clearButton = document.querySelector(".clearButton");
    clearButton.addEventListener("click", () => {
      nextRound();
    });
  }
}
