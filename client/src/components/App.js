import PropTypes from 'prop-types';
import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import FlashMessageContainer from '../containers/FlashMessageContainer';

const App = (props) => (
  <div className="container">
    <HeaderContainer />
    <FlashMessageContainer />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
