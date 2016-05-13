import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/Login';



const routes = (
  <Route path='/client' component={App}>
    <IndexRoute component={Login} />
  </Route>
);

export default routes;
