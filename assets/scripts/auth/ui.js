'use strict';
const app = require('../app.js');


const success = (data) => {
  if(data) {
    $('#sign-up').children('fieldset').children('.clear').val('')
  } else {
  $('#change-password').children('fieldset').children('.clear').val('');
}
};

const failure = (error) => {
  // console.log(error);
};

const signInSuccess = function (data) {
  app.user = data.user;
  $('#sign-in').children('fieldset').children('.clear').val('');
};

const signOutSuccess = function () {
  app.user = null;
};

const newGameSuccess = function (data) {
  app.game = data.game;
};

const getGameSuccess = function (data) {
  $('.row.games').text(data.games.length);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  newGameSuccess,
  getGameSuccess,
};
