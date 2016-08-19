import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import encoreLinkReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    encoreLinkReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  );
}
