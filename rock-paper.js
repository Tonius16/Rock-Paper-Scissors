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

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let cpuChoice = choices[Math.floor(Math.random() * choices.length)];
  return cpuChoice;
}

function playRound(playerSelection, cpuSelection) {
  if (playerSelection === "scissors" && cpuSelection === "rock") {
    return "you lose";
  } else if (playerSelection === "scissors" && cpuSelection === "paper") {
    return "you win";
  } else if (playerSelection === "scissors" && cpuSelection === "scissors") {
    return "draw";
  } else if (playerSelection === "rock" && cpuSelection === "paper") {
    return "you lose";
  } else if (playerSelection === "rock" && cpuSelection === "scissors") {
    return "you win";
  } else if (playerSelection === "rock" && cpuSelection === "rock") {
    return "draw";
  } else if (playerSelection === "paper" && cpuSelection === "scissors") {
    return "you lose";
  } else if (playerSelection === "paper" && cpuSelection === "rock") {
    return "you win";
  } else if (playerSelection === "paper" && cpuSelection === "paper") {
    return "draw";
  } else {
    return "wrong value";
  }
}

function game() {
  let playerScore = 0;
  let cpuScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("rock paper scissors go").toLowerCase();
    let cpuSelection = getComputerChoice();
    let result = playRound(playerSelection, cpuSelection);

    if (result === "you lose") {
      cpuScore += 1;
      console.log(playerScore, cpuScore);
    } else if (result === "you win") {
      playerScore += 1;
      console.log(playerScore, cpuScore);
    } else if (result === "draw") {
      i -= 1;
      console.log("draw", playerScore, cpuScore);
    } else if (result === "wrong value") {
      i -= 1;
      console.log("wrong value");
    }
  }
  let winner;
  if (playerScore < cpuScore) {
    winner = "cpu";
  } else if (playerScore > cpuScore) {
    winner = "player";
  }
  return winner;
}

console.log(game());
