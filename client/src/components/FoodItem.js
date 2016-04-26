import React from 'react';
import styles from './styles';

import foodData from '../data/foodData';

export default class FoodItem extends React.Component {

  static defaultProps = {
    id: null,
    name: 'Food',
    protein: 40,
    fat: 30,
    carbs: 30,
    quantity: 100
  };


  render() {
    let food;
    if(this.props.id === null) {
      food = this.props;
    } else {
      food = foodData[this.props.id]
    }
    return (
      <div className='foodContainer' style={styles.foodItem}>
        <div>
          {"Protein: " + food.protein + '% '}
          {"Fat: " + food.fat + '% '}
          {"Carbs" + food.carbs + '%'}
        </div>
        <div>
          {"Food Item: " + food.name}
          {this.props.children}
        </div>
        <div>
          {food.protein * this.props.quantity / 100 + 'g'}
          {food.fat * this.props.quantity / 100 + 'g'}
          {food.carbs * this.props.quantity / 100 + 'g'}
        </div>
      </div>
    )
  }
}