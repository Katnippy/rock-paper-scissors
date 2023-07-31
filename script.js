const choices = ['rock', 'paper', 'scissors'];
const winningChoices = {
  'rock': 'scissors', 
  'paper': 'rock', 
  'scissors': 'paper',
};

let drawScore = document.getElementById('draw-score');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  return computerChoice;
}

function updateDrawScore() {
  let dS = Number(drawScore.textContent);
  dS++;
  drawScore.textContent = dS;
}

function updatePlayerScore() {
  let pS = Number(playerScore.textContent);
  pS++;
  playerScore.textContent = pS;
}

function updateComputerScore() {
  let cS = Number(computerScore.textContent);
  cS++;
  computerScore.textContent = cS;
}

function checkWinner(p, c) {
  if (p === c) {
    alert('It\'s a draw!');
    updateDrawScore();
  } else if (winningChoices.hasOwnProperty(p) && winningChoices[p] === c) {
    alert('The player wins!');
    updatePlayerScore();
  } else {
    alert('The computer wins!');
    updateComputerScore();
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

