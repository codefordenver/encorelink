import React, { PropTypes } from 'react';

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
