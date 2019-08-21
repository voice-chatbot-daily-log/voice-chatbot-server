//const request = require('request-promise');
const moment = require('moment');
const diaryDao = require('../dao/diaryDao');

async function addLastDiary(diaryContent,userIdx,diaryDate,diaryHashTag){
    await diaryDao.insertLastDiary(diaryContent,userIdx,diaryDate,diaryHashTag);

}

async function getLastDiary(userIdx){
    
    const result = await diaryDao.selectLastDiary(userIdx);

    const size = result.length;

    for(let i = 0; i<size;i++){
        result[i].last_diary_date = moment(result[i].last_diary_date).format('YYYY년 MM월 DD일');
    }
   
    return result;
    
}


module.exports = {
    addLastDiary,
    getLastDiary,
};