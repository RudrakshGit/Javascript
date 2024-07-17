var player1Score = 0;
var player2Score = 0;

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  var randomDiceImage = 'dice' + randomNumber1 + '.png'; // dice1.png - dice6.png
  var randomImageSource = 'images/' + randomDiceImage; // images/dice1.png - dice6.png

  var image1 = document.querySelectorAll('img')[0];
  image1.setAttribute('src', randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';
  document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

  // Update scores and header based on the result
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML =
      '<span class="flag flag-left">🚩</span> Player 1 Wins!';
    player1Score++;
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML =
      'Player 2 Wins! <span class="flag flag-right">🚩</span>';
    player2Score++;
  } else {
    document.querySelector('h1').innerHTML = 'Draw!';
  }

  // Update scoreboard
  document.getElementById('player1Score').textContent = player1Score;
  document.getElementById('player2Score').textContent = player2Score;
}

// Add event listener for the initial start button to show game content
document
  .getElementById('initialStartButton')
  .addEventListener('click', function () {
    document.getElementById('initialStartButton').style.display = 'none';
    document.getElementById('gameContent').style.display = 'block';
  });

// Add event listener for the start button to start the game and roll the dice
document.getElementById('startButton').addEventListener('click', function () {
  rollDice();
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('restartButton').style.display = 'inline-block';
});

// Add event listener for restart button to roll the dice again
document.getElementById('restartButton').addEventListener('click', rollDice);
