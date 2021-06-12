import { memo } from 'react';
import './styles.css';

const PokemonInfo = ({ img, name, types }) => {
  return (
    <div className='pokemon-info'>
      <div className='pokemon-info-img-container'>
        <img src={img} alt={name} />
        <p className='pokemon-info-name'>{name}</p>
        <div className='pokemon-info-img-footer'>
          {types.map(type => (
            <span className='badge capitalize' key={type}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className='pokemon-info-data'>
        <h3>Information</h3>
        <h4 className='pokemon-detail '>
          weight: <span>15.2 lbs</span>
        </h4>
        <h4 className='pokemon-detail '>
          height: <span>2'04</span>
        </h4>
        <h4 className='pokemon-detail '>
          Species: <span>Seed</span>{' '}
        </h4>
        <h4 className='pokemon-detail '>
          Egg Groups: <span>Monster and Grass</span>
        </h4>
        <h4 className='pokemon-detail '>
          Abilities: <span> Overgrow, Chlorosphyll</span>
        </h4>
      </div>
    </div>
  );
};

export default memo(PokemonInfo);
