import React from 'react';
import { connect } from 'react-redux';

import { fetchFood } from '../actions';
import FoodItem from './FoodItem';

class FoodList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  	this.props.fetchFood();
  }

  render() {
    const { isFetching, foodData } = this.props;
    if(isFetching) {
      return (
        <div>Loading...</div>
      )
    } else {
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
}

function mapStateToProps(state) {
  return {
    isFetching: state.food.isFetching,
    foodData: state.food.foodData
  }
}

const mapDispatchToProps = {
  fetchFood
};


export default connect(mapStateToProps, mapDispatchToProps)(FoodList);