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
    console.log('It\'s a draw!');
  } else if (winningChoices.hasOwnProperty(p) && winningChoices[p] === c) {
    console.log('The player wins!');
  } else {
    console.log('The computer wins!');
  }
}

function rockPaperScissors() {
  p = getPlayerChoice();
  c = getComputerChoice();

  console.log(`Player choice = ${p}`)
  console.log(`Computer choice = ${c}`)
  checkWinner(p, c);
}

rockPaperScissors();