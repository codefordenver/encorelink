import { connect } from 'react-redux';
import { registerRequest } from '../actions/userActions';
import { isMusician, userIsBeingFetched, isLoggedIn } from '../reducers/userReducer';

import Register from '../components/Register';

const mapStateToProps = (state) => {
  return {
    isFetching: userIsBeingFetched(state),
    isLoggedIn: isLoggedIn(state),
    isMusician: isMusician(state)
  };
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
