const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const User = require('./user')(sequelize, DataTypes);

// Definir relaciones

const db = {
  sequelize,
  User,
};

module.exports = db;
