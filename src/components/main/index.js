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

  const { evolutions, ...rest } = pokemon;

  return (
    <div className='main-content'>
      <SearchBox />
      <PokemonInfo {...rest} />
      <PokemonEvolutions evolutions={evolutions.chain} />
    </div>
  );
};

const mapStateToProps = ({ home: { pokemon, selectedPokemon } }) => ({ pokemon, selectedPokemon });

export default connect(mapStateToProps, { getPokemon })(memo(Main));
