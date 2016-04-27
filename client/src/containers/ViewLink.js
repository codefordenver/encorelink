import { connect } from 'react-redux';
import { changeView } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.view === state.viewManager
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeView(ownProps.view))
    }
  }
}

const ViewLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default ViewLink;