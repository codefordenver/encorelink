import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, date, text, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import Event from '../components/Event';

storiesOf('Event', module)
  .addDecorator(withKnobs)
  .add(
    'Event with customizable props',
    withInfo('Check the knobs tab in the panel below to customize the props for this component')(() => {
      const eventData = {
        date: date('data.date', new Date('Jan 1, 1901 4:00 pm MST')),
        endDate: date('data.endDate', new Date('Jan 1, 1901 7:30 pm MST')),
        id: 2,
        location: text('data.location', 'Galvanize, Golden Triangle, Denver'),
        name: text('data.name', 'The best event'),
        notes: text('data.notes', 'These are the notes on the event'),
        owner: {
          email: text('data.email', 'thedude@loves.me'),
          id: 1,
          isMusician: false,
          username: text('data.username', 'The Dude')
        },
        ownerId: 1,
        volunteers: [{
          isMusician: true,
          id: 5
        }]
      };

      return (
        <Event
          data={eventData}
          userId={5}
          isMusician={boolean('is Musician', false)}
          isFetching={boolean('is Fetching', false)}
          isRegistered={boolean('is Registered', false)}
          signUpForEvent={action('sign up for event')}
          cancelSignUpForEvent={action('cancel sign up for event')}
          deleteEvent={action('delete event')}
        />
      );
    })
  );
