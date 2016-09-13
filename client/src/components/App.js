import React, { PropTypes } from 'react';
import Header from './Header';

const App = (props) => (
  <div className="container">
    <Header />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
