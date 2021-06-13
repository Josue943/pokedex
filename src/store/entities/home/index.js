import { CHANGE_PAGE, FETCH_POKEDEX, FETCH_POKEMON, SET_QUERY, TOGGLE_INPUT } from './types';

const initialState = {
  inputActive: false,
  page: 1,
  pokedex: [],
  pokemon: null,
  query: '',
  selectedPokemon: 1,
};

const homeReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CHANGE_PAGE:
      return { ...state, page: state.page + 1 };

    case FETCH_POKEDEX:
      return { ...state, pokedex: [...state.pokedex, ...payload] };

    case FETCH_POKEMON:
      return { ...state, pokemon: payload };

    case TOGGLE_INPUT:
      return { ...state, inputActive: !state.inputActive };

    case SET_QUERY:
      return { ...state, query: payload };

    default:
      return state;
  }
};

export default homeReducer;
