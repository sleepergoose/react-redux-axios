import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga.js';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root.reducer.js';
import { getAuthState, saveAuthState } from '../utils/local-storage.utils.js';

const sagaMiddleware = createSagaMiddleware();

const preloadedState = getAuthState();

const store = configureStore({
  preloadedState: preloadedState,
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
  devTools: true,
});

store.subscribe(() => {
  saveAuthState({
    auth: store.getState().auth,
  });
});

sagaMiddleware.run(rootSaga);

export default store;
