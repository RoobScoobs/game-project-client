'use strict';
const app = require('../app.js');


const success = (data) => {
  if(data) {
    console.log(data);
  } else {
  console.log('Changed Password Successfully!');
}
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = function (data) {
  app.user = data.user;
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



module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  newGameSuccess,
};
