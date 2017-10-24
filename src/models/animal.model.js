// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const animal = sequelizeClient.define('animal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING(40),
      allowNull: false
    },
    non_shelter: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  animal.associate = function (models) { // eslint-disable-line no-unused-vars
    animal.belongsTo(models.type);
    animal.belongsTo(models.category);
    animal.belongsTo(models.sex);
    animal.belongsTo(models.specie);
  };

  return animal;
};
