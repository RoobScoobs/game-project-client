'use strict';

const authEvents = require('./auth/events.js');
const winConditions = require('./wins.js');


// On document ready
$(() => {
  authEvents.addHandlers();
  winConditions.winGame();
});
