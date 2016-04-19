import React from 'react';

import MealItem from './MealItem';

const MealList = (props) => {
  const meals = props.meals.map(meal => (
    <div key={meal._mealId}>
      <p>{"Name: " + meal.name}</p>
      <p>Food Items:</p>
      {meal.mealItems.map((food, index) => {
        return <MealItem id={food._foodId} quantity={food.quantity} key={food._foodId} />
      })}
    </div>
  ))

  return (
    <div>
      {meals}
    </div>
  )
}

export default MealList;