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
        result[i].last_diary_date = moment(result[i].last_diary_date).format('YYYY년 M월 DD일');
    }
   
    return result;
    
}

async function getLastDiaryByDate(userIdx,diaryDate){

    const result = await diaryDao.selectLastDiaryByDate(userIdx,diaryDate);
    const size = result.length;


    for(let i = 0; i<size;i++){
        result[i].last_diary_date = moment(result[i].last_diary_date).format('YYYY년 M월 DD일');
    }

    return result;
}

async function getLastDiaryByHashTag(userIdx,diaryHashTag){
    const result = await diaryDao.selectLastDiaryByHashTag(userIdx,diaryHashTag);
    const size = result.length;

    for(let i = 0; i<size;i++){
        result[i].last_diary_date = moment(result[i].last_diary_date).format('YYYY년 M월 DD일');
    }

    return result;
}

async function addUserUUID(userUUID){
    await diaryDao.insertUserUUID(userUUID);

   const result = await diaryDao.selectUserIdx(userUUID);

   return {user_idx:result[0].user_idx}
}

async function removeLastDiary(userIdx,diaryDate,flag){
    if(flag == 0){
        await diaryDao.deleteAllLastDiary(userIdx);
    }else{
        await diaryDao.deleteLastDiary(userIdx,diaryDate);
    }
}

module.exports = {
    addLastDiary,
    getLastDiary,
    getLastDiaryByDate,
    getLastDiaryByHashTag,
    addUserUUID,
    removeLastDiary,
};