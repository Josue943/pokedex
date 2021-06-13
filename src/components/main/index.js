import { connect } from 'react-redux';
import { memo } from 'react';

import './styles.css';
import PokemonInfo from '../pokemonInfo';
import PokemonEvolutions from '../pokemonEvolutions';
import SearchBox from '../searchBox';

const Main = ({ pokemon }) => {
  if (!pokemon) return null;
  const { name, types, imgUrl, weight, height, abilities, egg_groups } = pokemon;

  return (
    <div className='main-content'>
      <SearchBox />
      <PokemonInfo egg_groups={egg_groups} abilities={abilities} name={name} types={types} imgUrl={imgUrl} weight={weight} height={height} />
      <PokemonEvolutions imgUrl={imgUrl} />
    </div>
  );
};

const mapStateToProps = ({ home: { pokemon } }) => ({ pokemon });

export default connect(mapStateToProps)(memo(Main));
