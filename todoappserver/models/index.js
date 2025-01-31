const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const User = require('./user')(sequelize, DataTypes);
const Sessions = require('./sessions')(sequelize, DataTypes);
const Logs = require('./logs')(sequelize, DataTypes);
const Tasks = require('./tasks')(sequelize, DataTypes);

User.hasMany(Sessions, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
};

syncDatabase();

module.exports = {
  sequelize,
  User,
  Sessions,
  Logs,
  Tasks,
};
