import { connect } from 'react-redux';
import { sendPasswordReset } from '../actions/userActions';
import ForgotPassword from '../components/ForgotPassword';

const mapDispatchToProps = {
  onSubmit: sendPasswordReset
};

export default connect(null, mapDispatchToProps)(ForgotPassword);
