const choices = ['rock', 'paper', 'scissors'];
const winningChoices = {
  'rock': 'scissors', 
  'paper': 'rock', 
  'scissors': 'paper',
};

function validatePlayerChoice(playerChoice) {
  if (choices.includes(playerChoice)) {
    return playerChoice;
  } else {
    alert('Invalid input. Please try again!');
    
    getPlayerChoice();
  }
}

function getPlayerChoice() {
  let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();

  return validatePlayerChoice(playerChoice);
}

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  return computerChoice;
}

function checkWinner(p, c) {
  if (p === c) {
    alert('It\'s a draw!');
  } else if (winningChoices.hasOwnProperty(p) && winningChoices[p] === c) {
    alert('The player wins!');
  } else {
    alert('The computer wins!');
  }
}

function rockPaperScissors() {
  p = getPlayerChoice();
  c = getComputerChoice();

  checkWinner(p, c);
}

rockPaperScissors();