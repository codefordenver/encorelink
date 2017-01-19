import 'babel-core/register';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { persistStore } from 'redux-persist';
import ApolloClient from 'apollo-client'; // eslint-disable-line import/no-named-as-default
import { ApolloProvider } from 'react-apollo';

import routes from './routes';
import configureStore from './store/configureStore';
import { allowApiToAccessState } from './utils/apiHelpers';
import { allowPersistenceToBePurgedOnLogout } from './store/purgeStoreOnLogout';
import { checkIfLoginIsValid } from './actions/userActions';
import './scss/app.scss';

// Create the client as outlined above
const client = new ApolloClient();

const store = configureStore();
allowApiToAccessState(store);

function afterPersistenceRestore() {
  store.dispatch(checkIfLoginIsValid());
}

// persists the redux store to localStorage, and rehydrates
// on reload
const { purge } = persistStore(store, {
  debounce: 100
}, afterPersistenceRestore);

allowPersistenceToBePurgedOnLogout(purge);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
