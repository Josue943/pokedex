import { SET_QUERY, TOGGLE_INPUT } from './types';

const initialState = {
  inputActive: false,
  query: '',
  page: 1,
  pokemons: [],
  pokemon: null,
};

const homeReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case TOGGLE_INPUT:
      return { ...state, inputActive: !state.inputActive };

    case SET_QUERY:
      console.log(payload);
      return { ...state, query: payload };

    default:
      return state;
  }
};

export default homeReducer;
