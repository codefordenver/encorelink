import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import EventRow from '../components/EventRow';

storiesOf('EventRow', module)
  .addDecorator(withKnobs)
  .add(
    'Event row with customizable props - Check the knobs tab in the panel below to customize the props for this component',
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
