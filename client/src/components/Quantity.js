import React from 'react';

export default class Quantity extends React.Component {

  static defaultProps = {
    quantity: 100
  }

  render() {
    return (
      <div>
        {"Quantity: " + this.props.quantity}
      </div>
    )
  }
}