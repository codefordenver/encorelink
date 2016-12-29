import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import { isLoggedIn, getUser, isMusician } from '../reducers/userReducer';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    user: getUser(state),
    isMusician: isMusician(state)
  };
};

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
