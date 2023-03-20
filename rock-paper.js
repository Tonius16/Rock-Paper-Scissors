/*Initialize function for random value selection
  Get input prom player
  Evaluate the two selections
  if paper is true and scissors is true, scissors win
   else if paper is true and rock is true, peper wins
    else if paper is true and paper is true, replay both choice functions
  (repeat for rock and scissors)
  Points function gives one point to winner
  First to 3 points wins game ends 
  offer replay?*/

const rockBtn = document.getElementById("btnRock");
const paperBtn = document.getElementById("btnPaper");
const scissBtn = document.getElementById("btnScissors");
const resultDiv = document.getElementById("resultDiv");
const previewPicDivLeft = document.getElementById("previewPicDivLeft");
const previewPicDivRight = document.getElementById("previewPicDivRight");
const resultInfoContainer = document.getElementById("resultInfoContainer");
const resultInfo = document.getElementById("resultInfo");
const scoreDiv = document.getElementById("scoreDiv");
const cpuScoreDefaultText = document.getElementById("cpuScore");
const playerScoreDefaultText = document.getElementById("playerScore");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let cpuChoice = choices[Math.floor(Math.random() * choices.length)];
  return cpuChoice;
}

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

function disableBtnClick() {
  rockBtn.classList.add("disableClick");
  paperBtn.classList.add("disableClick");
  scissBtn.classList.add("disableClick");
  document.querySelector(".clearButton").focus();
}

function createClearButton() {
  clearButton = document.createElement("button");
  clearButton.classList.add("clearButton");
  resultInfoContainer.insertBefore(clearButton, resultInfoContainer.firstChild);
}

function createRefreshButton() {
  clearButton = document.querySelector(".clearButton");
  clearButton.addEventListener("click", () => {
    refreshPage();
  });
}

function nextRound() {
  imgLeft.remove();
  imgRight.remove();
  resultInfoText.remove();
  rockBtn.classList.remove("disableClick");
  paperBtn.classList.remove("disableClick");
  scissBtn.classList.remove("disableClick");
  clearButton.remove();
}

function refreshPage() {
  window.location.reload();
}

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

let playerScoreNum = 0;
let cpuScoreNum = 0;

function game(playerSelection, cpuSelection) {
  result = "";

  if (playerSelection === "scissors" && cpuSelection === "rock") {
    resultWindow(
      "/imgs/scissors.jpg",
      "/imgs/Rock.jpg",
      "Rock Beats Scissors, Sorry!"
    );
    result = "you lose";
  } else if (playerSelection === "scissors" && cpuSelection === "paper") {
    resultWindow(
      "/imgs/scissors.jpg",
      "/imgs/paper.jpg",
      "Scissors Beats Paper, Nice!"
    );
    result = "you win";
  } else if (playerSelection === "scissors" && cpuSelection === "scissors") {
    resultWindow("/imgs/scissors.jpg", "/imgs/scissors.jpg", "Draw!");
    result = "draw";
  } else if (playerSelection === "rock" && cpuSelection === "paper") {
    resultWindow(
      "/imgs/Rock.jpg",
      "/imgs/paper.jpg",
      "Paper Beats Rock, Sorry!"
    );
    result = "you lose";
  } else if (playerSelection === "rock" && cpuSelection === "scissors") {
    resultWindow(
      "/imgs/Rock.jpg",
      "/imgs/scissors.jpg",
      "Rock Beats Scissors, Nice!"
    );
    result = "you win";
  } else if (playerSelection === "rock" && cpuSelection === "rock") {
    resultWindow("/imgs/Rock.jpg", "/imgs/Rock.jpg", "Draw!");
    result = "draw";
  } else if (playerSelection === "paper" && cpuSelection === "scissors") {
    resultWindow(
      "/imgs/paper.jpg",
      "/imgs/scissors.jpg",
      "Scissors Beats Paper, Sorry!"
    );
    result = "you lose";
  } else if (playerSelection === "paper" && cpuSelection === "rock") {
    resultWindow(
      "/imgs/paper.jpg",
      "/imgs/Rock.jpg",
      "Paper Beats Rock, Nice!"
    );
    result = "you win";
  } else if (playerSelection === "paper" && cpuSelection === "paper") {
    resultWindow("/imgs/paper.jpg", "/imgs/paper.jpg", "Draw!");
    result = "draw";
  } else {
    return "wrong value";
  }

  if (result === "you win") {
    playerScoreNum += 1;
    createClearButton();
    console.log(playerScoreNum, cpuScoreNum);
  } else if (result === "you lose") {
    cpuScoreNum += 1;
    createClearButton();
    console.log(playerScoreNum, cpuScoreNum);
  } else if (result === "draw") {
    createClearButton();
    console.log("draw", playerScoreNum, cpuScoreNum);
  }

  let winner = "";
  if (playerScoreNum > cpuScoreNum && playerScoreNum === 3) {
    createRefreshButton();
    winner = "You Win";
    console.log(winner);
  } else if (cpuScoreNum > playerScoreNum && cpuScoreNum === 3) {
    createRefreshButton();
    winner = "You lose";
    console.log(winner);
  }

  if (clearButton) {
    clearButton = document.querySelector(".clearButton");
    clearButton.addEventListener("click", () => {
      nextRound();
    });
  }
}
