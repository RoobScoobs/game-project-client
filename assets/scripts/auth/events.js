'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


let turnCount = 0;
let player1 = 'X';
let player2 = 'O';
let user1 = 0;
let user2 = 0;
let move = '';
let gameArray = ['','', '', '', '', '', '', '', ''];
let gameOver = false;

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

const reset = function () {
  turnCount = 0;
  gameArray = ['','', '', '', '', '', '', '', ''];
  $('.box').empty();
  $('.box').on('click');
};

const endGame = function () {
  setTimeout (function() { $('h2').empty(); }, 7000);
};

const onNewGame = function (event) {
 event.preventDefault();
 api.createGame()
 .done(ui.newGameSuccess)
 .fail(ui.failure);
 reset();
};

const winOrTieGame = function () {
    let win = false;
    let tie = false;
    let winner;
    if ((gameArray[0] !== '') && gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) {
      win = true;
      winner = gameArray[0];
      endGame();
    } else if ((gameArray[3] !== '') && gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5]) {
      win = true;
      winner = gameArray[3];
      endGame();
    } else if ((gameArray[6] !== '') && gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8]) {
      win = true;
      winner = gameArray[6];
      endGame();
    } else if ((gameArray[0] !== '') && gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6]) {
      win = true;
      winner = gameArray[0];
      endGame();
    } else if ((gameArray[1] !== '') && gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7]) {
      win = true;
      winner = gameArray[1];
      endGame();
    } else if ((gameArray[2] !== '') && gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8]) {
      win = true;
      winner = gameArray[2];
      endGame();
    } else if ((gameArray[0] !== '') && gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8]) {
      win = true;
      winner = gameArray[0];
      endGame();
    } else if ((gameArray[2] !== '') && gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6]) {
      win = true;
      winner = gameArray[2];
      endGame();
    } else if (turnCount >= 9) {
      tie = true;
    }
    if (win) {
      $('h2').text('Player ' + winner + ' is the winner!');
      $('.box').off('click');
      gameOver = true;
      if (winner === player1) {
        user1 += 1;
      } else if (winner === player2) {
        user2 += 1;
      }
      $('.score.1').text('Player 1: ' + user1);
      $('.score.2').text('Player 2: ' + user2);
    } else if (tie) {
      $('h2').text('Game is a tie!');
      gameOver = true;
    }

};

const onGetGames = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.getGames(data)
  .done(ui.getGameSuccess)
  .fail(ui.failure);
};

let insert = function (array, index, move) {
  array.splice(index, 1, move);
};

const makeAMove = function (event) {
    event.preventDefault();
    let index = $(event.target).attr('id');
    if ($(this).text() !== ''){
      window.alert('Make a valid move');
    } else if (turnCount % 2 === 0) {
        $(this).text(player1);
        move = player1;
        turnCount++;
    } else {
        $(this).text(player2);
        move = player2;
        turnCount++;
    }
    insert(gameArray, index, move);
    winOrTieGame();
};


const updateGame = function (event) {
  event.preventDefault();
  let index = event.target.id;
  let value = $(this).text();
  api.updateGame(index, value, gameOver)
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
