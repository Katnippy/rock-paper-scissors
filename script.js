const choices = ['rock', 'paper', 'scissors'];
const winningChoices = {
  'rock': 'scissors', 
  'paper': 'rock', 
  'scissors': 'paper',
};

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

function rockPaperScissors(playerChoice) {
  p = playerChoice;
  c = getComputerChoice();

  checkWinner(p, c);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    rockPaperScissors(button.id);
  });
});

