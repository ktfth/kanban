const users = require('./users/users.service.js');
const v1Boards = require('./v1/boards/boards.service.js');
const v1Cards = require('./v1/cards/cards.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(v1Boards);
  app.configure(v1Cards);
};
