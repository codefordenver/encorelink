import React from 'react';

const View = (props) => {
  return (
    <div className="app-container">
      <img src="/public/img/encorelink-logo.png" alt="EncoreLink" />

      <h3>{`UserID: ${props.userId}`}</h3>

      {props.children}
    </div>
  );
};

export default View;
