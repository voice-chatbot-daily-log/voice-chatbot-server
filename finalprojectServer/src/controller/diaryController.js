const diaryService = require('../service/diaryService');
const { response, errorResponse } = require('../library/response');

async function addLastDiary (req,res){
  try {
      const userIdx = req.body.userIdx;
      const diaryContent = req.body.diaryContent;
      const diaryDate = req.body.diaryDate;
      const diaryHashTag = req.body.diaryHashTag;

      await diaryService.addLastDiary(diaryContent,userIdx,diaryDate,diaryHashTag);
      response('Success', [], res, 201);
  } catch (error) {
    console.log(error);
    errorResponse(error.message, res, error.statusCode);
  }

}

async function getLastDiary (req,res){
    try {

      const userIdx = req.params.userIdx;
      const result = await diaryService.getLastDiary(userIdx);
      response('Success',result, res, 200);
  
    } catch (error) {
      console.log(error);
      errorResponse(error.message, res, error.statusCode);
    }
}

async function getLastDiaryByDate (req,res){
  try {

    const userIdx = req.params.userIdx;
    const diaryDate = req.params.diaryDate;
    const result = await diaryService.getLastDiaryByDate(userIdx,diaryDate);
    response('Success',result, res, 200);

  } catch (error) {
    console.log(error);
    errorResponse(error.message, res, error.statusCode);
  }
}

async function getLastDiaryByHashTag(req,res){
  try {

    const userIdx = req.params.userIdx;
    const diaryHashTag = req.params.diaryHashTag;
    const result = await diaryService.getLastDiaryByHashTag(userIdx,diaryHashTag);
    response('Success',result, res, 200);

  } catch (error) {
    console.log(error);
    errorResponse(error.message, res, error.statusCode);
  }
}

async function addUserUUID(req, res){
  try {

    const userUUID = req.body.userUUID;
    const result = await diaryService.addUserUUID(userUUID);
    response('Success',result, res, 201);

  } catch (error) {
    console.log(error);
    errorResponse(error.message, res, error.statusCode);
  }
}

async function removeLastDiary(req,res){

  try {
    const flag = req.body.flag;
    const userIdx = req.body.userIdx;
    const diaryDate = req.body.diaryDate;

    if(flag == 0){
      await diaryService.removeLastDiary(userIdx,diaryDate,flag);
      response('Success',[], res, 200);
    }else{
      const result = await diaryService.getLastDiaryByDate(userIdx,diaryDate);
     
      if(result.length == 0){
        response('해당 데이터가 존재하지 않습니다.',[], res, 200);
      }else{
        await diaryService.removeLastDiary(userIdx,diaryDate,flag)
        response('Success',[], res, 200);
      }
    }

  } catch (error) {
    console.log(error);
    errorResponse(error.message, res, error.statusCode);
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