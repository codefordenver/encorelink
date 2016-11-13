import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { apiAction } from '../actions/modelActions';
import { getModels, getUrlDataStatus } from '../reducers/modelManager';

function isObject(o) {
  return o !== null && typeof o === 'object';
}

export default function gimmeData(urlFn, mapStateToProps, mapDispatchToProps) {
  const finalUrlFn = (typeof urlFn === 'function') ? urlFn : () => urlFn;

  const innerMapStateToProps = (state, props) => {
    const url = finalUrlFn(state, props);
    const mappedStateProps = (typeof mapStateToProps === 'function') ? mapStateToProps(state, props) : {};

    return {
      ...mappedStateProps,
      data: getModels(state, url),
      url,
      urlStatus: getUrlDataStatus(state, url)
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
        url: PropTypes.string.isRequired
      };

      componentDidMount() {
        this.props.apiAction('get', this.props.url);
      }

      render() {
        return <ComposedComponent {...this.props} />;
      }
    }


    const enhancedFetchingComponent = connect(innerMapStateToProps, innerMapDispatchToProps)(DataWrapper);

    return enhancedFetchingComponent;
  };
}
