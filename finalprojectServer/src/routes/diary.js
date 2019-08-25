const express = require('express');
const router = express.Router();

// userController
const diaryController = require('../controller/diaryController');

router.get('/lastdiarylist/:userIdx',diaryController.getLastDiary);
router.get('/search/:userIdx/date/:diaryDate',diaryController.getLastDiaryByDate);
router.get('/search/:userIdx/hashtag/:diaryHashTag',diaryController.getLastDiaryByHashTag);
router.post('/save',diaryController.addLastDiary);

module.exports = router;