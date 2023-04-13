import { MyHeader } from '@/components/header/ui/MyHeader';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <MyHeader />
      <main>{props.children}</main>
    </div>
  );
};
