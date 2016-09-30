import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import 'babel-core/register';
import 'babel-polyfill';
import routes from './routes';
import configureStore from './store/configureStore';
import { getLocalData } from './actions/index';
import './scss/app.scss';

const store = configureStore();
store.dispatch(getLocalData());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
