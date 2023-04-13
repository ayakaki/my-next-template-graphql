import { useRouter } from 'next/router';
import { LoginAPICall } from '../repositories/LoginAPICall';
import { PAGE_URLS } from '@/Consts';

export const Login = async (email, password) => {
  const account: Account = await LoginAPICall(email, password);
  return account;
};
