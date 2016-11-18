import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import { isLoggedIn, getUser } from '../reducers/userReducer';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    user: getUser(state)
  };
};

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
