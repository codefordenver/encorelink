module.exports = function(app) {

  var User = app.models.user;
  var users = [
    {
      username: 'scottsmeester',
      email: 'scott@smeester.com',
      password: 'password123'
    },
    {
      username: 'willydouglas',
      email: 'willy@eastcolfaxcorner.com',
      password: 'password123'
    },
    {
      username: 'devindeScenza',
      email: 'devin@sketchyalley.com',
      password: 'password123'
    },
    {
      username: 'ryanbird',
      email: 'ryan@eastaurora.com',
      password: 'password123'
    }
  ];

  var Meal = app.models.meal;
  var meals = [
    {
      name: 'PB&J',
      description: 'This is the PB&J description'
    },
    {
      name: 'Plain Pizza',
      description: 'This is the  description'
    },
    {
      name: 'Chocolate Ice Cream',
      description: 'This is the Plain Pizza description'
    },
    {
      name: 'Apples and Peanut Butter',
      description: 'This is the  description'
    },
    {
      name: 'Swordfish',
      description: 'This is the Apples and Peanut Butter description'
    },
    {
      name: 'Deep Fried Mayonnaise',
      description: 'This is the Deep Fried Mayonnaise description'
    },
    {
      name: 'Fried Chicken',
      description: 'This is the Fried Chicken description'
    }
  ];

  var Food = app.models.food;
  var foods = 
  [
    {
      name: 'Bread',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Peanut Butter',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Jelly',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Apple',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Cheese',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Butter',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Pasta',
      protein: 20,
      fat: 70,
      carbs: 10
    }
  ];

  var UserMeal = app.models.usermeal;
  var usermeals = [
    {
      userId: 1,
      mealId: 1
    },
    {
      userId: 1,
      mealId: 2
    },
    {
      userId: 2,
      mealId: 3
    },
    {
      userId: 2,
      mealId: 4
    },
    {
      userId: 3,
      mealId: 5
    },
    {
      userId: 3,
      mealId: 6
    },
    {
      userId: 1,
      mealId: 4
    },
    {
      userId: 1,
      mealId: 5
    },
    {
      userId: 2,
      mealId: 6
    },
    {
      userId: 2,
      mealId: 1
    },
    {
      userId: 3,
      mealId: 2
    },
    {
      userId: 3,
      mealId: 3
    }
  ]

  var MealFood = app.models.mealfood;
  var mealfoods = [
    {
      mealId: 1,
      foodId: 1,
      qty: 1
    },
    {
      mealId: 1,
      foodId: 2,
      qty: 2
    },
    {
      mealId: 2,
      foodId: 3,
      qty: 3
    },
    {
      mealId: 2,
      foodId: 4,
      qty: 4
    },
    {
      mealId: 3,
      foodId: 5,
      qty: 5
    },
    {
      mealId: 3,
      foodId: 6,
      qty: 6
    },
    {
      mealId: 1,
      foodId: 3,
      qty: 1
    },
    {
      mealId: 1,
      foodId: 4,
      qty: 2
    },
    {
      mealId: 2,
      foodId: 5,
      qty: 3
    },
    {
      mealId: 2,
      foodId: 6,
      qty: 4
    },
    {
      mealId: 3,
      foodId: 1,
      qty: 5
    },
    {
      mealId: 3,
      foodId: 2,
      qty: 6
    }
  ]

  User.create(users, function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);
  });

  Meal.create(meals, function(err, meals) {
    if (err) throw err;

    console.log('Created meals:', meals);
  });

  Food.create(foods, function(err, foods) {
    if (err) throw err;

    console.log('Created foods:', foods);
  });

  UserMeal.create(usermeals, function(err, usermeals){
    if (err) throw err;

    console.log('UserMeal created:', usermeals);
  });

  MealFood.create(mealfoods, function(err, mealfoods){
    if (err) throw err;

    console.log('MealFood created:', mealfoods);
  });

};