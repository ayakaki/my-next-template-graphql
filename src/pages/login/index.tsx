import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { MyHeader } from '@/components/header/ui/MyHeader';
import { InputArea } from '@/components/login/ui/InputArea';
import { LoginButton } from '@/components/login/ui/LoginButton';
import Link from 'next/link';

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordState, setPasswordState] = useState<string>('password'); // [password, setPassword
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isPasswordVisible) {
      setPasswordState('text');
    } else {
      setPasswordState('password');
    }
  }, [isPasswordVisible]);

  return (
    <>
      <div className="w-1/3 mx-auto">
        <div className="mt-28 mb-10">
          <p className="font-bold">ログイン</p>
          <p className="">
            ご登録のメールアドレスとパスワードをご入力ください。
          </p>
        </div>
        <div className="mb-3">
          <InputArea
            title="メールアドレス"
            text={email}
            setText={setEmail}
            type="text"
          />
        </div>
        <div className="mb-2">
          <InputArea
            title="パスワード"
            text={password}
            setText={setPassword}
            type={passwordState}
          />
        </div>
        <div className="mb-10">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 border-black text-teal-500 transition duration-150 ease-in-out bg-white border-gray-400 rounded-sm checked:bg-teal-500 checked:border-transparent checked:text-white focus:outline-none focus:shadow-outline-blue active:bg-teal-500"
              checked={isPasswordVisible}
              onChange={() => setIsPasswordVisible(!isPasswordVisible)}
            ></input>
            <span className="ml-2 text-gray-700">パスワードを表示する</span>
          </label>
        </div>
        <div className="mb-8">
          <LoginButton email={email} password={password} />
        </div>
        <Link href="#" className="text-center text-gray-500">
          パスワードを忘れた方・パスワード変更はこちら
        </Link>
      </div>
    </>
  );
};

export default Login;
