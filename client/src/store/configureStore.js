import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import encoreLinkApp from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    encoreLinkApp,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  );
}
