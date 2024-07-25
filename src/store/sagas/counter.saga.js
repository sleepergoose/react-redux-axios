import { takeEvery } from 'redux-saga/effects';
import { INCREMENT } from '../constants';

export function* workerCounterSaga() {
  // describes requests logic, work with browser API, any async actions
  yield console.log('Counter Increased');
}

export function* watchCounterSaga() {
  // wather watches after actions, which fire in app
  yield takeEvery(INCREMENT, workerCounterSaga)
}