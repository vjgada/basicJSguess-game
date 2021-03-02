'use strict';
/*
console.log(document.querySelector('.message').textContent);
//Document Object Model
document.querySelector('.message').textContent = 'Correct Number!!!'; // DOM manipulation started - Changing text of the element in webpage
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//Event listener - something happening on the page , reacting to them
// Event Handler - Typing value in website and then logs it after confirming the check ! button

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No Number !!!');
    //document.querySelector('.message').textContent = 'No Number!'; // When no input
  } else if (guess === secretNumber) {
    displayMessage('Correct Number !!'); // when player wins
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!!!' : 'Too Low'; // high
      // score--;
      displayMessage(guess > secretNumber ? 'Too High!!!' : 'Too Low');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '!!!!! You Lost !!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
