import { connect } from 'react-redux';
import { memo, useEffect } from 'react';

import './styles.css';
import { getPokemon } from '../../store/entities/home/actions';
import PokemonInfo from '../pokemonInfo';
import PokemonEvolutions from '../pokemonEvolutions';
import SearchBox from '../searchBox';

const Main = ({ getPokemon, pokemon, selectedPokemon }) => {
  useEffect(() => {
    getPokemon(selectedPokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPokemon]);

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

const mapStateToProps = ({ home: { pokemon, selectedPokemon } }) => ({ pokemon, selectedPokemon });

export default connect(mapStateToProps, { getPokemon })(memo(Main));
