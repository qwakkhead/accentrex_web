// Setup a Sequelize model for User
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
  });
};