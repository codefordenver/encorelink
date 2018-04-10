import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';

const store = configureStore();

const routerKeys = [
  'listenBefore',
  'listen',
  'transitionTo',
  'push',
  'replace',
  'go',
  'goBack',
  'goForward',
  'createKey',
  'createPath',
  'createHref',
  'createLocation',
  'setState',
  'registerTransitionHook',
  'unregisterTransitionHook',
  'pushState',
  'replaceState',
  // '__v2_compatible__',
  'setRouteLeaveHook',
  'isActive'
];

const mockRouterObj = routerKeys.reduce((mockRouter, key) => {
  mockRouter[key] = jest.fn(); // eslint-disable-line no-param-reassign
  return mockRouter;
}, {});

class MockRouter extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  static childContextTypes = {
    router: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      router: mockRouterObj
    };
  }

  render() {
    return this.props.children;
  }
}

const TestWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <MockRouter>
        { children }
      </MockRouter>
    </Provider>
  );
};

TestWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default TestWrapper;
