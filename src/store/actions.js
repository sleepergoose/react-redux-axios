import {
  INCREMENT,
  DECREMENT,
  GET_PRODUCTS,
  SET_PRODUCTS,
  CLEAR_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  SET_PRODUCTS_ERORR,
} from './constants';

export const incrementCount = (payload) => ({
  type: INCREMENT,
  payload
});

export const decrementCount = (payload) => ({
  type: DECREMENT,
  payload
});

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload
});

export const setFilteredProducts = (payload) => ({
  type: SET_FILTERED_PRODUCTS,
  payload
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS,
});

export const setProductError = (payload) => ({
  type: SET_PRODUCTS_ERORR,
  payload,
});