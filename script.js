'use strict';

const diceBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

const rollDice = function () {
    let num = Math.floor((Math.random() * 6) + 1);
    dice.setAttribute('src', `dice-${num}.png`);

}


diceBtn.addEventListener('click', rollDice);
