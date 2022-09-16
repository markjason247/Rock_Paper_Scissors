
let computerScore = 0;
let playerScore = 0;

//function to get a random choice from rock, paper or scissors
function getComputerChoice() {
  const arrofplayerChoices = ['rock','paper','scissors'];
  const randomNum = [Math.floor(Math.random()*arrofplayerChoices.length)];
  return arrofplayerChoices[randomNum]
}

//function to play single round between player and computer with a return message
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You tied! You both picked ${playerSelection}`
 } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore+= 1;
    return `You win! ${playerSelection} beats ${computerSelection}`; 
 } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore+= 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
 } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore+= 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
 } else {
    computerScore+= 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
 }
}

//for loop to play 5 rounds 
function game() {
   for (let i = 0; i < 5; i++) {
   const playerSelection = prompt('Rock, paper or Scissors?').toLowerCase();  
   const computerSelection = getComputerChoice()
   console.log((playRound(playerSelection, computerSelection)))
   }

   if (playerScore > computerScore) {
      return 'You beat the computer barely' 
   }
   else if (computerScore > playerScore) {
      return 'You lost to the computer. Try again.'
   }
   else {
      return 'You tied with the computer! Not too shabby'
   }
}

console.log(game())
console.log(playerScore);
console.log(computerScore);