import React, { memo } from 'react';
import './styles.css';

const Item = ({ name, id, imgUrl, selected }, ref) => {
  return (
    <div className={`sidebar-item ${selected ? 'item-selected' : ''}`} ref={ref}>
      <img className='item-img' src={imgUrl} alt={name} />
      <span className='item-name'>{name}</span>
      <span className='item-id'>#{id.toString().padStart(3, '0')}</span>
    </div>
  );
};

const SidebarItem = React.forwardRef(Item);

export default memo(SidebarItem);
