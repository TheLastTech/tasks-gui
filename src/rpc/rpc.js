/* eslint-disable no-trailing-spaces,keyword-spacing,space-before-blocks */
import ErrorHelper from '../errors/ErrorHelper';

export default class RPCHelper {
  static LoginPath = '/users';
  static Proposals = '/posts';
  static ProposalComments = '/comments';
  static ApiUrl = 'https://jsonplaceholder.typicode.com'
  static FetchPostJson(Path, Data) {
    return fetch(`${RPCHelper.ApiUrl}${Path}`, {
      method: 'post',
      body: JSON.stringify(Data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(Result => Result.json());
  }
  static GetProposals(){

  }
  static GetProposal(Id){

  }
  static async Login(User, Pass) {
    try {
      return await RPCHelper.FetchPostJson(
        RPCHelper.LoginPath,
        { Username: User, Password: Pass },
      );
    } catch (e) {
      ErrorHelper.LogAndReportError('Rpc Login', e);
    }
    return false;
  }
}
