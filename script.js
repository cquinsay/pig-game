'use strict';

const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const diceBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const score1 = document.getElementById('current--1');
const score2 = document.getElementById('current--2');
const total1 = document.getElementById('score--1');
const total2 = document.getElementById('score--2');

let scores, currentScore, activePlayer, playing;




const newGame = function () {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 1;
	playing = true;

	score1.textContent = 0;
	score2.textContent = 0;
	total1.textContent = 0;
	total2.textContent = 0;

	dice.classList.add('hidden');
	player1.classList.add('player--active');
	player2.classList.remove('player--active');
	player1.classList.remove('player--winner');
	player2.classList.remove('player--winner');

}
newGame();


// ROLL DICE
diceBtn.addEventListener('click', function () {
	if (playing) {
		let num = Math.floor((Math.random() * 6) + 1);
		dice.setAttribute('src', `dice-${num}.png`);
		dice.classList.remove('hidden');
		if (num != 1) {
			currentScore += num;
			document.getElementById(
				`current--${activePlayer}`
			).textContent = currentScore;
		} else {
			switchPlayer();
		}
	}
});

// SWITCH PLAYER
const switchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 1 ? 2 : 1;
	player1.classList.toggle('player--active');
	player2.classList.toggle('player--active');
}

holdBtn.addEventListener('click', function () {
	if (playing) {
		scores[activePlayer - 1] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer - 1];
	}
	if (scores[activePlayer - 1] >= 100) {
		playing = false;
		dice.classList.add('hidden');

		document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
		document.querySelector(`#name--${activePlayer}`).textContent = `Player ${activePlayer} Wins!`;
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
	} else {
		switchPlayer();
	}
});

newGameBtn.addEventListener('click', newGame);
