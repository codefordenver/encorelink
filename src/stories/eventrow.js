import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, date, text } from '@storybook/addon-knobs/react';
import EventRow from '../components/EventRow';

storiesOf('EventRow', module)
  .addDecorator(withKnobs)
  .add(
    'Event row with customizable props - Check the knobs tab in the panel below to customize the props for this component',
    () => (
      <EventRow
        hideCalendar={boolean('hide calendar', false)}
        event={{
          date: date('data.date', new Date('Jan 1, 2018 12:00 am GMT')),
          endDate: date('data.endDate', new Date('Jan 1, 1901 12:00 am GMT')),
          id: 5,
          location: text('data.location', 'denver'),
          name: text('data.name', 'music') }}
      />
    )
  );
