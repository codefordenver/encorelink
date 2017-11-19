import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';
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
          date: '2018-01-01',
          endDate: '2018-01-02',
          id: 5,
          location: 'denver',
          name: 'music' }}
      />
    )
  );
