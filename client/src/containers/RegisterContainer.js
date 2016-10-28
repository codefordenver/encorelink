import { connect } from 'react-redux';
import { registerRequest } from '../actions';

import Register from '../components/Register';

const mapStateToProps = (state) => {
  return {
    isError: state.userManager.isError,
    errorMessage: state.userManager.errorMessage,
    isFetching: state.userManager.isFetching,
    isLoggedIn: state.userManager.isLoggedIn,
    isMusician: state.userManager.user.isMusician
  };
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
