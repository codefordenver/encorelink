import { connect } from 'react-redux';
import AuthenticatedRoutes from '../components/AuthenticatedRoutes';
import { isLoggedIn } from '../reducers/userReducer';
import { isAppInitialized } from '../reducers/miscStateReducer';

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
    isAppInitialized: isAppInitialized(state)
  };
}

export default connect(mapStateToProps)(AuthenticatedRoutes);
