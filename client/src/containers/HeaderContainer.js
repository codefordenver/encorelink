import { connect } from 'react-redux';
import { logoutUser } from '../actions';

import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    userId: state.userManager.userId
  };
};

const mapDispatchToProps = {
  logoutUser
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
