const { isEmailRegisteredService } = require('../services/database/user');
const { emailRegisteredMessage, internalErrorMessage } = require('../utils/errorMessages');
const { handleError } = require('../utils/handleError');
const HttpStatus = require('../utils/httpStatus');

const validateEmailRegistered = async (req, res, next) => {
  try {
    const { email } = req.body;
    const emailRegistered = await isEmailRegisteredService(email);

    if (emailRegistered) {
      console.log('-- Error in validateEmailRegistered -> email: ', email, ' is already registered.');
      return handleError(res, HttpStatus.BAD_REQUEST, emailRegisteredMessage(email));
    }

    next();
  } catch (error) {
    console.log('-- Error in validateEmailRegistered -> error: ', error.message);
    return handleError(res, HttpStatus.INTERNAL_SERVER_ERROR, internalErrorMessage);
  }
};

module.exports = { validateEmailRegistered };
