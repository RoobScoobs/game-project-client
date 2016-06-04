'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

let turnCount = 0;
let move = '';
let player1 = 'X';
let player2 = 'O';
let gameArray = ['', '', '', '', '', '', '', '', ''];

// const reset = function () {
//   for (let i = 0, max = gameArray.length; i <= max; i++) {
//     if (gameArray !== ) {
//
//     }
//   }
// };

const endGame = function () {

};

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onNewGame = function (event) {
  event.preventDefault();
  api.createGame()
  .done(ui.newGameSuccess)
  .fail(ui.failure);
  // reset();
};

const onGetGames = function (event) {
  event.preventDefault();
  api.getGames()
  .done(ui.success)
  .fail(ui.failure);
};

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
    } else if (gameArray[6] === player2 && gameArray[7] === player2 && gameArray[8] === player2) {
      console.log("Winner!");
    } else if (gameArray[0] === player1 && gameArray[3] === player1 && gameArray[6] === player1) {
      console.log("Winner!");
    } else if (gameArray[0] === player2 && gameArray[3] === player2 && gameArray[6] === player2) {
      console.log("Winner!");
    } else if (gameArray[1] === player1 && gameArray[4] === player1 && gameArray[7] === player1) {
      console.log("Winner!");
    } else if (gameArray[1] === player2 && gameArray[4] === player2 && gameArray[7] === player2) {
      console.log("Winner!");
    } else if (gameArray[2] === player1 && gameArray[5] === player1 && gameArray[8] === player1) {
      console.log("Winner!");
    } else if (gameArray[2] === player2 && gameArray[5] === player2 && gameArray[8] === player2) {
      console.log("Winner!");
    } else if (gameArray[0] === player1 && gameArray[4] === player1 && gameArray[8] === player1) {
      console.log("Winner!");
    } else if (gameArray[0] === player2 && gameArray[4] === player2 && gameArray[8] === player2) {
      console.log("Winner!");
    } else if (gameArray[2] === player1 && gameArray[4] === player1 && gameArray[6] === player1) {
      console.log("Winner!");
    } else if (gameArray[2] === player2 && gameArray[4] === player2 && gameArray[6] === player2) {
      console.log("Winner!");
    }
    endGame();
 };



const makeAMove = function (event) {
    event.preventDefault();
    if ($(this).text() !== ''){
      console.log('Make a valid move');
    } else if (turnCount % 2 === 0) {
        // let index = $(this).data("id");
        $(this).text(player1);
          move = player1;
        turnCount++;
        winGame();
    } else {
        $(this).text(player2);
        move = player2;
        turnCount++;
        winGame();
    }
    console.log(move);
    let id = event.target.id;
    let value = move;
    let index = function () {
      return parseInt(id.slice(-1)) - 1;
    };
    api.updateGame(index, value)
    .done(ui.success)
    .fail(ui.failure);
};



// const makeAMove2 = function (event) {
//     event.preventDefault();
//     if ($(this).text() !== empty){
//       console.log('Make a valid move');
//     } else if (turnCount % 2 === 0) {
//         $(this).text(player1);
//         gameArray[1] = player1;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     } else {
//         $(this).text(player2);
//         gameArray[1] = player2;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     }
// };
// const makeAMove3 = function (event) {
//     event.preventDefault();
//     if ($(this).text() !== empty){
//       console.log('Make a valid move');
//     } else if (turnCount % 2 === 0) {
//         $(this).text(player1);
//         gameArray[2] = player1;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     } else {
//         $(this).text(player2);
//         gameArray[2] = player2;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     }
// };
// const makeAMove4 = function (event) {
//     event.preventDefault();
//     if ($(this).text() !== empty){
//       console.log('Make a valid move');
//     } else if (turnCount % 2 === 0) {
//         $(this).text(player1);
//         gameArray[3] = player1;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     } else {
//         $(this).text(player2);
//         gameArray[3] = player2;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     }
// };
// const makeAMove5 = function (event) {
//     event.preventDefault();
//     if ($(this).text() !== empty){
//       console.log('Make a valid move');
//     } else if (turnCount % 2 === 0) {
//         $(this).text(player1);
//         gameArray[4] = player1;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     } else {
//         $(this).text(player2);
//         gameArray[4] = player2;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     }
// };
// const makeAMove6 = function (event) {
//     event.preventDefault();
//     if ($(this).text() !== empty){
//       console.log('Make a valid move');
//     } else if (turnCount % 2 === 0) {
//         $(this).text(player1);
//         gameArray[5] = player1;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     } else {
//         $(this).text(player2);
//         gameArray[5] = player2;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     }
// };
// const makeAMove7 = function (event) {
//     event.preventDefault();
//     if ($(this).text() !== empty){
//       console.log('Make a valid move');
//     } else if (turnCount % 2 === 0) {
//         $(this).text(player1);
//         gameArray[6] = player1;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     } else {
//         $(this).text(player2);
//         gameArray[6] = player2;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     }
// };
// const makeAMove8 = function (event) {
//     event.preventDefault();
//     if ($(this).text() !== empty){
//       console.log('Make a valid move');
//     } else if (turnCount % 2 === 0) {
//         $(this).text(player1);
//         gameArray[7] = player1;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     } else {
//         $(this).text(player2);
//         gameArray[7] = player2;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     }
// };
// const makeAMove9 = function (event) {
//     event.preventDefault();
//     if ($(this).text() !== empty){
//       console.log('Make a valid move');
//     } else if (turnCount % 2 === 0) {
//         $(this).text(player1);
//         gameArray[8] = player1;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     } else {
//         $(this).text(player2);
//         gameArray[8] = player2;
//         console.log(gameArray);
//         turnCount++;
//         winGame();
//     }
// };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#create-game').on('submit', onNewGame);
  $('#get-games').on('submit', onGetGames);
  $('.box').on('click', makeAMove);
  // $('#box2').on('click', makeAMove2);
  // $('#box3').on('click', makeAMove3);
  // $('#box4').on('click', makeAMove4);
  // $('#box5').on('click', makeAMove5);
  // $('#box6').on('click', makeAMove6);
  // $('#box7').on('click', makeAMove7);
  // $('#box8').on('click', makeAMove8);
  // $('#box9').on('click', makeAMove9);
};

module.exports = {
  addHandlers,
};
