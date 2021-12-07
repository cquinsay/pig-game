'use strict';

const diceBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const points1 = document.getElementById('current--1');
const points2 = document.getElementById('current--2');
const score1 = document.getElementById('score--1');
const score2 = document.getElementById('score--2');

const newGame = function () {
    points1.innerHTML = 0;
    points2.innerHTML = 0;
    score1.innerHTML = 0;
    score2.innerHTML = 0;
}

const rollDice = function () {
    let num = Math.floor((Math.random() * 6) + 1);
    dice.setAttribute('src', `dice-${num}.png`);

}


diceBtn.addEventListener('click', rollDice);
