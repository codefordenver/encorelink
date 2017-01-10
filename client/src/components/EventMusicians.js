import React, { PropTypes } from 'react';
import { CURRENT } from '../constants/modelStatus';
import { PENDING, CANCELLED } from '../constants/eventAttendingStatus';

function EventMusicians({ data, approveEventMusician, rejectEventMusician, urlStatus }) {
  if (!urlStatus || urlStatus !== CURRENT) {
    return <p> Loading ... </p>;
  }

  return (
    <div className="row">
      { data && data.length &&
        <div className="small-12 columns">
          {data.filter((em) => (em).status !== CANCELLED).map((eventMusician, index) =>
            <div key={index} className="row">
              <div className="small-6 columns">{eventMusician.volunteer.email}</div>
              {eventMusician.status === PENDING &&
                <div className="small-6 columns">
                  <a href={`mailto:${eventMusician.volunteer.email}`}
                    className="button secondary"
                  >
                    Contact
                  </a>
                  <button onClick={() => approveEventMusician(eventMusician)} className="button success">Approve</button>
                  <button onClick={() => rejectEventMusician(eventMusician)} className="button alert">Pass</button>
                </div>
              }
            </div>
          )}
        </div>
      }
    </div>
  );
}

EventMusicians.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    eventId: PropTypes.number.isRequired,
    volunteerId: PropTypes.number.isRequired
  })).isRequired,
  approveEventMusician: PropTypes.func.isRequired,
  rejectEventMusician: PropTypes.func.isRequired,
  urlStatus: PropTypes.string.isRequired
};

export default EventMusicians;
