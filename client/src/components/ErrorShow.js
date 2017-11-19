import React from 'react';
import PropTypes from 'prop-types';

const ErrorShow = ({ msg }) => (
  <span>
    {msg}
  </span>
);

ErrorShow.propTypes = {
  msg: PropTypes.func.isRequired,
};

export default ErrorShow({
  form: 'createEventForm'
})(ErrorShow);
