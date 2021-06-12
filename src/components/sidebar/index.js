import { memo } from 'react';

import './styles.css';
import SidebarItem from '../sidebarItem';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarItem />
    </div>
  );
};

export default memo(Sidebar);
