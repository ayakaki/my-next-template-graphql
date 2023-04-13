import { PAGE_URLS } from '@/Consts';
import { HeaderMenuItem } from './HeaderMenuItem';
import { HeaderProfileIcon } from './HeaderProfileIcon';

export const HeaderMenuItems: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex items-center">
        <HeaderMenuItem url={PAGE_URLS.TOP} text="TOP" />
        <HeaderMenuItem url={PAGE_URLS.COMPANY} text="会社一覧" />
        <HeaderProfileIcon />
      </div>
    </div>
  );
};
