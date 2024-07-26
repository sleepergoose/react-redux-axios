import {
  SET_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  SET_PRODUCTS_ERROR,
} from '../constants';

const initialState = {
  products: {
    products: [],
    count: 0,
  },
  filteredProducts: {
    products: [],
    count: 0,
  },
  error: ''
};

const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_FILTERED_PRODUCTS:
      return { ...state, filteredProducts: payload };
    case SET_PRODUCTS_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default products;