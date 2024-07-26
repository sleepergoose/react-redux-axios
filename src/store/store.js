import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga.js';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root.reducer.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
