const diaryService = require('../service/diaryService');
const { response, errorResponse } = require('../library/response');

async function addLastDiary (req,res){
  try {
      const userIdx = req.body.userIdx;
      const diaryContent = req.body.diaryContent;

      await diaryService.addLastDiary(diaryContent,userIdx);
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


module.exports = {
    addLastDiary,
    getLastDiary,
  };