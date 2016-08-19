import React from 'react';
import numeral from 'numeral';
import styles from './styles';

export default class FoodItem extends React.Component {

  static defaultProps = {
    id: 0,
    name: 'Food',
    protein: 0.4,
    fat: 0.3,
    carbs: 0.3,
    quantity: 100
  };

  percent(number) {
    return numeral(number / 100).format('0.0 %');
  }

  decimal(number) {
    return numeral(number / 100).format('0.0');
  }

  render() {
    const { fat, carbs, protein, quantity, name } = this.props;
    return (
      <div className="foodContainer" style={styles.foodItem}>
        <div>
          {`Protein: ${this.percent(protein)} `}
          {`Fat: ${this.percent(fat)} `}
          {`Carbs" ${this.percent(carbs)}`}
        </div>
        <div>
          {`Food Item: ${name}`}
          {this.props.children}
        </div>
        <div>
          {`Protein: ${this.decimal(protein * quantity)}g `}
          {`Fat: ${this.decimal(fat * quantity)}g `}
          {`Carbs: ${this.decimal(carbs * quantity)}g`}
        </div>
      </div>
    );
  }
}
