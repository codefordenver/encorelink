import {
  API_ACTION_SUCCESS
} from '../constants/reduxConstants';
import { getModelNameFromUrl } from '../utils/urlParsing';

function updateModels(modelState, data) {
  const nextModelState = { ...modelState };
  const normalizedData = Array.isArray(data) ? data : [data];

  normalizedData.forEach(model => {
    nextModelState[model.id] = model;
  });

  return nextModelState;
}

const initialModels = {};
// This reducer stores all models of data requested with apiAction. For example,
// this could be all the events that have been requested from the api.
//
// The data is keyed by modelName, and id respectively for quick lookup.
// Visual of data shape:
// {
//    [modelName]: {
//      [id]: model
//    }
// }
export default function allModelsReducer(modelState = initialModels, action) {
  if (action.type === API_ACTION_SUCCESS) {
    const modelName = getModelNameFromUrl(action.meta.url);
    return {
      ...modelState,
      [modelName]: updateModels(modelState[modelName], action.payload)
    };
  }

  return modelState;
}
