import React, { PropTypes } from 'react';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

class Event extends React.Component {
  static propTypes = {
    loadEvent: PropTypes.func.isRequired,
    event: PropTypes.shape({
      date: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
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
      <div className="event">
        <h3>{ name }</h3>
        <h4>{ day } | { time }</h4>
        { location }
        { this.props.isMusician &&
          <button className="button" onClick={() => this.props.signUpForEvent(this.props.event)}>
            Sign Up
          </button> }
      </div>
    );
  }
}

export default Event;
