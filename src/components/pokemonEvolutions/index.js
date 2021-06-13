import { memo } from 'react';

import './styles.css';

const PokemonEvolutions = ({ evolutions = [] }) => {
  console.log(evolutions);
  return (
    <div className='evolutions'>
      <h3 className='title'>Evolution Chart</h3>
      <div className='evolution-details'>
        {evolutions.map(({ pokemon: { imgUrl, name } }, index) => (
          <div className='evolution-data' key={index}>
            <div className='evolution-detail'>
              <div className='evolution-img'>
                <img src={imgUrl} alt='gg' />
              </div>
              <h6 className='name'>{name}</h6>
            </div>
            {index + 1 !== evolutions.length && <span className='arrow-right'>&#8594;</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(PokemonEvolutions);
