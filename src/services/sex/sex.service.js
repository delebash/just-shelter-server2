// Initializes the `sex` service on path `/sex`
const createService = require('feathers-sequelize');
const createModel = require('../../models/sex.model');
const hooks = require('./sex.hooks');
const filters = require('./sex.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'sex',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sex', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sex');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
