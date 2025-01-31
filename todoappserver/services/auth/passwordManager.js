const bcrypt = require('bcrypt');

const saltOrRounds = 10;

const createPasswordHash = async (password) => {
  const hashedPassword = await bcrypt.hash(password, saltOrRounds);
  return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
  const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
  return isPasswordCorrect;
};

module.exports = { createPasswordHash, comparePassword };
