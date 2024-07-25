import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { GET_PRODUCTS } from '../constants';
import { getProducts, getFilteredProducts } from '../../api/http.service.js';
import { setProducts, setFilteredProducts } from '../actions.js';

function* handleGetProducts() {
  const data = yield call(getProducts, 3);
  yield put(setProducts(data));
}
function* handleGetFilteredProducts() {
  const data = yield call(getFilteredProducts, 'smartphone');
  yield put(setFilteredProducts(data));
}

export function* handleProducts() {
  yield fork(handleGetFilteredProducts);
  yield fork(handleGetProducts);
}

export function* watchProductsSaga() {
  yield takeEvery(GET_PRODUCTS, handleProducts);
}

// put - is an analog of dispatch in redux. It just dispatcher a passed action into it.
// call - blogking stops saga until a Promise returns resolve
// fork - non-blocking