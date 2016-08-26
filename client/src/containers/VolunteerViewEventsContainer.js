import { connect } from 'react-redux';
import { volunteerViewEvents } from '../actions';

import VolunteerViewEvents from
'../components/VolunteerViewEvents';

const mapStateToProps = (state) => {
  return {
    isFetching: state.eventManager.isFetching,
    events: state.eventManager.events
  };
};

const mapDispatchToProps = {
  volunteerViewEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerViewEvents);
