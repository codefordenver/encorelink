import { connect } from 'react-redux';
import { createEvent } from '../actions';

import CreateEvent from '../components/CreateEvent';

const mapDispatchToProps = {
  onSubmit: createEvent
};

export default connect(null, mapDispatchToProps)(CreateEvent);
