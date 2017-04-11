import { connect } from 'react-redux';
import { registerRequest } from '../actions/userActions';
import { userIsBeingFetched } from '../reducers/userReducer';

import Register from '../components/Register';

const mapStateToProps = (state) => {
  return {
    isFetching: userIsBeingFetched(state)
  };
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
