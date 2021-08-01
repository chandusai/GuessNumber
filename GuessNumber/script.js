'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const message = message => {
  document.querySelector('.message').textContent = message;
};
const button = document.querySelector('.check');
button.addEventListener('click', () => {
  const check = Number(document.querySelector('.guess').value);
  if (!check) {
    message('No Number');
  } else if (check === secretNumber) {
    message('Correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      console.log(highscore);
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (score !== secretNumber) {
    if (score > 1) {
      message(check > secretNumber ? 'Too high' : 'Too low ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Reset button
const reset = document.querySelector('.again');
reset.addEventListener('click', () => {
  score = 20;
  message('start guessing');
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
