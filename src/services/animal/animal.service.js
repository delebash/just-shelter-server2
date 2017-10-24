// Initializes the `animal` service on path `/animal`
const createService = require('feathers-sequelize');
const createModel = require('../../models/animal.model');
const hooks = require('./animal.hooks');
const filters = require('./animal.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'animal',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/animal', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('animal');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
