const bcrypt = require('bcrypt');
const { User } = require('../../models/');

const createUserService = async (name, email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
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

module.exports = { createUserService, isEmailRegisteredService };
