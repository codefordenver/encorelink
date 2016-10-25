import { connect } from 'react-redux';

import Landing from '../components/Landing';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userManager.isLoggedIn
  };
};

export default connect(mapStateToProps)(Landing);
