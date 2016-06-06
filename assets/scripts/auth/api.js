'use strict';
const app = require('../app.js');


const signUp = (data) => {
  return $.ajax ({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  });
};

const signIn = (data) => {
  return $.ajax ({
    url: app.host + '/sign-in',
    method: 'POST',
    data
  });
};

const signOut = () => {
  return $.ajax ({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
        Authorization: 'Token token=' + app.user.token,
    }
  });
};

const changePassword = function (data) {
  return $.ajax ({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  });
};

const createGame = function () {
  return $.ajax ({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getGames = function () {
  return $.ajax ({
    url: app.host + '/games/' + app.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateGame = function (index, value, gameOver) {
  return $.ajax ({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
        "game": {
          "cell": {
            "index": index,
            "value": value,
          },
          "over": gameOver
          }
        }
    });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame,
  getGames,
  updateGame,
};
