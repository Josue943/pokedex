import { memo } from 'react';

import './styles.css';

const PokemonEvolutions = ({ imgUrl }) => {
  return (
    <div className='evolutions'>
      <h3 className='title'>Evolution Chart</h3>
      <div className='evolution-details'>
        <div className='evolution-detail'>
          <div className='evolution-img'>
            <img src={imgUrl} alt='gg' />
          </div>
          <h6 className='name'>Bulbasaur</h6>
        </div>
        <span className='arrow-right'>&#8594;</span>
        <div className='evolution-detail'>
          <div className='evolution-img'>
            <img src={imgUrl} alt='gg' />
          </div>
          <h6 className='name'>Bulbasaur</h6>
        </div>
        <span className='arrow-right'>&#8594;</span>
        <div className='evolution-detail'>
          <div className='evolution-img'>
            <img src={imgUrl} alt='gg' />
          </div>
          <h6 className='name'>Bulbasaur</h6>
        </div>
      </div>
    </div>
  );
};

export default memo(PokemonEvolutions);
