import React, { PropTypes } from 'react';
import HeaderContainer from '../containers/HeaderContainer';

const App = (props) => (
  <div className="container">
    <HeaderContainer />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
