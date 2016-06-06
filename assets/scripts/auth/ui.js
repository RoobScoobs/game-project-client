'use strict';
const app = require('../app.js');


const success = (data) => {
  if(data) {
    $('#sign-up').children('fieldset').children('.clear').val('');
    console.log(data);
  } else {
  $('#change-password').children('fieldset').children('.clear').val('');
  console.log('Changed Password Successfully!');
}
};

const failure = (error) => {
  console.log(error);
};

const signInSuccess = function (data) {
  app.user = data.user;
  $('#sign-in').children('fieldset').children('.clear').val('');
  console.log(app);
};

const signOutSuccess = function () {
  app.user = null;
  console.log(app);
};

const newGameSuccess = function (data) {
  app.game = data.game;
  console.log(app);
};

const getGameSuccess = function (data) {
  $('.row.games').text(data.games.length);
  console.log(data);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  newGameSuccess,
  getGameSuccess,
};
