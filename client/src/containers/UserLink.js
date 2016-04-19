import { connect } from 'react-redux';
import { changeUser } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.user === state.userManager
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeUser(ownProps.user))
    }
  }
}

const UserLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default UserLink;