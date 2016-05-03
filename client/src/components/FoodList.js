import React from 'react';
import { connect } from 'react-redux';

import {fetchFood } from '../actions';
import FoodItem from './FoodItem';

class FoodList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  	const { dispatch } = this.props;
    dispatch(fetchFood());
  }

  render() {
    const { isFetching, foodDate } = this.props;
    if(isFetching) {
      return (
        <div>Loading...</div>
      )
    }
  	const foodList = foodData.map(food => {
      return <FoodItem {...food} key={food.id} />
    })
    return (
      <div>
        {foodList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.food.isFetching,
    foodData: state.food.foodData
  }
}

export default connect(mapStateToProps)(FoodList);