import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import ViewContainer from './containers/ViewContainer';
import FoodList from './components/FoodList';
import UserMealsListContainer from './containers/UserMealsListContainer';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path='/home' component={ViewContainer}>
      <IndexRoute component={UserMealsListContainer} />
      <Route path='/foodlist' component={FoodList} />
    </Route>
  </Route>
);

export default routes;
