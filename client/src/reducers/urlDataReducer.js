import {
  API_ACTION_START,
  API_ACTION_SUCCESS,
  API_ACTION_FAIL
} from '../constants/reduxConstants';
import {
  CURRENT,
  FAILED,
  FETCHING,
  STALE
} from '../constants/modelStatus';
import {
  urlHasQueryParams
} from '../utils/urlParsing';

function setUrlDataStatus(currentUrlData, status) {
  return {
    ...currentUrlData,
    status
  };
}

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

function setUrlUnnormalizedData(urlDataState, data) {
  return {
    status: CURRENT,
    data
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

function handleUpdateRequest(urlDataState, action) {
  const newState = {};
  Object.keys(urlDataState).forEach((url) => {
    newState[url] = setUrlDataStatus(urlDataState[url], STALE);
  });
  return newState;
}

function handleGetRequest(urlDataState, action) {
  switch (action.type) {
    case API_ACTION_START:
      return updateUrlData(setUrlDataFetching, urlDataState, action);

    case API_ACTION_SUCCESS:
      if (urlHasQueryParams(action.meta.url)) {
        return updateUrlData(setUrlUnnormalizedData, urlDataState, action);
      }
      return updateUrlData(setUrlDataSuccess, urlDataState, action);

    case API_ACTION_FAIL:
      return updateUrlData(setUrlDataFailed, urlDataState, action);

    default:
      return urlDataState;
  }
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
  const method = action.meta && action.meta.method;

  if (method === 'get') {
    return handleGetRequest(urlDataState, action);
  }

  if (['put', 'patch', 'post'].indexOf(method) !== -1) {
    return handleUpdateRequest(urlDataState, action);
  }

  return urlDataState;
}
