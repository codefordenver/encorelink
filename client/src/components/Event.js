import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

class Event extends React.Component {
  static propTypes = {
    loadEvent: PropTypes.func.isRequired,
    event: PropTypes.shape({
      date: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      notes: PropTypes.string.optional
    }),
    isMusician: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
    signUpForEvent: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.loadEvent(this.props.params.id);
  }

  render() {
    const { date, endDate, name, location } = this.props.event || {};
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
            <iframe
              width="600"
              height="350"
              frameBorder="0" style={{ border: 0 }}
              src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyDwAaGJGP92_ZEZUqrzWSpgBm5vXam5Lwg&q=' + encodeURIComponent(location)} allowFullScreen
            />
          </div>
        </div>
        <div className="small-12 columns">
          <h5>Additional Information</h5>
          <p>{ this.props.event.notes }</p>
          <p>
            { this.props.isMusician &&
              <a className="button" onClick={() => this.props.signUpForEvent(this.props.event)}>
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
}

export default Event;
