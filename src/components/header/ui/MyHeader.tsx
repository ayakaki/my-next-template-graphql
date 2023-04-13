import Link from 'next/link';
import React from 'react';
import { PAGE_URLS } from '@/Consts';
import { HeaderMenuItems } from './HeaderMenuItems';

export const MyHeader: React.FC = () => {
  return (
    <div className="w-full border-b-4 border-gray-500 flex justify-between">
      <div></div>
      <HeaderMenuItems />
    </div>
  );
};
