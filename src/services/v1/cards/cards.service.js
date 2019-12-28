// Initializes the `v1/cards` service on path `/v1/cards`
const { Cards } = require('./cards.class');
const createModel = require('../../../models/cards.model');
const hooks = require('./cards.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/cards', new Cards(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/cards');

  service.hooks(hooks);
};
