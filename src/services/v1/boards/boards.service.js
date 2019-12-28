// Initializes the `v1/boards` service on path `/v1/boards`
const { Boards } = require('./boards.class');
const createModel = require('../../../models/boards.model');
const hooks = require('./boards.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/boards', new Boards(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/boards');

  service.hooks(hooks);
};
