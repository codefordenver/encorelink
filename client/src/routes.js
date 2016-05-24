import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';



const routes = (
  <Route path='/client' component={App}>
    <IndexRoute component={LoginContainer} />
  </Route>
);

export default routes;
