import { combineReducers } from 'redux';
import counter from './counter.reducer';
import products from './products.reducer';

const reducers = {
  counter: counter,
  products: products,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;