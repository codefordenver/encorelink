import React, { PropTypes } from 'react';
import EventRow from './EventRow';

function EventsAttending({ events, loading }) {
  if (loading) {
    return <span>loading...</span>;
  }

  const eventCmps = events.map(event =>
    <EventRow key={event.id} event={event} />
  );

  return (
    <div className="volunteer-view-events">
      <h3>Events Attending</h3>
      { eventCmps }
    </div>
  );
}

EventsAttending.propTypes = {
  loading: PropTypes.bool.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }))
};

export default EventsAttending;
