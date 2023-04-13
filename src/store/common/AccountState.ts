import { atom } from 'recoil';

type Account = {
  userName: string;
  email: string;
  sessionToken: string;
};

const accountState = atom<Account>({
  key: 'AccountState',
  default: {
    userName: 'trialUserName',
    email: 'trialEmail',
    sessionToken: 'trialSessionToken',
  },
});
