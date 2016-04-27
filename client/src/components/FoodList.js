import React from 'react';
import foodData from '../data/foodData';

import FoodItem from './FoodItem';

class FoodList extends React.Component {
  constructor() {
    super()
    this.state = {
      FoodItems: [],
      loading: true
    }
  }

  componentWillMount() {
  	// Fetch the data, set the state
  	// state.FoodItems = array of individual foods
    this.setState({
      FoodItems: foodData,
      loading: false
    });
  }

  render() {
    if(this.state.loading) {
      return (
        <div>Loading...</div>
      )
    }
  	const list = this.state.FoodItems.map((item, index) => {
      return <FoodItem {...item} key={index} id={null}/>
    })
    return (
      <div>
        {list}
      </div>
    )
  }
}

export default FoodList;