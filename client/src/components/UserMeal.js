import React from 'react';

const UserMeal = (props) => {
  return (
    <div className="userMeal">
      <p>{`Meal name: ${props.userMeal.name} - ID: ${props.userMeal.id}`}</p>
      <p>{`Meal Description: ${props.userMeal.description}`}</p>
    </div>
  );
};

export default UserMeal;
