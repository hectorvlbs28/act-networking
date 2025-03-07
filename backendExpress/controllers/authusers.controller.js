const { createUserService, getUserByEmailService } = require('../services/database/user');
const { handleError } = require('../utils/handleError');
const HttpStatus = require('../utils/httpStatus');
const { signupErrorMessage, passwordErrorMessage, signoutErrorMessage } = require('../utils/errorMessages');
const { signupSuccessMessage, signInSuccesMessage, signoutSuccessMessage } = require('../utils/succesMessages');
const { comparePassword } = require('../services/auth/passwordManager');
const { generateJwt } = require('../services/auth/jwtManager');
const { createSessionService, deleteSessionService } = require('../services/database/sessions');

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

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    const {
      password: userPassword,
      user_id: userId,
      name: userName,
      email: userEmail,
    } = await getUserByEmailService(email);
    const isPasswordCorrect = await comparePassword(password, userPassword);
    if (!isPasswordCorrect) {
      return handleError(res, HttpStatus.UNAUTHORIZED, passwordErrorMessage);
    }
    const { newJwt: userToken, expirationTime: tokenExpirationTime } = generateJwt(userId);
    await createSessionService(userId, userToken, tokenExpirationTime);

    return res.status(HttpStatus.ACCEPTED).send({
      message: signInSuccesMessage(userName),
      user: {
        userName,
        userEmail,
        userId,
        userToken,
        tokenExpirationTime,
      },
    });
  } catch (error) {
    console.log('-- Error in signin controller -> error: ', error.message);
    return handleError(res, HttpStatus.INTERNAL_SERVER_ERROR, signupErrorMessage);
  }
};

exports.signout = async (req, res) => {
  try {
    const { userToken } = req.body;
    await deleteSessionService(userToken);
    return res.status(HttpStatus.OK).send({ message: signoutSuccessMessage });
  } catch (error) {
    console.log('-- Error in signout controller -> error: ', error.message);
    return handleError(res, HttpStatus.INTERNAL_SERVER_ERROR, signoutErrorMessage);
  }
};
