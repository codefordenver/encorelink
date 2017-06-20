import { connect } from 'react-redux';
import FlashMessage from '../components/FlashMessage';
import { isLoggedIn } from '../reducers/userReducer';
import { isAppInitialized } from '../reducers/miscStateReducer';
import { dismissMessage } from '../actions/flashMessageActions';

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
    isAppInitialized: isAppInitialized(state),
    message: state.flashMessage
  };
}

const mapDispatchToProps = {
  dismissMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);
