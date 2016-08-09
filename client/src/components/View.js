import React from 'react';
import { Link } from 'react-router';

const View = (props) => {

  return (
    <div className='app-container'>
      <img src='/public/img/ketohero-logo.png'/>
      <div>
        <span>
          <Link to={'/home'}>Home</Link>
          {' | '}
          <Link to={'/foodlist'}>Food List</Link>
        </span>
      </div>
      <h3>{`UserID: ${props.userId}`}</h3>
      {props.children}
    </div>
  );
}

export default View;
