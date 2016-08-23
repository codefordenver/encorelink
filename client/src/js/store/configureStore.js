import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';

import encoreLinkReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  return createStore(
    encoreLinkReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware
    )
  );
}
