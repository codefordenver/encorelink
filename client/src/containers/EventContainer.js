import { connect } from 'react-redux';
import { loadEvent } from '../actions';

import Event from '../components/Event';

const mapStateToProps = (state) => {
  return {
    isFetching: state.eventManager.isFetching,
    event: state.eventManager.event
  };
};

const mapDispatchToProps = {
  loadEvent
};

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);

export default EventContainer;
