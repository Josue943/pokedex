import { memo } from 'react';
import './styles.css';

const SidebarItem = ({ name, id, sprites: { front_default }, ...rest }) => {
  return (
    <div className='sidebar-item'>
      <img className='item-img' src={front_default} alt={name} />
      <span className='item-name'>{name}</span>
      <span className='item-id'>#{id.toString().padStart(3, '0')}</span>
    </div>
  );
};

export default memo(SidebarItem);
