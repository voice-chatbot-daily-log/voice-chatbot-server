const express = require('express');
const router = express.Router();

// userController
const diaryController = require('../controller/diaryController');

router.get('/lastdiarylist/:userIdx',diaryController.getLastDiary);
router.get('/lastdiary/:userIdx/:diaryDate',diaryController.getLastDiaryByDate);
router.get('/lastdiary/:userIdx/:diaryHashTag',diaryController.getLastDiaryByHashTag);
router.post('/save',diaryController.addLastDiary);

module.exports = router;