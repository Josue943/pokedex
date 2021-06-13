import { memo } from 'react';
import './styles.css';

const PokemonInfo = ({ imgUrl, name, types, weight, height, abilities, egg_groups }) => {
  return (
    <div className='pokemon-info'>
      <div className='pokemon-info-img-container'>
        <img src={imgUrl} alt={name} />
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
          weight: <span>{weight} lbs</span>
        </h4>
        <h4 className='pokemon-detail '>
          height: <span>{height}</span>
        </h4>
        <h4 className='pokemon-detail '>
          Species: <span>Seed</span>
        </h4>
        <h4 className='pokemon-detail '>
          Egg Groups:
          {egg_groups.map((group, index) => (
            <span key={group}>
              {index ? ' and' : ''} {group}
            </span>
          ))}
          .
        </h4>
        <h4 className='pokemon-detail '>
          Abilities:
          {abilities.map((ability, index) => (
            <span key={ability}>
              {index ? ',' : ''} {ability}
            </span>
          ))}
          .
        </h4>
      </div>
    </div>
  );
};

export default memo(PokemonInfo);
