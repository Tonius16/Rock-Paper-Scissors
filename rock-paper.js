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

const choices = ["Rock", "Paper", "Scissors"];

  function getComputerChoice() {
    let cpuChoice = choices [Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}

function playRound(playerSelection, cpuSelection) {
    if (playerSelection === "Scissors" && cpuSelection === "Rock" ) {
        return "you loose";
     }
     else if (playerSelection === "Scissors" && cpuSelection === "Paper" ) {
         return "you win";
      }
      else if (playerSelection === "Scissors" && cpuSelection === "Scissors" ) {
         return "draw";
      }
      else if (playerSelection === "Rock" && cpuSelection === "Paper" ) {
        return "you loose";
      }
      else if (playerSelection === "Rock" && cpuSelection === "Scissors" ) {
        return "you win";
      }
      else if (playerSelection === "Rock" && cpuSelection === "Rock" ) {
        return "draw";
      }
      else if (playerSelection === "Paper" && cpuSelection === "Scissors" ) {
        return "you loose";
      }
      else if (playerSelection === "Paper" && cpuSelection === "Rock" ) {
        return "you win";
      }
      else if (playerSelection === "Paper" && cpuSelection === "Paper" ) {
        return "draw";
      }
      else if (playerSelection === "Paper" && cpuSelection === "Paper" ) {
        return "draw";
      }
      else if (playerSelection != "") {
        return "wrong value"
      }
    }
    
function game() {

    let playerScore = 0;
    let cpuScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper Scissors go")
        let cpuSelection = getComputerChoice();
        let result = playRound(playerSelection, cpuSelection);
        
        if (result === "you loose") {
           cpuScore += 1;
           console.log(playerScore, cpuScore)
        }  
         else if (result === "you win") {
           playerScore += 1;
           console.log(playerScore, cpuScore)
        }
         else if (result === "draw") {
           i -= 1;
           console.log("draw", playerScore, cpuScore)
        }
        else if (result === "wrong value") {
           i -= 1
           console.log("wrong value")
        }

    }
    let winner;
    if (playerScore < cpuScore) {
      winner = "cpu";
    }
     else if (playerScore > cpuScore) {
      winner = "player";
     }
     return winner;
    }

  console.log(game())

    



 


