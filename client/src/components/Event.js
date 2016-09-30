import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

class Event extends React.Component {
  static propTypes = {
    loadEvent: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }

  static defaultProps = {
    event: {}
  }

  componentWillMount() {
    this.props.loadEvent(this.props.params.id);
  }

  render() {
    return (
      <div className="event">
        <h3>{ this.props.event.name }</h3>
        Date: { this.props.event.date }
      </div>
    );
  }
}

export default withRouter(Event);
