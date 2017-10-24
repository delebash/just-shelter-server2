const animal = require('./animal/animal.service.js');
const category = require('./category/category.service.js');
const type = require('./type/type.service.js');
const sex = require('./sex/sex.service.js');
const specie = require('./specie/specie.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(animal);
  app.configure(category);
  app.configure(type);
  app.configure(sex);
  app.configure(specie);
};
