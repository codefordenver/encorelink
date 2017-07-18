import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import { getFormattedDayAndTime } from '../utils/dateFormatting';
import GoogleMapEmbeded from './GoogleMapEmbeded';
import EventMusiciansContainer from '../containers/EventMusiciansContainer';

function Event({
  data,
  signUpForEvent,
  cancelSignUpForEvent,
  isMusician,
  isFetching,
  isRegistered,
  userId,
  deleteEvent
}) {
  const { date, endDate, name, location, notes } = data || {};
  const { day, time } = getFormattedDayAndTime(date, endDate);
  const isOwner = data && (data.ownerId === userId);

  const displayMusicianOptions = () => {
    if (!isMusician) {
      return undefined;
    }

    if (isRegistered) {
      return (
        <button
          className="button secondary"
          onClick={() => cancelSignUpForEvent(data)}
        >
          Cancel Sign Up
        </button>
      );
    }

    return (
      <button
        className="button"
        onClick={() => signUpForEvent(data)}
      >
        Sign Up
      </button>
    );
  };

  if (isFetching) {
    return <p> Loading ... </p>;
  }

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
      </div>
      { isOwner &&
      <div className="small-12 columns">
        <h4>Performance Requests</h4>
      </div>
      }
      { isOwner &&
      <div className="small-12 columns">
        <EventMusiciansContainer eventId={data.id} />
      </div>
      }
      <div className="small-12 columns">
        <p>
          {isOwner && (
            <button
              className="button alert"
              onClick={() => deleteEvent(data)}
            >
              Delete Event
            </button>
          )}
          {displayMusicianOptions()}
          {' '}
          { (!isOwner && data && data.owner && data.owner.email) &&
            <a
              className="button secondary"
              href={`mailto:${data.owner.email}`}
            >
              Contact Organizer
            </a>
          }
          {' '}
          <Link to={isMusician ? '/events' : '/dashboard'} className="button secondary">Go Back</Link>
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
    notes: PropTypes.string.isOptional,
    owner: PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isMusician: PropTypes.bool.isRequired,
      username: PropTypes.string.isRequired
    }),
    ownerId: PropTypes.number.isRequired,
    volunteers: PropTypes.arrayOf(PropTypes.shape({
      isMusician: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired
  }),
  userId: PropTypes.number.isRequired,
  isMusician: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  signUpForEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  cancelSignUpForEvent: PropTypes.func.isRequired
};

export default Event;
