import axios from '../../../api/config';
import { CHANGE_PAGE, FETCH_POKEDEX, FETCH_POKEMON, SET_QUERY, TOGGLE_INPUT } from './types';

const baseUrl = (id, endPoint = 'pokemon') => `${endPoint}/${id}`;
export const changePage = () => ({ type: CHANGE_PAGE });
export const toggleInput = () => ({ type: TOGGLE_INPUT });
export const setQuery = query => ({ type: SET_QUERY, payload: query });

export const fetchPokedex = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      const limit = 25;
      const skip = (page - 1) * limit + 1;
      const promises = [];
      for (let i = skip; i < skip + limit; i++) {
        promises.push(axios(baseUrl(i)));
      }
      const response = await Promise.all(promises);
      dispatch({
        type: FETCH_POKEDEX,
        payload: response.map(({ data: { id, name, sprites } }) => ({ id, name, imgUrl: sprites.front_default })),
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPokemon = gg => {
  return async dispatch => {
    try {
      const {
        data: { id, name, sprites, types, weight, height, abilities, species, ...rest },
      } = await axios(baseUrl(1));

      const {
        data: { egg_groups, evolution_chain },
      } = await axios.get(baseUrl(1, 'pokemon-species'));

      const res = await axios.get(baseUrl(1, 'evolution-chain'));

      console.log(rest);

      dispatch({
        type: FETCH_POKEMON,
        payload: {
          abilities: abilities.map(({ ability: { name } }) => name),
          id,
          name,
          weight,
          height,
          egg_groups: egg_groups.map(({ name }) => name),
          imgUrl: sprites.other.dream_world.front_default,
          types: types.map(({ type: { name } }) => name),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
