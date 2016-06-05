'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


let turnCount = 0;
let player1 = 'X';
let player2 = 'O';
let move = '';
let gameArray = ['','','','','','','','',''];

const reset = function () {

};

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
  reset();
};

const onGetGames = function (event) {
  event.preventDefault();
  api.getGames()
  .done(ui.success)
  .fail(ui.failure);
};

const winOrTieGame = function () {
    if (gameArray[0] && gameArray[1] && gameArray[2] move === player1) {
      window.alert("X is the Winner!");
    } else if (gameArray[0] && gameArray[1] && gameArray[2] === player2) {
      window.alert("O is the Winner!");
    } else if (gameArray[3] && gameArray[4] && gameArray[5] === player1) {
      window.alert("X is the Winner!");
    } else if (gameArray[3] && gameArray[4] && gameArray[5] === player2) {
      window.alert("O is the Winner!");
    } else if (gameArray[6] && gameArray[7] && gameArray[8] === player1) {
      window.alert("X is the Winner!");
    } else if (gameArray[6] && gameArray[7] && gameArray[8] === player2) {
      window.alert("O is the Winner!");
    } else if (gameArray[0] && gameArray[3] && gameArray[6] === player1) {
      window.alert("X is the Winner!");
    } else if (gameArray[0] && gameArray[3] && gameArray[6] === player2) {
      window.alert("O is the Winner!");
    } else if (gameArray[1] && gameArray[4] && gameArray[7] === player1) {
      window.alert("X is the Winner!");
    } else if (gameArray[1] && gameArray[4] && gameArray[7] === player2) {
      window.alert("O is the Winner!");
    } else if (gameArray[2] && gameArray[5] && gameArray[8] === player1) {
      window.alert("X is the Winner!");
    } else if (gameArray[2] && gameArray[5] && gameArray[8] === player2) {
      window.alert("O is the Winner!");
    } else if (gameArray[0] && gameArray[4] && gameArray[8] === player1) {
      window.alert("X is the Winner!");
    } else if (gameArray[0] && gameArray[4] && gameArray[8] === player2) {
      window.alert("O is the Winner!");
    } else if (gameArray[2] === player1 && gameArray[4] && gameArray[6] === player1) {
      window.alert("X is the Winner!");
    } else if (gameArray[2] === player2 && gameArray[4] && gameArray[6] === player2) {
      window.alert("O is the Winner!");
    } else if (turnCount >= 9) {
      window.alert("It's a tie!");
    }
 };

gameArray.insert = function (index, move) {
  this.splice(index, 0, move);
};
const makeAMove = function (event) {
    event.preventDefault();
    let position = event.target.id;
    let index = function () {
      return parseInt(position.slice(-1)) - 1;
    };
    if ($(this).text() !== ''){
      window.alert('Make a valid move');
    } else if (turnCount % 2 === 0) {
        // let index = $(this).data("id");
        $(this).text(player1);
        move = player1;
        turnCount++;
        winOrTieGame();
    } else {
        $(this).text(player2);
        move = player2;
        turnCount++;
        winOrTieGame();
    }
    gameArray.insert(index, move);
    console.log(gameArray);
};

const updateGame = function (event) {
  event.preventDefault();
  let id = event.target.id;
  let index = function () {
    return parseInt(id.slice(-1)) - 1;
  };
  let value = $(this).text();
  api.updateGame(index, value)
  .done(ui.success)
  .fail(ui.failure);
};



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#create-game').on('submit', onNewGame);
  $('#get-games').on('submit', onGetGames);
  $('.box').on('click', makeAMove);
  $('.box').on('click', updateGame);
};

module.exports = {
  addHandlers,
};
