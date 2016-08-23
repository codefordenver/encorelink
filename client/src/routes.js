import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import ViewContainer from './containers/ViewContainer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={RegisterContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/home" component={ViewContainer}>
      <div>Coming soon...</div>
    </Route>
  </Route>
);

export default routes;
