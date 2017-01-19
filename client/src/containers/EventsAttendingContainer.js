import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import EventsAttending from '../components/EventsAttending';
import { getUserId } from '../reducers/userReducer';

// import gimmeData from '../utils/gimmeData';
// import { isMusician, getUserId } from '../reducers/userReducer';
//
// function mapStateToProps(state) {
//   return {
//     isMusician: isMusician(state)
//   };
// }
//
// const getEventsAttendingUrl = (state) => `users/${getUserId(state)}/eventsAttending`;
// export default gimmeData(getEventsAttendingUrl, mapStateToProps)(Events);


const EventsAttendingQuery = gql`
  query EventsAttendingQuery($userId: ID!) {
    user(id: $userId) {
      eventsAttending {
        edges {
          node {
            id
            name
            date
            endDate
            location
          }
        }
      }
    }
  }
`;

export default compose(
  connect(state => ({
    userId: getUserId(state)
  })),
  graphql(EventsAttendingQuery, {
    options: ({ userId }) => ({ variables: { userId } }),
    props: ({ data: { loading, user } }) => {
      const events = user && user.eventsAttending.edges.map(edge => edge.node);
      return {
        loading,
        events
      };
    }
  })
)(EventsAttending);
