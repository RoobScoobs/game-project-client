'use strict';

// let gameBoard = ['', '', '', '', '', '', '', '', ''];

// Win Conditions
const winGame = function () {
  let winCombos = [$('.row.1'), $('.row.2'), $('.row.3'), $('.col-1'), $('.col-2'), $('.col-3'), $('.diag-1'), $('.diag-2')];
  for (let i = 0, max = winCombos.length; i <= max; i++) {
    if (winCombos[i].text() === 'X') {
      debugger;
      console.log('X Won!');
    }
  }
 };

 module.exports = {
   winGame,
 };
