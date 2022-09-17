'use strict';
/**
 * 1. Add event listeners to button Click!
 * 2. Create secret number
 * 3. Made 4 scenario
 * 3.1 No input guess
 * 3.2 Correct guesse
 * 3.3 Guess different secret number (high and low)
 * 4. Add event listeners to button Again!
 * 5. Made highscore
 * 6. Refactoring the code
 */

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No correct nuumber';
    displayMessage('⛔ No correct nuumber');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct nuumber';
    displayMessage('🥳 Correct nuumber');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You too young 😁');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
