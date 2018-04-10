import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { isMusician } from '../reducers/userReducer';

function mapStateToProps(state) {
  return {
    isMusician: isMusician(state)
  };
}

export default connect(mapStateToProps)(Dashboard);
