import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Props = {
  url: string;
  text: string;
};

export const HeaderMenuItem: React.FC<Props> = (props: Props) => {
  // このヘッダメニューが現在のページであるか
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);

  const router: NextRouter = useRouter();

  useEffect(() => {
    if (router.asPath === props.url) {
      setIsCurrentPage(true);
    }
  }, [router.isReady]);

  return (
    <Link
      href={props.url}
      className={
        isCurrentPage
          ? 'items-center pl-5 pr-5 text-teal-500 font-bold'
          : 'items-center pl-5 pr-5 text-gray-500 font-bold'
      }
    >
      {props.text}
    </Link>
  );
};
