import React, { memo } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { selectPokemon } from '../../store/entities/home/actions';

const Item = ({ name, id, imgUrl, selected, selectPokemon }, ref) => {
  return (
    <div className={`sidebar-item ${selected ? 'item-selected' : ''}`} onClick={() => selectPokemon(id)} ref={ref}>
      <img className='item-img' src={imgUrl} alt={name} />
      <span className='item-name'>{name}</span>
      <span className='item-id'>#{id.toString().padStart(3, '0')}</span>
    </div>
  );
};

const SidebarItem = React.forwardRef(Item);

export default connect(null, { selectPokemon }, null, { forwardRef: true })(memo(SidebarItem));
