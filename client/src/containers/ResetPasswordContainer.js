import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import ResetPassword from '../components/ResetPassword';
import { resetPasswordFromToken } from '../actions/userActions';

const ResetPasswordContainer = (props) => {
  function onResetPassword(formData) {
    props.resetPasswordFromToken(formData.password, props.location.query.id, props.location.query.token);
  }

  return (
    <ResetPassword onSubmit={onResetPassword} />
  );
};

ResetPasswordContainer.propTypes = {
  resetPasswordFromToken: PropTypes.func.isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string,
      token: PropTypes.string
    })
  }).isRequired
};


const mapDispatchToProps = {
  resetPasswordFromToken
};

export default withRouter(connect(null, mapDispatchToProps)(ResetPasswordContainer));
