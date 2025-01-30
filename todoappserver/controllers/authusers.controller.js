const { createUserService } = require('../services/database/user');
const { handleError } = require('../utils/handleError');
const HttpStatus = require('../utils/httpStatus');
const { signupErrorMessage } = require('../utils/errorMessages');
const { signupSuccessMessage } = require('../utils/succesMessages');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await createUserService(name, email, password);
    return res.status(HttpStatus.CREATED).send({
      message: signupSuccessMessage(newUser.name, newUser.email),
    });
  } catch (error) {
    console.log('-- Error in signup controller -> error: ', error.message);
    return handleError(res, HttpStatus.INTERNAL_SERVER_ERROR, signupErrorMessage);
  }
};
