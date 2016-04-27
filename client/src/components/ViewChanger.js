import React from 'react'
import ViewLink from '../containers/ViewLink'

const ViewChanger = () => (
  <p>
    Pick a view:
    {" "}
    <ViewLink view="MealList">
      Meal List
    </ViewLink>
    {", "}
    <ViewLink view="MealItem">
      Meal Item
    </ViewLink>
    {", "}
    <ViewLink view="FoodList">
      Food List
    </ViewLink>
    {", "}
    <ViewLink view="FoodItem">
      Food Item
    </ViewLink>
  </p>
)

export default ViewChanger