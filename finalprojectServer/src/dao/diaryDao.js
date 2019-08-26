const mysql = require('../library/mysql');

async function insertLastDiary(diaryContent,userIdx,diaryDate,diaryHashTag){

    const sql = `
    INSERT INTO LAST_DIARY
    (last_diary_content,user_idx,last_diary_conDate,last_diary_hashtag)
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

async function selectLastDiaryByDate(userIdx,diaryDate){
    const sql = `
    SELECT
    last_diary_date,last_diary_content
    FROM LAST_DIARY
    WHERE user_idx = ?
    AND last_diary_conDate = ?
    `;
    const result = await mysql.query(sql,[userIdx,diaryDate]);
    return result;
}

async function selectLastDiaryByHashTag(userIdx,diaryHashTag){
    
    const sql = `
    SELECT
    last_diary_date,last_diary_content
    FROM LAST_DIARY
    WHERE user_idx = ?
    AND last_diary_hashtag = ?
    `;

    const result = await mysql.query(sql,[userIdx,diaryHashTag]);
    return result;
}

async function insertUserUUID(userUUID){

    const sql = `
    INSERT INTO USER (user_uuid) VALUES (?)
    `;

    await mysql.query(sql,[userUUID]);

}

async function selectUserIdx(userUUID){
    const sql = `
    SELECT
    user_idx
    FROM USER
    WHERE user_uuid = ?
    `;

    const result = await mysql.query(sql,[userUUID]);
    return result;
}

module.exports = {
    insertLastDiary,
    selectLastDiary,
    selectLastDiaryByDate,
    selectLastDiaryByHashTag,
    insertUserUUID,
    selectUserIdx,
  };