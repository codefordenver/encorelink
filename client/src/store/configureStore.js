import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';

import encoreLinkReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware
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

  return createStore(
    encoreLinkReducer,
    initialState,
    applyMiddleware(
      ...middlewares
    )
  );
}
