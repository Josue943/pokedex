import { memo } from 'react';

import './styles.css';
import PokemonInfo from '../pokemonInfo';
import PokemonEvolutions from '../pokemonEvolutions';
import SearchBox from '../searchBox';

const Main = ({
  name,
  id,
  sprites: {
    other: {
      dream_world: { front_default },
    },
  },
  types,
  ...rest
}) => {
  console.log(rest);
  return (
    <div className='main-content'>
      <SearchBox />
      <PokemonInfo img={front_default} name={name} types={types.map(type => type.type.name)} />
      <PokemonEvolutions />
    </div>
  );
};

export default memo(Main);
