import apolloClient from '@/utils/ApolloClient';
import { gql } from '@apollo/client';
import { Login } from '../usecases/Login';
import { LoginAPICall } from '../repositories/LoginAPICall';
import { useRouter } from 'next/router';
import { PAGE_URLS } from '@/Consts';

type Props = {
  email: string;
  password: string;
};

export const LoginButton = (props: Props) => {
  const router = useRouter();

  const login = async () => {
    const account: Account = await Login(props.email, props.password);

    // アカウント情報を取得できていれば、トップページに遷移する
    if (account.email !== '' && account.email !== '') {
      router.push(PAGE_URLS.TOP);
    }
  };

  return (
    <div className="mt-4 text-center">
      <button
        onClick={login}
        type="button"
        className="w-2/3 bg-gray-500 text-white py-2 rounded-full shadow-2xl h-12"
      >
        ログイン
      </button>
    </div>
  );
};
