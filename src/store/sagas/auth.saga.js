import { call, put, takeLatest } from 'redux-saga/effects';
import { getAuthAction, setAuthErrorActions, setAuthSuccessAction } from '../slices/auth.slice';
import { getAuthMock } from '../../api/http.service';

export function* getAuthWorker() {
  try {
    const data = yield call(getAuthMock);
    yield put(setAuthSuccessAction(data));
    yield
  } catch (error) {
    yield put(setAuthErrorActions, error);
  }
}

export function* getAuthWatcher() {
  yield takeLatest(getAuthAction, getAuthWorker);
}