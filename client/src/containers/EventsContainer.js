import { connect } from 'react-redux';
import { loadEvents } from '../actions';

import Events from
'../components/Events';

const mapStateToProps = (state) => {
  return {
    isFetching: state.eventManager.isFetching,
    events: state.eventManager.events,
    isLoggedIn: state.userManager.isLoggedIn
  };
};

const mapDispatchToProps = {
  loadEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
