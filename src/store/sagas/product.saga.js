import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_PRODUCTS,
  GET_FILTERED_PRODUCTS,
  SET_PRODUCTS_ERROR
} from '../constants';
import { getFilteredProductsApi, getProductsApi } from '../../api/http.service.js';
import { setFilteredProducts, setProducts } from '../actions'

function* getProductsWorker() {
  try {
    const data = yield call(getProductsApi, 3);
    yield put(setProducts(data));
  } catch (error) {
    yield put({ type: SET_PRODUCTS_ERROR, payload: error?.message || error });
  }
}

export function* getProductsWatcher() {
  yield takeEvery(GET_PRODUCTS, getProductsWorker);
}

function* getFilteredProductsWorker() {
  try {
    const data = yield call(getFilteredProductsApi, 'smartphone');
    yield put(setFilteredProducts(data));
  } catch (error) {
    yield put({ type: SET_PRODUCTS_ERROR, payload: error?.message || error });
  }
}

export function* getFilteredProductsWatcher() {
  yield takeEvery(GET_FILTERED_PRODUCTS, getFilteredProductsWorker);
}

// watcher
// worker
// put - is an analog of dispatch in redux. It just dispatcher a passed action into it.
// call - blogking stops saga until a Promise returns resolve
// fork - non-blocking
// spawn - creates a concurrent task in the root of saga and its execution is not tied to the parent saga