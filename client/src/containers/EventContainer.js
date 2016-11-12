import { withRouter } from 'react-router';
import { isLoggedInUserAMusician } from '../reducers/userManager';
import { signUpForEvent } from '../actions/eventActions';
import gimmeData from '../utils/gimmeData';

import Event from '../components/Event';

function urlFn(state, props) {
  const eventId = props.params.id;
  return `events/${eventId}`;
}

function mapStateToProps(state) {
  return {
    isMusician: isLoggedInUserAMusician(state),
  };
}

const mapDispatchToProps = {
  signUpForEvent
};

export default withRouter(gimmeData(urlFn, mapStateToProps, mapDispatchToProps)(Event));
