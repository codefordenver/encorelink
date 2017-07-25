import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { apiAction } from '../actions/modelActions';
import { getModels, getUrlDataStatus, shouldFetchUrl } from '../reducers/modelsReducer';

function isObject(o) {
  return o !== null && typeof o === 'object';
}

// This is a higher order component that will handle fetching data from a
// loopback api endpoint, and pass that data into the resulting wrapped component.
//
// Simple usage:
// const ComponentContainer = gimmeData('events')(Component);
//
// The first argument can be either a url string, or a function that returns a
// url string.
// e.g.
// const dynamicUrlFn = (state, props) => `events/${props.eventId}`;
// const ComponentContainer = gimmeData(dynamicUrlFn)(Component);
//
// If additional data or actions need to be passed to the component, `gimmeData`
// optionally takes the same mapStateToProps or mapDispatchToProps args that
// redux's `connect` higher order component takes.
// e.g.
// const mapStateToProps = (state) => {
//   return { stuff: getSomeDataFromState(state) };
// };
// const mapDispatchToProps = {
//   doSomething: someReduxAction
// };
// const ComponentContainer = gimmeData(
//   'events',
//   mapStateToProps,
//   mapDispatchToProps
// )(Component);
export default function gimmeData(urlFn, mapStateToProps, mapDispatchToProps) {
  const finalUrlFn = (typeof urlFn === 'function') ? urlFn : () => urlFn;

  const innerMapStateToProps = (state, props) => {
    const url = finalUrlFn(state, props);
    const mappedStateProps = (typeof mapStateToProps === 'function') ? mapStateToProps(state, props) : {};

    return {
      ...mappedStateProps,
      data: getModels(state, url),
      url,
      urlStatus: getUrlDataStatus(state, url),
      shouldFetchUrl: shouldFetchUrl(state, url)
    };
  };

  const innerMapDispatchToProps = (dispatch) => {
    let mappedDispatchProps;
    if (typeof mapDispatchToProps === 'function') {
      mappedDispatchProps = mapDispatchToProps(dispatch);
    } else if (isObject(mapDispatchToProps)) {
      mappedDispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
    }

    return {
      ...mappedDispatchProps,
      apiAction: (...args) => dispatch(apiAction(...args))
    };
  };

  return (ComposedComponent) => {
    class DataWrapper extends React.Component {
      static propTypes = {
        apiAction: PropTypes.func.isRequired,
        url: PropTypes.string.isRequired,
        shouldFetchUrl: PropTypes.bool.isRequired
      };

      componentDidMount() {
        this.props.apiAction('get', this.props.url);
      }

      componentWillReceiveProps(nextProps) {
        if (nextProps.shouldFetchUrl) {
          nextProps.apiAction('get', nextProps.url);
        }
      }

      render() {
        return <ComposedComponent {...this.props} />;
      }
    }


    const enhancedFetchingComponent = connect(innerMapStateToProps, innerMapDispatchToProps)(DataWrapper);

    return enhancedFetchingComponent;
  };
}
