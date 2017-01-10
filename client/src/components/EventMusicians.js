import React, { PropTypes } from 'react';
import { CURRENT } from '../constants/modelStatus';

function EventMusicians({ data, urlStatus }) {
  if (!urlStatus || urlStatus !== CURRENT) {
    return <p> Loading ... </p>;
  }

  return (
    <div className="row">
      { data && data.length &&
        <div className="small-12 columns">
          {data.map((eventMusician, index) =>
            <div key={index} className="row">
              <div className="small-6 columns">{eventMusician.volunteer.email}</div>
              {eventMusician.status === 'PENDING' &&
                <div className="small-6 columns">
                  <a href={`mailto:${eventMusician.volunteer.email}`}
                    className="button secondary"
                  >
                    Contact
                  </a>
                  <a href className="button success">Approve</a>
                  <a href className="button alert">Pass</a>
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
  urlStatus: PropTypes.string.isRequired
};

export default EventMusicians;
