import { connect } from 'react-redux';
import { logoutUser } from '../actions';

import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userManager.isLoggedIn,
    user: state.userManager.user
  };
};

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
