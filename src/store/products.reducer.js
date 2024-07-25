import {
  SET_PRODUCTS,
  CLEAR_PRODUCTS,
  SET_FILTERED_PRODUCTS,
} from './constants';

const initialState = {
  products: {
    products: [],
    count: 0,
  },
  filteredProducts: {
    products: [],
    count: 0,
  },
};

const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: payload,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: {
          products: [],
          count: 0,
        },
        filteredProducts: {
          products: [],
          count: 0,
        },
      };
    default:
      return state;
  }
};

export default products;