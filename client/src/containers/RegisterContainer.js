import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { isLoggedInUserAMusician } from '../reducers/userManager';

import Register from '../components/Register';

const mapStateToProps = (state) => {
  return {
    isError: state.userManager.isError,
    errorMessage: state.userManager.errorMessage,
    isFetching: state.userManager.isFetching,
    isLoggedIn: state.userManager.isLoggedIn,
    isMusician: isLoggedInUserAMusician(state)
  };
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
