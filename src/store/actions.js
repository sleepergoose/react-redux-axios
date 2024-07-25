import {
  GET_PRODUCTS,
  SET_PRODUCTS,
  GET_FILTERED_PRODUCTS,
  SET_FILTERED_PRODUCTS
} from './constants';

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload
});

export const getFilteredProducts = () => ({
  type: GET_FILTERED_PRODUCTS,
});

export const setFilteredProducts = (payload) => ({
  type: SET_FILTERED_PRODUCTS,
  payload
});
