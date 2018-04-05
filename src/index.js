import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { persistStore } from 'redux-persist';
import routes from './routes';
import configureStore from './store/configureStore';
import { allowApiToAccessState } from './utils/apiHelpers';
import { allowPersistenceToBePurgedOnLogout } from './store/purgeStoreOnLogout';
import { checkIfLoginIsValid } from './actions/userActions';
import './scss/app.css';

if (!process.env.REACT_APP_API_ENDPOINT) {
  let error = 'REACT_APP_API_ENDPOINT not defined';
  if (process.env.NODE_ENV === 'development') {
    error += ' make sure you set up the .env file properly';
  }
  throw new Error(error);
}

const store = configureStore();
allowApiToAccessState(store);

function afterPersistenceRestore() {
  store.dispatch(checkIfLoginIsValid());
}

// persists the redux store to localStorage, and rehydrates
// on reload
const { purge } = persistStore(store, {
  debounce: 100,
  whitelist: ['authData']
}, afterPersistenceRestore);

allowPersistenceToBePurgedOnLogout(purge);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
