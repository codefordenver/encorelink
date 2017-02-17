import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Header from '../src/components/Header';
import '../src/scss/app.scss';

storiesOf('Header', module)
  .add('Not logged in', () => (
    <Header
      isLoggedIn={false}
      isMusician={false}
      logoutUser={action('log out')}
    />
  ))
  .add('Logged in: Musician', () => (
    <Header
      isLoggedIn
      isMusician
      logoutUser={action('log out')}
      user={{ email: 'musican@encorelink.com' }}
    />
  ))
  .add('Logged In: Organizer', () => (
    <Header
      isLoggedIn
      isMusician={false}
      logoutUser={action('log out')}
      user={{ email: 'organizer@encorelink.com' }}
    />
  ));
