import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getFormattedDayAndTime } from '../utils/dateFormatting';
import GoogleMapEmbeded from './GoogleMapEmbeded';

function Event({ data, signUpForEvent, isMusician }) {
  const { date, endDate, name, location, notes } = data || {};
  const { day, time } = getFormattedDayAndTime(date, endDate);
  return (
    <div className="row">
      <div className="small-12 columns">
        <h3>{ name }</h3>
        <h4>{ day } | { time }</h4>
        <p>{ location }</p>
      </div>
      <div className="small-12 medium-8 large-6 columns">
        <div className="flex-video">
          <GoogleMapEmbeded query={location} />
        </div>
      </div>
      <div className="small-12 columns">
        { notes &&
          <div>
            <h5>Additional Information</h5>
            <p>{ notes }</p>
          </div>
        }
        <p>
          { isMusician &&
            <a className="button" onClick={() => signUpForEvent(data)}>
              Sign Up
            </a>
          }
          {' '}
          <Link to="/events" className="button secondary">Go Back</Link>
        </p>
      </div>
    </div>
  );
}

Event.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired
  }),
  isMusician: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  signUpForEvent: PropTypes.func.isRequired
};

export default Event;
