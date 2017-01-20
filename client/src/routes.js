import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import Landing from './components/Landing';
import CreateEventContainer from './containers/CreateEventContainer';
import EventsContainer from './containers/EventsContainer';
import EventContainer from './containers/EventContainer';
import MusicianContainer from './containers/MusicianContainer';
import Terms from './components/Terms';
import OrganizerProfileContainer from './containers/OrganizerProfileContainer';
import MusicianProfile from './components/MusicianProfile';
import AuthenticatedRoutesContainer from './containers/AuthenticatedRoutesContainer';
import DashboardContainer from './containers/DashboardContainer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/terms" component={Terms} />

    <Route component={AuthenticatedRoutesContainer} >
      <Route path="/createEvent" component={CreateEventContainer} />
      <Route path="/organizerProfile" component={OrganizerProfileContainer} />
      <Route path="/events" component={EventsContainer} />
      <Route path="/event/:id" component={EventContainer} />
      <Route path="/musicianProfile" component={MusicianProfile} />
      <Route path="/dashboard" component={DashboardContainer} />
      <Route path="/musician/:id" component={MusicianContainer} />
    </Route>
  </Route>
);

export default routes;
