import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Header from '../components/Header';

storiesOf('Header', module)
  .add(
    'Not logged in',
    withInfo('Default landing page, not logged in props')(() => (
      <Header
        isLoggedIn={false}
        isMusician={false}
        logoutUser={action('log out')}
      />
    ))
  )
  .add('Logged in: Musician', withInfo('test')(() => (
    <Header
      isLoggedIn
      isMusician
      logoutUser={action('log out')}
      user={{ email: 'musician@encorelink.com' }}
    />
  )))
  .add('Logged In: Organizer', withInfo()(() => (
    <Header
      isLoggedIn
      isMusician={false}
      logoutUser={action('log out')}
      user={{ email: 'organizer@encorelink.com' }}
    />
  )));
