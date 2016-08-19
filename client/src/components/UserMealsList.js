import React from 'react';

import UserMeal from './UserMeal';

class UserMealsList extends React.Component {
  componentWillMount() {
    this.props.fetchUserMeals(this.props.userToken, this.props.userId);
  }

  render() {
    if (this.props.isFetching) {
      return <div> Loading user meals</div>;
    }

    const meals = this.props.meals.map((meal) => {
      return <UserMeal userMeal={meal} key={meal.id} />;
    });

    return (
      <div>
        {meals}
      </div>
    );
  }
}

export default UserMealsList;
