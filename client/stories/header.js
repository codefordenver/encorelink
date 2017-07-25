import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Header from '../src/components/Header';

storiesOf('Header', module)
  .addWithInfo(
    'Not logged in',
    'Default landing page, not logged in props',
    () => (
      <Header
        isLoggedIn={false}
        isMusician={false}
        logoutUser={action('log out')}
      />
    )
  )
  .addWithInfo('Logged in: Musician', () => (
    <Header
      isLoggedIn
      isMusician
      logoutUser={action('log out')}
      user={{ email: 'musician@encorelink.com' }}
    />
  ))
  .addWithInfo('Logged In: Organizer', () => (
    <Header
      isLoggedIn
      isMusician={false}
      logoutUser={action('log out')}
      user={{ email: 'organizer@encorelink.com' }}
    />
  ));
