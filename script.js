'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function wrongGuess() {
  const wrong = new Audio(
    'Sound Effect/[MP3DOWNLOAD.TO] Buzzer Wrong Answer - Gaming Sound Effect (HD)-320k.mp3'
  );
  wrong.play();
}

function correctGuess() {
  const correct = new Audio(
    '/Sound Effect/[MP3DOWNLOAD.TO] Correct answer Sound effect-320k.mp3'
  );
  correct.play();
}

window.addEventListener('DOMContentLoaded', function () {
  const audio = document.querySelector('audio');
  audio.volume = 5;
  audio.play();
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    wrongGuess();
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    correctGuess();
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
      document.body.style.backgroundColor = '#222';
      wrongGuess();
    } else {
      document.querySelector('.message').textContent = '💥 You Lose The Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
      document.body.style.backgroundColor = '#222';
      wrongGuess();
    } else {
      document.querySelector('.message').textContent = '💥 You Lose The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').textContent = ' ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
