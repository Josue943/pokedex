import axios from '../../../api/config';
import { FETCH_POKEDEX, FETCH_POKEMON, LOAD_MORE_POKEDEX, SELECT_POKEMON, SET_QUERY, TOGGLE_INPUT } from './types';

export const toggleInput = () => ({ type: TOGGLE_INPUT });

export const setQuery = query => ({ type: SET_QUERY, payload: query });

export const selectPokemon = id => ({ type: SELECT_POKEMON, payload: id });

export const fetchPokedex = (more = false) => {
  return async (dispatch, getState) => {
    const page = more ? getState().home.currentPage + 1 : 1;
    const query = getState().home.query;
    try {
      const {
        data: { pokemons, pages },
      } = await axios(`pokemons?page=${page}&query=${query}`);

      if (page === 1 && pokemons[0]) {
        dispatch(selectPokemon(pokemons[0]._id));
      }

      dispatch({
        type: !more ? FETCH_POKEDEX : LOAD_MORE_POKEDEX,
        payload: { pokemons, pages, currentPage: page },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPokemon = id => {
  return async dispatch => {
    try {
      const { data: pokemon } = await axios(`pokemons/${id}`);
      const { data: evolutions } = await axios(`evolution-chains/${pokemon.specie.evolution_chain}`);
      dispatch({
        type: FETCH_POKEMON,
        payload: {
          ...pokemon,
          evolutions,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
