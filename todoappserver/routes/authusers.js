var express = require('express');
var router = express.Router();

const controller = require('../controllers/authusers.controller');
const { validateEmailRegistered } = require('../middleware/user.middleware');

router.post('/signup', [validateEmailRegistered], controller.signup);

module.exports = router;
