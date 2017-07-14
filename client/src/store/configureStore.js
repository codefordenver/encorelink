import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import promiseMiddleware from './promiseMiddleware';
import errorMiddleware from './errorMiddleware';
import purgeStoreOnLogout from './purgeStoreOnLogout';

import encoreLinkReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware,
    errorMiddleware,
    purgeStoreOnLogout
  ];

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger'); // eslint-disable-line
    const logger = createLogger({
      collapsed: true,
      duration: true,
      timestamp: true
    });
    middlewares.push(logger);
  }

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const storeEnhancers = composeEnhancers(
    applyMiddleware(
      ...middlewares
    ),
    autoRehydrate()
  );
  return createStore(
    encoreLinkReducer,
    initialState,
    storeEnhancers
  );
}
