import modelsReducer, {
  stateKey,
  getUrlDataStatus,
  getModels
} from '../modelsReducer';
import {
  apiActionStart,
  apiActionSuccess,
  apiActionFail
} from '../../actions/modelActions';
import {
  CURRENT,
  FETCHING,
  FAILED
} from '../../constants/modelStatus';

// returns a mock version of the redux global state, so the selectors work correctly
function getGlobalState(localState) {
  return {
    [stateKey]: localState
  };
}

const initialLocalState = modelsReducer(undefined, {});

function getGlobalStateFromActions(actions) {
  const localState = actions.reduce(modelsReducer, initialLocalState);
  return getGlobalState(localState);
}

function getApiActions(method, url, { body, urlParams } = {}) {
  const metaData = { method, url, body, urlParams };
  return {
    withPayload: (payload) => ({
      start: apiActionStart(null, metaData),
      success: apiActionSuccess(payload, metaData),
      fail: apiActionFail(payload, metaData)
    })
  };
}

describe('modelsReducer', () => {
  describe('single request', () => {
    const url = 'events/3';
    const mockPayload = { id: 3, mockPayload: true };
    const basicGetActions = getApiActions('get', url).withPayload(mockPayload);

    describe('before the data has been requested', () => {
      it('returns expected values from selectors', () => {
        const initialGlobalState = getGlobalState(initialLocalState);
        expect(getUrlDataStatus(initialGlobalState, url)).toBeUndefined();
        expect(getModels(initialGlobalState, url)).toBeUndefined();
      });
    });

    describe('after calling the api', () => {
      it('returns expected values from selectors', () => {
        const actions = [
          basicGetActions.start
        ];
        const globalState = getGlobalStateFromActions(actions);
        expect(getUrlDataStatus(globalState, url)).toBe(FETCHING);
        expect(getModels(globalState, url)).toBeUndefined();
      });
    });

    describe('when the api responds successfully', () => {
      it('returns expected values from selectors', () => {
        const actions = [
          basicGetActions.start,
          basicGetActions.success
        ];
        const globalState = getGlobalStateFromActions(actions);
        expect(getUrlDataStatus(globalState, url)).toBe(CURRENT);
        expect(getModels(globalState, url)).toEqual(mockPayload);
      });
    });

    describe('when the api response fails', () => {
      it('returns expected values from selectors', () => {
        const actions = [
          basicGetActions.start,
          basicGetActions.fail
        ];
        const globalState = getGlobalStateFromActions(actions);
        expect(getUrlDataStatus(globalState, url)).toBe(FAILED);
        expect(getModels(globalState, url)).toBeUndefined();
      });
    });
  });

  describe('multiple requests', () => {
    const collection = [0, 1, 2].map(id => ({ id }));
    const urlWithInclude = 'events/1?filter={"include":"volunteers"}';
    const modelWithInclude = { id: 1, otherModels: [] };
    const collectionActions = getApiActions('get', 'events').withPayload(collection);
    const includeActions = getApiActions('get', urlWithInclude).withPayload(modelWithInclude);

    it('provides a consistent view of the requested data', () => {
      const actions = [
        collectionActions.start,
        includeActions.start,
        includeActions.success,
        collectionActions.success
      ];
      const globalState = getGlobalStateFromActions(actions);
      expect(getModels(globalState, 'events')).toEqual(collection);
      expect(getModels(globalState, urlWithInclude)).toEqual(modelWithInclude);
    });
  });
});
