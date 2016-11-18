import React, { PropTypes } from 'react';

const GoogleMapEmbeded = ({ query }) => (
  <iframe
    width="600"
    height="350"
    frameBorder="0" style={{ border: 0 }}
    src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyDwAaGJGP92_ZEZUqrzWSpgBm5vXam5Lwg&q=' + encodeURIComponent(query)} allowFullScreen
  />
);

GoogleMapEmbeded.propTypes = {
  query: PropTypes.string.isRequired
};

export default GoogleMapEmbeded;
