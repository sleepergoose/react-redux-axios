import { all, fork } from 'redux-saga/effects';
import { getProductsWatcher, getFilteredProductsWatcher } from './product.saga';

export default function* rootSaga() {
  yield all([
    fork(getProductsWatcher),
    fork(getFilteredProductsWatcher),
  ]);
}