import { connect } from 'react-redux';

import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    userId: state.userManager.userId,
    userToken: state.userManager.userToken
  };
};


const HomeContainer = connect(
  mapStateToProps
)(Home);

export default HomeContainer;
