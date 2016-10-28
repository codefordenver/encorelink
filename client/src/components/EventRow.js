import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class EventRow extends React.Component {
  static propTypes = {
    event: PropTypes.shape({
      date: PropTypes.string.isRequired,
      endDate: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    return (
      <div className="row">
        <div className="small-2 columns">
          {moment(this.props.event.date).format('MMM ddd D')}
        </div>
        <div className="small-3 columns">
          {moment(this.props.event.date).format('hh:mm a')}-{moment(this.props.event.endDate).format('hh:mm a')}
        </div>
        <div className="small-5 columns">
          {this.props.event.name} {this.props.event.location}
        </div>
        <div className="small-2 columns">
          <Link to="">details</Link>
        </div>
      </div>
    );
  }
}

export default EventRow;
