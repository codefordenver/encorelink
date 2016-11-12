import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loadEvent } from '../actions';
import { isLoggedInUserAMusician } from '../reducers/userManager';
import { signUpForEvent } from '../actions/eventActions';
import { getModels, dbViewIsFetching } from '../reducers/modelManager';

import Event from '../components/Event';

const mapStateToProps = (state, props) => {
  const eventId = props.params.id;
  const eventUrl = `events/${eventId}`;

  return {
    isFetching: dbViewIsFetching(state, eventUrl),
    isMusician: isLoggedInUserAMusician(state),
    event: getModels(state, eventUrl)
  };
};

const mapDispatchToProps = {
  loadEvent,
  signUpForEvent
};

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);

export default withRouter(EventContainer);
