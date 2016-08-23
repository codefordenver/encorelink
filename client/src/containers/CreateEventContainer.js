import { connect } from 'react-redux';
import { createEvent } from '../actions';

import CreateEvent from '../components/CreateEvent';

const mapStateToProps = () => {
  return {
  //   isError: state.eventManager.isError,
  //   errorMessage: state.eventManager.errorMessage,
  //   isFetching: state.eventManager.isFetching,
  //   isLoggedIn: state.eventManager.isLoggedIn
  };
};

const mapDispatchToProps = {
  createEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
