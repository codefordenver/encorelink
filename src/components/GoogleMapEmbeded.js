import PropTypes from 'prop-types';
import React from 'react';

const GoogleMapEmbeded = ({ query }) => (
  <iframe
    width="600"
    height="350"
    title="Location Map"
    frameBorder="0"
    style={{ border: 0 }}
    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${encodeURIComponent(query)}`}
    allowFullScreen
  />
);

GoogleMapEmbeded.propTypes = {
  query: PropTypes.string.isRequired
};

export default GoogleMapEmbeded;
