import { combineReducers } from 'redux';
import allModelsReducer from './allModelsReducer';
import urlDataReducer from './urlDataReducer';
import { getModelNameFromUrl } from '../utils/urlParsing';
import { FETCHING } from '../constants/modelStatus';

export default combineReducers({
  allModels: allModelsReducer,
  allUrlData: urlDataReducer
});


// Selectors

function hydrateModels(modelName, allModels, ids) {
  const modelsOfSameType = allModels[modelName];
  if (!modelsOfSameType) {
    return undefined;
  }

  if (Array.isArray(ids)) {
    return ids.reduce((hydratedModels, id) => {
      hydratedModels.push(modelsOfSameType[id]);
      return hydratedModels;
    }, []);
  }
  return modelsOfSameType[ids];
}

export function getModels(state, url) {
  const urlData = state.modelManager.allUrlData[url];

  if (!urlData || urlData.ids === undefined) {
    return undefined;
  }

  const { allModels } = state.modelManager;
  const modelName = getModelNameFromUrl(url);
  return hydrateModels(modelName, allModels, urlData.ids);
}

export function getUrlDataStatus(state, url) {
  const urlData = state.modelManager.allUrlData[url];
  return urlData && urlData.status;
}

export const isUrlDataFetching = (state, url) => getUrlDataStatus(state, url) === FETCHING;
