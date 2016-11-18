import { withRouter } from 'react-router';
import { isMusician } from '../reducers/userReducer';
import { signUpForEvent } from '../actions/eventActions';
import gimmeData from '../utils/gimmeData';

import Event from '../components/Event';

function urlFn(state, props) {
  const eventId = props.params.id;
  return `events/${eventId}`;
}

function mapStateToProps(state) {
  return {
    isMusician: isMusician(state),
  };
}

const mapDispatchToProps = {
  signUpForEvent
};

export default withRouter(gimmeData(urlFn, mapStateToProps, mapDispatchToProps)(Event));
