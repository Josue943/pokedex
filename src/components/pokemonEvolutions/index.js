import { memo } from 'react';

import './styles.css';

const PokemonEvolutions = ({ evolutions }) => {
  return (
    <div className='pokemon-evolutions'>
      <h3>Evolution Chart</h3>
    </div>
  );
};

export default memo(PokemonEvolutions);
