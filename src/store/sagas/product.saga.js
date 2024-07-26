import { call, put, takeLatest } from 'redux-saga/effects';
import { getFilteredProductsApi, getProductsApi } from '../../api/http.service.js';
import { getFilteredProductsAction, setFilteredProductsErrorActions, setFilteredProductsSuccessAction, setProductsErrorActions, setProductsSuccessAction } from '../slices/products.slice.js';
// import { setFilteredProducts, setProducts } from '../actions'

function* getProductsWorker() {
  try {
    const data = yield call(getProductsApi, 3);
    yield put(setProductsSuccessAction(data));
  } catch (error) {
    yield put(setProductsErrorActions(error));
  }
}

export function* getProductsWatcher() {
  yield takeLatest('products/getProducts', getProductsWorker);
}

function* getFilteredProductsWorker() {
  try {
    const data = yield call(getFilteredProductsApi, 'powerbank');
    yield put(setFilteredProductsSuccessAction(data));
  } catch (error) {
    yield put(setFilteredProductsErrorActions(error?.payload?.message));
  }
}

export function* getFilteredProductsWatcher() {
  yield takeLatest(getFilteredProductsAction, getFilteredProductsWorker);
}

// watcher
// worker
// put - is an analog of dispatch in redux. It just dispatcher a passed action into it.
// call - blogking stops saga until a Promise returns resolve
// fork - non-blocking
// spawn - creates a concurrent task in the root of saga and its execution is not tied to the parent saga