import { combineReducers } from 'redux';
import products from './products.reducer';

const reducers = {
  products: products,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;