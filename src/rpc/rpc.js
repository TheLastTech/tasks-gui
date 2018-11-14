/* eslint-disable no-use-before-define */
import faker from 'faker';
import dateFormat from 'dateformat';
import ErrorHelper from '../errors/ErrorHelper';


export const RpcServer = class RpcFaker {
// eslint-disable-next-line no-unused-vars
  static LoginUser(User, Pass) {
    return true;
  }


  static GetComment() {
    return {
      text: faker.lorem.paragraphs(),
      slug: faker.lorem.slug(),
    };
  }

  static GetProposedProject() {
    const rng = Math.floor(Math.random() * 26);
    const rng2 = Math.floor(Math.random() * 26);
    return {
      backgroundImage: `https://picsum.photos/40${rng}/40${rng2}/?random`,
      category: faker.company.catchPhraseNoun(),
      categoryTheme: 'dark',
      author: faker.name.findName(),
      authorAvatar: faker.internet.avatar(),
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(Math.floor(Math.random() * Math.floor(1)) + 1),
      id: faker.lorem.slug(),
      date: RpcServer.GetRandomFormattedDate(),
    };
  }

  static GetRandomFormattedDate() {
    return dateFormat(RandomDate(), 'dddd, mmmm dS, yyyy');
  }

  static GetProposals(Count = 40) {
    const Proposals = [];
    for (let i = 0; i < Count; i++) {
      Proposals.push(RpcServer.GetProposedProject());
    }
    return Proposals;
  }

  static GetComments(Count = 20) {
    const Comments = [];
    for (let i = 0; i < Count; i++) {
      Comments.push(RpcServer.GetComment());
    }
    return Comments;
  }

  static GetManagers(Count = 20) {
    const Managers = [];
    for (let i = 0; i < Count; i++) {
      Managers.push(RpcServer.GetUser());
    }
    return Managers.map(A => RpcServer.GetUserPledgeAsManager(A));
  }

  static GetUserPledgeAsManager(User) {
    const TokenCount = Math.floor(Math.random() * 1000);
    const BadgeCount = Math.floor(Math.random() * 20);
    const badgelist = [];
    for (let i = 0; i < BadgeCount; i++) {
      badgelist.push(faker.company.catchPhraseNoun());
    }
// eslint-disable-next-line no-param-reassign
    User.ManagerPledge = {
      blurb: faker.lorem.sentence(),
      tokens: TokenCount,
      badges: badgelist,
      pledgeDate: RpcServer.GetRandomFormattedDate(),
    };
    return User;
  }

  static GetUser() {
    return {
      userName: faker.internet.userName(),
      email: faker.internet.email(),
      color: faker.internet.color(),
      avatar: faker.internet.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };
  }
};

export default class RPCHelper {
  static LoginPath = '/users';

  static ApiUrl = ' '

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

  static GetProposals() {

  }

  static GetProposal(Id) {

  }

  static async Login(User, Pass) {
    try {
      return await RPCHelper.FetchPostJson(
        RPCHelper.LoginPath,
        {Username: User, Password: Pass},
      );
    } catch (e) {
      ErrorHelper.LogAndReportError('Rpc Login', e);
    }
    return false;
  }
}


function RandomDate() {
  const start = new Date();
  const end = new Date();
  end.setDate(end.getDate() + 15);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
