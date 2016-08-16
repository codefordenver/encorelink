import React from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';

import Register from '../components/Register';

const mapStateToProps = (state) => {
  return {
    isError: state.userManager.isError,
    errorMessage: state.userManager.errorMessage,
    isFetching: state.userManager.isFetching,
    isLoggedIn: state.userManager.isLoggedIn
  };
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
