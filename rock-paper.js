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


const playerSelection = "Scissors"
const cpuSelection = getComputerChoice()


function playRound(playerSelection, cpuSelection) {
    if (playerSelection === "Scissors" && cpuSelection === "Rock" ) {
        return "you loose"
     }
     else if (playerSelection === "Scissors" && cpuSelection === "Paper" ) {
         return "you win"
      }
      else if (playerSelection === "Scissors" && cpuSelection === "Scissors" ) {
         return "draw"
      }
    }
    
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, cpuSelection)
    }   
    }

let playerScore =     
