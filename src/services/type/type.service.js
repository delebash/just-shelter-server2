// Initializes the `type` service on path `/type`
const createService = require('feathers-sequelize');
const createModel = require('../../models/type.model');
const hooks = require('./type.hooks');
const filters = require('./type.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'type',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/type', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('type');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
