import React from 'react';

import ViewChanger from './ViewChanger';
import UserChanger from './UserChanger';

import FoodItem from './FoodItem';
import FoodList from './FoodList';
import MealItem from './MealItem';
import MealList from './MealList';

import styles from './styles';

const View = ({ view, user, meals }) => {

  const views = {
    FoodList: <FoodList />,
    FoodItem: <FoodItem id={2} />,
    MealItem: <MealItem id={2} quantity={200} />,
    MealList: <MealList meals={meals} />
  }

  return (
    <div className='app-container'>
      <h1>KetoHero</h1>
      <div className='testing-buttons'>
        <p>Testing buttons</p>
        <ViewChanger />
        <UserChanger />
      </div>
      <h3>{"Username: " + user.username}</h3>
      {views[view]}
    </div>
  );
}

export default View;