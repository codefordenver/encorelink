import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import Login from '../components/Login';

const mapStateToProps = (state) => {
  return {
    isError: state.userManager.isError,
    errorMessage: state.userManager.errorMessage,
    isFetching: state.userManager.isFetching,
    isLoggedIn: state.userManager.isLoggedIn
  };
};

const mapDispatchToProps = {
  onSubmit: loginRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
