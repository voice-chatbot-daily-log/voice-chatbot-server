const mysql = require('../library/mysql');

async function insertLastDiary(diaryContent,userIdx,diaryDate,diaryHashTag){

    const sql = `
    INSERT INTO LAST_DIARY
    (last_diary_content,user_idx,last_diary_date,last_diary_hashtag)
    VALUES
    (?,?,?,?)
    `;

    await mysql.query(sql, [diaryContent,userIdx,diaryDate,diaryHashTag]);
}
async function selectLastDiary(userIdx){
    
    const sql = `
    SELECT
    last_diary_date,last_diary_content
    FROM LAST_DIARY
    WHERE user_idx = ?
    `;

    const result = await mysql.query(sql, [userIdx]);
    return result;
}

module.exports = {
    insertLastDiary,
    selectLastDiary,
  };