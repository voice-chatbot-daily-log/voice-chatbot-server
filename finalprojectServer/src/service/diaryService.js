//const request = require('request-promise');
const moment = require('moment');
const diaryDao = require('../dao/diaryDao');

async function addLastDiary(diaryContent,userIdx){
    await diaryDao.insertLastDiary(diaryContent,userIdx)
}

async function getLastDiary(userIdx){
    
    const result = await diaryDao.selectLastDiary(userIdx);

    for(let i = 0; i<result.length;i++){
        result[i].last_diary_date = moment(result[i].last_diary_date).format('YYYY년 MM월 DD일');
    }
   
    return result;
    
}


module.exports = {
    addLastDiary,
    getLastDiary,
};