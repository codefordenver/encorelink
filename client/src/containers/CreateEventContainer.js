import { connect } from 'react-redux';
import { createEvent } from '../actions/eventActions';

import CreateEvent from '../components/CreateEvent';

const mapDispatchToProps = {
  onSubmit: createEvent
};

export default connect(null, mapDispatchToProps)(CreateEvent);
