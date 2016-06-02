'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

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
  api.newGame()
  .done(ui.newGameSuccess)
  .fail(ui.failure);
};

let turnCount = 0;
let player1 = 'X';
let player2 = 'O';
let empty = '';
const makeAMove = function (event) {
    event.preventDefault();
    if ($(this).text() !== empty){
      console.log('Make a valid move');
    } else if (turnCount % 2 === 0) {
        $(this).text(player1);
        turnCount++;
    } else {
        $(this).text(player2);
        turnCount++;
    }
};



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#reset-game').on('submit', onNewGame);
  $('.box').on('click', makeAMove);

};

module.exports = {
  addHandlers,
};
