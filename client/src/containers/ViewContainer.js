import { connect } from 'react-redux';
import _ from 'lodash';

import { changeView } from '../actions';
import View from '../components/View';

import userData from '../data/users';
import mealsData from '../data/meals';
import foodData from '../data/foodData';

const mapStateToProps = (state) => {
  return {
    userId: state.userManager.userId
  }
}


const ViewContainer = connect(
  mapStateToProps
)(View)

export default ViewContainer;