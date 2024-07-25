import { createStore, compose } from 'redux';
import rootReducer from './root.reducer.js';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import rootSaga from './sagas/rootSaga.js';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;