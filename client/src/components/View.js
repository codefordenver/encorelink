import React from 'react';
import { Link } from 'react-router';

const View = ({ children, userId, userToken }) => {

  return (
    <div className='app-container'>
      <img src='static/img/ketohero-logo.png'/>
      <div>
        <span>
          <Link to={`/client/foodlist?userToken=${userToken}`}>Food List</Link>
        </span>
      </div>
      <h3>{`UserID: ${userId}`}</h3>
      {children}
    </div>
  );
}

export default View;