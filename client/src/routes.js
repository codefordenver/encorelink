import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import Landing from './components/Landing';
import ViewContainer from './containers/ViewContainer';
import CreateEventContainer from './containers/CreateEventContainer';
import VolunteerViewEvents from './containers/VolunteerViewEventsContainer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/createEvent" component={CreateEventContainer} />
    <Route path="/volunteerViewEvents" component={VolunteerViewEvents} />
    <Route path="/home" component={ViewContainer}>
      <div>Coming soon...</div>
    </Route>
  </Route>
);

export default routes;
