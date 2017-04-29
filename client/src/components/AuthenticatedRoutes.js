import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

function AuthenticatedRoutes({
  isAppInitialized,
  isLoggedIn,
  children,
  router,
  location
}) {
  if (!isAppInitialized) {
    return <div>Loading...</div>;
  } else if (!isLoggedIn) {
    router.replace({
      pathname: '/login',
      state: { nextPathname: location.pathname }
    });
  }

  return children;
}

AuthenticatedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  isAppInitialized: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  router: PropTypes.shape({
    replace: PropTypes.func.isRequired
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      pathname: PropTypes.string
    })
  }).isRequired
};

export default withRouter(AuthenticatedRoutes);
