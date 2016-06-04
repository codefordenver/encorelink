import { connect } from 'react-redux';

import View from '../components/View';

const mapStateToProps = (state) => {
  return {
    userId: state.userManager.userId,
    userToken: state.userManager.userToken
  }
}


const ViewContainer = connect(
  mapStateToProps
)(View)

export default ViewContainer;