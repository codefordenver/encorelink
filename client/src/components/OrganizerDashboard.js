
import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

class OrganizerDashboard extends React.Component {

  static propTypes = {
    OrganizerDashboard: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
  }

  static defaultProps = {
    events: []
  }

  componentWillMount() {
    this.props.organizerDashboard();
  }

  render() {
    const events = this.props.events.map(event =>
      <div key={event.id}>{ event.name }, { event.date }, { event.notes }</div>
    );
    return (
      <div className="organizerDashboard">
        <h3>Organizer Dashboard</h3>
        { events }
      </div>

      <button>staticchedule Performance</button>

      <div class="panel panel-default">
	  
		  <div class="panel-heading">Pending Request: Approve or Pass</div>

		  <table class="table">
			   <tr>
				   	<th></th>
				   	<td></td>
				   	<td></td>
				   	<td></td>
			   </tr>
		  </table>
	</div>
    );
  }
}

export default withRouter(OrganizerDashboard);
