// Initializes the `specie` service on path `/specie`
const createService = require('feathers-sequelize');
const createModel = require('../../models/specie.model');
const hooks = require('./specie.hooks');
const filters = require('./specie.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'specie',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/specie', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('specie');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
