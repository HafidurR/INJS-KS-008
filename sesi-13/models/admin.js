'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.belongsTo(models.Ruangan, { foreignKey: "ruangan_id" })
    }
  };
  Admin.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    birthdate: DataTypes.DATE,
    gender: DataTypes.ENUM({
      values: ['male', 'female']
    }),
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    ruangan_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};