var express = require('express');
var router = express.Router();

// userController
const diaryController = require('../controller/diaryController');

router.post('/signup',diaryController.addUserUUID);

module.exports = router;
