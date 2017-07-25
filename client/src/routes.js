import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import Landing from './components/Landing';
import CreateEventContainer from './containers/CreateEventContainer';
import EventsContainer from './containers/EventsContainer';
import EventContainer from './containers/EventContainer';
import MusicianContainer from './containers/MusicianContainer';
import OrganizerProfileContainer from './containers/OrganizerProfileContainer';
import MusicianProfileContainer from './containers/MusicianProfileContainer';
import AuthenticatedRoutesContainer from './containers/AuthenticatedRoutesContainer';
import ResetPasswordContainer from './containers/ResetPasswordContainer';
import ForgotPasswordContainer from './containers/ForgotPasswordContainer';
import DashboardContainer from './containers/DashboardContainer';
import AboutContainer from './containers/AboutContainer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/forgotPassword" component={ForgotPasswordContainer} />
    <Route path="/resetPassword" component={ResetPasswordContainer} />
    <Route path="/about" component={AboutContainer} />

    <Route component={AuthenticatedRoutesContainer} >
      <Route path="/createEvent" component={CreateEventContainer} />
      <Route path="/organizerProfile" component={OrganizerProfileContainer} />
      <Route path="/events" component={EventsContainer} />
      <Route path="/event/:id" component={EventContainer} />
      <Route path="/musicianProfile" component={MusicianProfileContainer} />
      <Route path="/dashboard" component={DashboardContainer} />
      <Route path="/musician/:id" component={MusicianContainer} />
    </Route>
  </Route>
);

export default routes;
