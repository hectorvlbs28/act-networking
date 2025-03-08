const HttpStatus = require('../utils/httpStatus');
const { handleError } = require('../utils/handleError');
const { getSessionsCountService, sessionExistsService } = require('../services/database/sessions');
const { internalErrorMessage, sessionsLimitMessage, sessionNotFoundMessage } = require('../utils/errorMessages');
require('dotenv').config();

const LIMIT_SESSIONS = process.env.LIMIT_SESSIONS;

const checkActiveSessionsLimit = async (req, res, next) => {
  try {
    const { userName } = req.body;
    const sessionsCount = await getSessionsCountService(userName);

    if (sessionsCount >= LIMIT_SESSIONS) {
      console.log(`-- checkActiveSessionsLimit -> sessionsCount: `, sessionsCount);
      return handleError(res, HttpStatus.UNAUTHORIZED, sessionsLimitMessage);
    }

    next();
  } catch (error) {
    console.log(`-- Error in checkActiveSessionsLimit -> error: `, error.message);
    return handleError(res, HttpStatus.INTERNAL_SERVER_ERROR, internalErrorMessage);
  }
};

const checkSessionExists = async (req, res, next) => {
  try {
    const { userToken } = req.body;
    const sessionExist = await sessionExistsService(userToken);

    if (!sessionExist) {
      console.log(`-- checkSessionExists -> sessionExist: `, sessionExist);
      return handleError(res, HttpStatus.BAD_REQUEST, sessionNotFoundMessage);
    }

    next();
  } catch (error) {
    console.log(`-- Error in checkSessionExists -> error: `, error.message);
    return handleError(res, HttpStatus.INTERNAL_SERVER_ERROR, internalErrorMessage);
  }
};

module.exports = { checkActiveSessionsLimit, checkSessionExists };
