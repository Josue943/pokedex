import { FETCH_POKEDEX, FETCH_POKEMON, LOAD_MORE_POKEDEX, SELECT_POKEMON, SET_QUERY, TOGGLE_INPUT } from './types';

const initialState = {
  inputActive: false,
  currentPage: 1,
  pages: 0,
  pokedex: [],
  pokemon: null,
  query: '',
  selectedPokemon: 1,
};

const homeReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_POKEDEX:
      return { ...state, pokedex: payload.pokemons, pages: payload.pages, currentPage: 1 };

    case LOAD_MORE_POKEDEX:
      return { ...state, pokedex: [...state.pokedex, ...payload.pokemons], currentPage: payload.currentPage };

    case FETCH_POKEMON:
      return { ...state, pokemon: payload };

    case TOGGLE_INPUT:
      return { ...state, inputActive: !state.inputActive };

    case SELECT_POKEMON:
      return { ...state, selectedPokemon: payload };

    case SET_QUERY:
      return { ...state, query: payload };

    default:
      return state;
  }
};

export default homeReducer;
