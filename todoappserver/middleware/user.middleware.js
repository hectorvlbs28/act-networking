const { isEmailRegisteredService } = require('../services/database/user');
const { emailRegisteredMessage, internalErrorMessage, userDoesNotExistMessage } = require('../utils/errorMessages');
const { handleError } = require('../utils/handleError');
const HttpStatus = require('../utils/httpStatus');

const handleEmailCheck = async (req, res, next, checkFn, errorMessageFn) => {
  try {
    const { email } = req.body;
    const emailRegistered = await isEmailRegisteredService(email);
    console.log('emailRegistered', emailRegistered);

    if (checkFn(emailRegistered)) {
      console.log(`-- Error in ${errorMessageFn.name} -> email: `, email, errorMessageFn(email));
      return handleError(res, HttpStatus.BAD_REQUEST, errorMessageFn(email));
    }

    next();
  } catch (error) {
    console.log(`-- Error in ${errorMessageFn.name} -> error: `, error.message);
    return handleError(res, HttpStatus.INTERNAL_SERVER_ERROR, internalErrorMessage);
  }
};

const validateEmailRegistered = (req, res, next) => {
  handleEmailCheck(req, res, next, (emailRegistered) => emailRegistered, emailRegisteredMessage);
};

const verifyUserExists = (req, res, next) => {
  handleEmailCheck(req, res, next, (emailRegistered) => !emailRegistered, userDoesNotExistMessage);
};

module.exports = { validateEmailRegistered, verifyUserExists };
