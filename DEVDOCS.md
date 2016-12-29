#Encore Link Developer Documentation
EncoreLink is a web application currently built with (from back to front):

* [PostgreSQL Database](https://www.postgresql.org/)
* [Loopback API Framework](https://loopback.io/)
* [Node.js Express Web Framework](http://expressjs.com/)
* [Redux for client state management](http://redux.js.org/)
* [React.js UI Library](https://facebook.github.io/react/)
* [es2015+ JavaScript](https://babeljs.io/docs/learn-es2015/) with [Babel JS compiler](https://babeljs.io/)
* [Foundation by Zurb - CSS Framework](http://foundation.zurb.com/)
* [Webpack Module Bundler](https://webpack.github.io/)
* [Jest Testing Framework](https://facebook.github.io/jest/)

##Data
We use Loopback to create and control our data. Once you install it with npm and get the shell database created as described on our [README](README.md), you can run a little interactive command line app that walks you through creating your data/API.

* The Loopback site has a good [Getting Started](http://loopback.io/getting-started/) page that shows you the basics of using that command line tool.
* The main files that represent the model in our code are the .json files in the `common\model` folder. Examples are `user.json` and `event.json`.
* JSON is just data, so comments are not allowed. Plus Loopback generates these JSON files, so our comments would be toast if we altered the model using the Loopback CLI.
 * NOTE: We might look to commenting these files in the future by either minifying to remove comments or adding a comment element

##State
We use Redux to ensure state transitions are understandable. This happens by managing client state in one place and having all mutations happen through a one-way data flow. Check out [this page](http://redux.js.org/docs/introduction/index.html) to get up on Redux fundamentals, or watch [these videos](https://egghead.io/courses/getting-started-with-redux)

* **[Actions](http://redux.js.org/docs/basics/Actions.html)** are defined in `client\src\actions`.
* **Initial state** and **Reducers** are defined in `client\src\reducers`. [Reducers](http://redux.js.org/docs/basics/Reducers.html) are functions that define how client state is mutated. The `rootReducer` combines our project-specific reducers into one using the Redux `combineReducers` convenience function.
* Our management of the **[Store](http://redux.js.org/docs/basics/Store.html)** is in `client\src\store`.
   * `configureStore.js` does the main setup and configuration of the store
   * `errorMiddleware.js` sets up [middleware](http://redux.js.org/docs/advanced/Middleware.html) for handling errors
   * `promiseMiddleware.js` sets up middleware for handling **[Promises](http://redux.js.org/docs/advanced/AsyncFlow.html)**

###State Transition Example
Let's walk through an example of the first step of our primary use case: an Organizer registering on the Landing page and going to the CreateEvent page.
We suggest that you have the app installed on your machine as described on the [README](README.md), and run through the app with your dev tools window open,
so you can verify for yourself what's going on. [TBC]

##Quick Tips
Here are a few tips on how to accomplish specific goals

###Conditional Hard-Coded Links
Say you want a peice of text in the UI to be a link to another page, but which page is linked is dependent on some application state.
For example, the username in the header is a link to the user's profile page, but the logged in user could be an organizer or a volunteer,
so we don't know which page to link to. You need to access the props to find out the state. This assumes you already have the props defined,
and you just need to access it.

1. in your container, import the prop from the proper reducer
```JavaScript
import { isLoggedIn, getUser, isMusician } from '../reducers/userReducer';
```

2. make sure your container maps the proper state to your prop
```JavaScript
const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    user: getUser(state),
    isMusician: isMusician(state)
  };
};
```

3. In your component, require your prop
```JavaScript
static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    isMusician: PropTypes.bool.isRequired
  };
```

4. Find your target pages in routes.js
```JavaScript
<Route component={AuthenticatedRoutesContainer} >
      <Route path="/createEvent" component={CreateEventContainer} />
      <Route path="/organizerProfile" component={OrganizerProfile} />
      <Route path="/events" component={EventsContainer} />
      <Route path="/event/:id" component={EventContainer} />
      <Route path="/musicianProfile" component={MusicianProfile} />
      <Route path="/eventsAttending" component={EventsAttendingContainer} />
      <Route path="/musician/:id" component={MusicianContainer} />
</Route>
```

5. In your component, set up a conditional that links to the correct page based on the prop
```JavaScript
  Hello, <Link to={this.props.isMusician ? '/musicianProfile' : 'organizerProfile'}>{this.props.user.email}</Link>
```
