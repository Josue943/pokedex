import React, { memo } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { selectPokemon } from '../../store/entities/home/actions';

const Item = ({ name, _id, sprite, selected, selectPokemon }, ref) => (
  <div className={`item ${selected ? 'item-selected' : ''}`} onClick={() => selectPokemon(_id)} ref={ref}>
    <img className='item-img' src={sprite} alt={name} />
    <span className='item-name'>{name}</span>
    <span className='item-id'>#{_id.toString().padStart(3, '0')}</span>
  </div>
);

const PokedexItem = React.forwardRef(Item);

export default connect(null, { selectPokemon }, null, { forwardRef: true })(memo(PokedexItem));
