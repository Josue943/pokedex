import { memo } from 'react';

import './styles.css';
import SidebarItem from '../sidebarItem';

const Sidebar = ({ pokemon }) => {
  return (
    <div className='sidebar'>
      {[...Array(50)].map((e, i) => (
        <SidebarItem key={i} {...pokemon} />
      ))}
    </div>
  );
};

export default memo(Sidebar);
