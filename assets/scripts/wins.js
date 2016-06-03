'use strict';

// let gameBoard = ['', '', '', '', '', '', '', '', ''];
// let winCombos = [ , , , , , , , ];
// for (let i = 0, max = winCombos.length; i <= max; i++) {
//   if (winCombos[i] === 'X') {
//     console.log('X Won!');
//   } else if (winCombos[i] === 'O') {
//       console.log('O Won!');
//   } else {
//     console.log('Next player\'s turn');
//   }
// }

let gameArray = ['', '', '', '', '', '', '', '', ''];
let player1 = 'X';
let player2 = 'O';
// Win Conditions
const winGame = function () {
    if (gameArray[0] === player1 && gameArray[1] === player1 && gameArray[2] === player1) {
      console.log("Winner!");
    } else if (gameArray[0] === player2 && gameArray[1] === player2 && gameArray[2] === player2) {
      console.log("Winner!");
    } else if (gameArray[3] === player1 && gameArray[4] === player1 && gameArray[5] === player1) {
      console.log("Winner!");
    } else if (gameArray[3] === player2 && gameArray[4] === player2 && gameArray[5] === player2) {
      console.log("Winner!");
    } else if (gameArray[6] === player1 && gameArray[7] === player1 && gameArray[8] === player1) {
      console.log("Winner!");
    }
 };



 module.exports = {
   winGame,
 };
