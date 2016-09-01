import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const View = (props) => {
  return (
    <div className="app-container">
      <img src="/public/img/encorelink-logo.png" alt="EncoreLink" />

      <h3>{`UserID: ${props.userId}`}</h3>
      {props.children}

      <p>
        <Link to="/createEvent">
          Create Event
        </Link> | <Link to="/volunteerViewEvents">
          View Events
        </Link>
      </p>

    </div>
  );
};

View.propTypes = {
  userId: PropTypes.number,
  children: PropTypes.node
};

export default View;
