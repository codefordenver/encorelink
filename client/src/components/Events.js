import PropTypes from 'prop-types';
import React from 'react';
import EventRow from './EventRow';

function Events({ data, isMusician }) {
  const events = data.map(event =>
    <EventRow key={event.id} event={event} />
  );

  return (
    <div className="volunteer-view-events">
      <div className="row">
        <div className="small-10">
          <h3>Events</h3>
        </div>
      </div>
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
