import { connect } from 'react-redux';
import { createEvent } from '../actions';

import CreateEvent from '../components/CreateEvent';

const mapStateToProps = () => {
  return {
  };
};

const mapDispatchToProps = {
  createEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
