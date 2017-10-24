"use strict";

const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");
const env       = process.env.NODE_ENV || "development";
const Op = Sequelize.Op;
const config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

module.exports = function () {
  const app = this;
  if (process.env.DATABASE_URL) {
    var sequelize = new Sequelize(process.env.DATABASE_URL,config);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
  var db = {};

  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    sequelize.sync();

    return result;
  };
};
