const express = require('express');
const router = express.Router();

// userController
const userController = require('../controller/diaryController');

router.get('/lastdiarylist/:userIdx',userController.getLastDiary)
router.post('/save',userController.addLastDiary)

module.exports = router;