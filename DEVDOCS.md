#Encore Link Developer Documentation
EncoreLink is a web application currently built with (from back to front):

* [PostgreSQL Database](https://www.postgresql.org/)
* [Loopback API Framework](https://loopback.io/)
* [Node.js Express Web Framework](http://expressjs.com/)
* [Redux State Container](http://redux.js.org/)
* [React.js UI Library](https://facebook.github.io/react/)
* [ES6 JavaScript](http://es6-features.org) with [Babel JS compiler](https://babeljs.io/)
* [Foundation by Zurb Front End Framework](http://foundation.zurb.com/)
* [Webpack Module Bundler](https://webpack.github.io/)
* [Jest Testing Framework](https://facebook.github.io/jest/)

##Data
We use Loopback to create and control our data. Once you install it with npm and get the shell database created as described on our [README](README.md), you can run a little interactive command line app that walks you through creating your data/API.

* The Loopback site has a good [Getting Started](http://loopback.io/getting-started/) page that shows you the basics of using that command line tool.
* The main files that represent the model in our code are the .json files in the `common\model` folder. Examples are `user.json` and `event.json`.
* JSON is just data, so comments are not allowed. Plus Loopback generates these JSO files, so our comments would be toast if we altered the model using the Loopback CLI.
 * NOTE: We might look to commenting these files in the future by either minifying to remove comments or adding a comment element

##State
We use Redux to control our application state.

* We use Redux because it ensures your state transitions are understandable, because there is only one unique next state for any starting state/action combination
* Check out [this page](http://redux.js.org/docs/introduction/index.html) to get up on Redux fundamentals, or watch [these videos](https://egghead.io/courses/getting-started-with-redux)
* Of course, the devil is in the implementation. We use all sorts of funky advanced tricks in our implementation, which makes understanding how to code up a new state transition  tricky. See below for a walkthrough example. The basic file separation is:
 * **Actions** are defined in `client\src\actions`. As of Nov 3, 2016, we have one file, `index.js` that represents our actions
 * **Initial state** and **Reducers** are defined in `client\src\reducers`. As of Nov 3, 2016, we have two main reducers in EncoreLink - the `userManager` and the `eventManager`.
We also have a third reducer, the `rootReducer`, which allows us to combine those two reducers into one using Redux.
 * Our management of the **Store** is in `client\src\store`. As of Nov 3, 2016, we have three main files to manage the store:
   * `configureStore.js` does the main setup and configuration of the store
   * `errorMiddleware.js` sets up [middleware](http://redux.js.org/docs/advanced/Middleware.html) for handling errors
   * `promiseMiddleware.js` sets up middleware for handling **[Promises](http://redux.js.org/docs/advanced/AsyncFlow.html)**

###State Transition Example
Let's walk through an example of the first step of our primary use case: an Organizer registering on the Landing page and going to the CreateEvent page.
We suggest that you have the app installed on your machine as described on the [README](README.md), and run through the app with your dev tools window open,
so you can verify for yourself what's going on.

1. The person gets to the landing page by hitting the URL in the browser. At this point we have to be in some initial state.
The initial state is defined in the `const initialState` variable in both `userManager.js` and `eventManager.js`. This sets the initial state to:
```javascript
const initialState = {
  isFetching: false,
  user: {},
  userId: null,
  userToken: null,
  isLoggedIn: false,
  isError: false,
  errorMessage: ''
};
```
Now, if we look in the dev window, we see that `prev state` represents that initial state the code set up for us.

But what is really cool is that we can already see what action it thinks we are going to take and the next state
we should be in when it is done.
2. x


