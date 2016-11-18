import {
  API_ACTION_START,
  API_ACTION_SUCCESS,
  API_ACTION_FAIL
} from '../constants/reduxConstants';
import {
  FETCHING,
  CURRENT,
  FAILED
} from '../constants/modelStatus';

function setUrlDataFetching(currentUrlData) {
  return {
    ...currentUrlData,
    status: FETCHING
  };
}

function setUrlDataSuccess(urlDataState, data) {
  const ids = Array.isArray(data) ? data.map(model => model.id) : data.id;
  return {
    ids,
    status: CURRENT
  };
}

function setUrlDataFailed(currentUrlData) {
  return {
    ...currentUrlData,
    status: FAILED
  };
}

function updateUrlData(updater, urlDataState, action) {
  const { url } = action.meta;
  return {
    ...urlDataState,
    [url]: updater(urlDataState[url], action.payload)
  };
}

const initialUrlData = {};

// This reducer stores the status of different api url GET requests and the ids
// of the corresponding model returned from each request
//
// The data shape is as follows:
// {
//  [url]: {
//    ids: [ids] | id,
//    status: STALE | FETCHING | CURRENT | FAILED
//  }
// }
export default function urlDataReducer(urlDataState = initialUrlData, action) {
  // For now ignore any actions that aren't GET requests.
  // At some point we might want to set urls to be stale based on things like
  // POSTs that create a new model
  if (action.meta && action.meta.method !== 'get') {
    return urlDataState;
  }

  switch (action.type) {
    case API_ACTION_START:
      return updateUrlData(setUrlDataFetching, urlDataState, action);

    case API_ACTION_SUCCESS:
      return updateUrlData(setUrlDataSuccess, urlDataState, action);

    case API_ACTION_FAIL:
      return updateUrlData(setUrlDataFailed, urlDataState, action);

    default:
      return urlDataState;
  }
}
