import PropTypes from 'prop-types';
import React from 'react';
import { CURRENT } from '../constants/modelStatus';
import { PENDING, CANCELLED, REJECTED } from '../constants/eventAttendingStatus';

function EventMusicians({ data, approveEventMusician, rejectEventMusician, urlStatus }) {
  if (!urlStatus || urlStatus !== CURRENT) {
    return <p> Loading ... </p>;
  }

  return (
    <div className="row">
      { data && data.length > 0 &&
        <div className="small-12 columns">
          {data
            .filter((em) => em.status !== CANCELLED && em.status !== REJECTED)
            .map((eventMusician, index) =>
              <div key={eventMusician.id} className="row">
                <div className="small-6 columns">{eventMusician.volunteer.email}</div>
                {eventMusician.status === PENDING &&
                <div className="small-6 columns">
                  <ul className="button-group">
                    <a
                      className="button secondary"
                      href={`mailto:${eventMusician.volunteer.email}`}
                    >
                      Contact
                    </a>
                    <button
                      className="button success"
                      onClick={() => approveEventMusician(eventMusician)}
                    >
                      Approve
                    </button>
                    <button
                      className="button alert"
                      onClick={() => rejectEventMusician(eventMusician)}
                    >
                      Pass
                    </button>
                  </ul>
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
