import { SET_QUERY, TOGGLE_INPUT } from './types';

export const toggleInput = () => ({ type: TOGGLE_INPUT });
export const setQuery = query => ({ type: SET_QUERY, payload: query });
