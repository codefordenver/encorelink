import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = (props) => (
  <div className="container">
    <Header />
    {props.children}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
