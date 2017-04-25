import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import EventRow from './EventRow';

function Events({ data, isMusician }) {
  const events = data.map(event =>
  // TODO
    <EventRow key={event.id} event={event} status="APPROVED" />
  );

  return (
    <div className="volunteer-view-events">
      <div className="row">
        <div className="small-10">
          <h3>Events</h3>
        </div>
      </div>
      { !isMusician && (
        <Link to="/createEvent">Create Event</Link>
      ) }
      { events }
    </div>
  );
}

Events.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
  isMusician: PropTypes.bool.isRequired
};

Events.defaultProps = {
  data: []
};

export default Events;
