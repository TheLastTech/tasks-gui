export default class ErrorHelper{
  static LogAndReportError(Where,e){
    console.log(`Error in ${Where}`,e);
    console.error(e);
  }

}
