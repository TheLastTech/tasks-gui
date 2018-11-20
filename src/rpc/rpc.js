/* eslint-disable no-use-before-define */
import faker from 'faker';
import dateFormat from 'dateformat';
import ErrorHelper from '../errors/ErrorHelper';


export const RpcServer = class RpcFaker {
// eslint-disable-next-line no-unused-vars
  static LoginUser(User, Pass) {
    return true;
  }


  static GetProposedProject() {
    const rng = Math.floor(Math.random() * 9);
    const rng2 = Math.floor(Math.random() * 9);
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

  static GetQA(Depth = 0) {

    if (Depth > 1) return [];
    const RandomCount = Math.floor(Math.random() * 3)+1
    const QaThread = [];
    for (let i = 0; i < RandomCount; i++) {
      const thread = RpcServer.GetQaThread( Depth);
      if (thread) {
        QaThread.push(thread);
      }
    }

    return QaThread;
  }

  static GetManagers(Count = 20) {
    const Managers = [];
    for (let i = 0; i < Count; i++) {
      Managers.push(RpcServer.GetUser());
    }
    return Managers.map(A => RpcServer.GetUserPledgeAsManager(A));
  }

  static GetUserPledgeAsManager(User) {
    const Application = [];
    const ApplicationParagraphCount = Math.floor(Math.random() * 12);
    for (let i = 0; i < ApplicationParagraphCount; i++) {
      Application.push(faker.lorem.paragraphs(3));
    }
    const TokenCount = Math.floor(Math.random() * 1000);
    const BadgeCount = Math.floor(Math.random() * 20);
    const badgelist = [];
    for (let i = 0; i < BadgeCount; i++) {
      badgelist.push(faker.company.catchPhraseNoun());
    }
// eslint-disable-next-line no-param-reassign
    User.ManagerPledge = {
      blurb: faker.lorem.sentence(),
      application: Application,
      tokens: TokenCount,
      badges: badgelist,
      pledgeDate: RpcServer.GetRandomFormattedDate(),
      PledgeQA: RpcServer.GetQA(),
    };
    return User;
  }

  static GetQaThread( Depth) {



    const User = RpcServer.GetUser();
    const CommentParagraphs = [];

    const CommentParagraphCount = Math.floor(Math.random() * 12) + 1;
    const CommentTime = RpcServer.GetRandomFormattedDate();
    for (let i = 0; i < CommentParagraphCount; i++) {
      CommentParagraphs.push(faker.lorem.paragraphs(3));
    }
    return {
      User, CommentParagraphs, CommentTime, Depth,
    };
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
        { Username: User, Password: Pass },
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
