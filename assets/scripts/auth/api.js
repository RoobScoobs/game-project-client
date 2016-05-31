'use strict';
const app = require('../app.js');

const signUp = (data) => {
  return $.ajax ({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data
  });
};

const signIn = (data) => {
  console.log("data is ");
  console.log(data);
  return $.ajax ({
    url: app.host + '/sign-in',
    method: 'POST',
    data
    // same as writing
    // data: data
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

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
