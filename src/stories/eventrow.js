import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, date, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import EventRow from '../components/EventRow';

storiesOf('EventRow', module)
  .addDecorator(withKnobs)
  .add(
    'Event row with customizable props',
    withInfo('Check the knobs tab in the panel below to customize the props for this component')(() => (
      <EventRow
        hideCalendar={boolean('hide calendar', false)}
        event={{
          date: date('data.date', new Date('Jan 1, 2018 7:00 pm MST')),
          endDate: date('data.endDate', new Date('Jan 1, 2018 9:00 pm MST')),
          id: 5,
          location: text('data.location', 'denver'),
          name: text('data.name', 'music')
        }}
      />
    ))
  );
