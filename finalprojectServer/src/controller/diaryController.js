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




module.exports = {
    addLastDiary,
    getLastDiary,
    getLastDiaryByDate,
    getLastDiaryByHashTag,
  };