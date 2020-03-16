import { ADD_FAVORITE, REMOVE_FAVORITE } from './types';

export const addFavorite = (product) => ({ type: ADD_FAVORITE, product });
export const removeFavorite = (id) => ({ type: REMOVE_FAVORITE, id });
