import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import LandingContainer from './containers/LandingContainer';
import CreateEventContainer from './containers/CreateEventContainer';
import EventsContainer from './containers/EventsContainer';
import EventContainer from './containers/EventContainer';
import Terms from './components/Terms';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingContainer} />
    <Route path="/login" component={LoginContainer} />

    <Route path="/createEvent" component={CreateEventContainer} />
    <Route path="/events" component={EventsContainer} />
    <Route path="/event/:id" component={EventContainer} />

    <Route path="/terms" component={Terms} />
  </Route>
);

export default routes;
