import { connect } from 'react-redux';
import FlashMessage from '../components/FlashMessage';
import { isLoggedIn } from '../reducers/userReducer';
import { isAppInitialized } from '../reducers/miscStateReducer';

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
    isAppInitialized: isAppInitialized(state),
    message: state.flashMessage
  };
}

export default connect(mapStateToProps)(FlashMessage);
