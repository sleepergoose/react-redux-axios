import { all } from 'redux-saga/effects';
import { watchCounterSaga } from './counter.saga';
import { watchProductsSaga } from './product.saga';

export default function* rootSaga() {
  yield all([
    watchCounterSaga(),
    watchProductsSaga(),
  ]);
}