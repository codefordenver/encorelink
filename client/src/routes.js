import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import ViewContainer from './containers/ViewContainer';
import FoodList from './components/FoodList';

const routes = (
  <Route path='/client' component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path='/client/home' component={ViewContainer}>
      <Route path='/client/foodlist' component={FoodList} />
    </Route>
  </Route>
);

export default routes;
