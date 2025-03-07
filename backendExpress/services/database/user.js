const { User } = require('../../models');
const { createPasswordHash } = require('../auth/passwordManager');

const createUserService = async (name, email, password) => {
  try {
    const hashedPassword = await createPasswordHash(password);
    const { name: userName, email: userEmail } = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return {
      name: userName,
      email: userEmail,
    };
  } catch (error) {
    console.log('-- Error in createUserService -> error: ', error.message);
    return error;
  }
};

const isEmailRegisteredService = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  return user ? true : false;
};

const getUserByEmailService = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  return user;
};

module.exports = { createUserService, isEmailRegisteredService, getUserByEmailService };
