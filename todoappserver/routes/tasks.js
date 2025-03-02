var express = require('express');
var router = express.Router();

var controller = require('../controllers/tasks.controller');

router.post('/create', controller.create);

module.exports = router;
