import React, { PropTypes } from 'react';
import { CURRENT } from '../constants/modelStatus';

function ViewMusician({ data, urlStatus }) {
  if (!urlStatus || urlStatus !== CURRENT) {
    return <p> Loading ... </p>;
  }

  return (
    <div className="row">
      <div className="small-12 columns">
        <h3>{data.username}</h3>
        <h5>Bio</h5>
        <p>{data.bio}</p>
        <h5>Instruments</h5>
        { data.instruments && data.instruments.length &&
          <ul>
            {data.instruments.map((instrument, index) =>
              <li key={index}>{instrument}</li>
            )}
          </ul>
        }
      </div>
    </div>
  );
}

ViewMusician.propTypes = {
  data: PropTypes.shape({
    bio: PropTypes.string.isRequired,
    instruments: PropTypes.array.isRequired,
  }),
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  urlStatus: PropTypes.string.isRequired
};

export default ViewMusician;
