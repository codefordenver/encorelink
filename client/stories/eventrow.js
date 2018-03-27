import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, boolean, date, text } from '@kadira/storybook-addon-knobs';
import EventRow from '../src/components/EventRow';

storiesOf('EventRow', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Event row with customizable props',
    'Check the knobs tab in the panel below to customize the props for this component',
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
