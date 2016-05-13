import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import Login from '../components/Login';

const mapDispatchToProps = {
  loginRequest
}

export default connect(null, mapDispatchToProps)(Login);