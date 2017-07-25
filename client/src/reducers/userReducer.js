import { getModels } from './modelsReducer';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RECEIVE_USER
} from '../constants/reduxConstants';

export const stateKey = 'authData';

const initialState = {
  isFetching: false,
  user: {},
  userId: null,
  userToken: null,
  isLoggedIn: false
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: payload.userId,
        userToken: payload.id,
        user: payload.user,
        isLoggedIn: true,
        isFetching: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case RECEIVE_USER:
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
}

export default userReducer;

export function getUserState(state) { return state[stateKey]; }
export function getUserId(state) { return getUserState(state).userId; }
export function getUserToken(state) { return getUserState(state).userToken; }
export function getUser(state) { return getUserState(state).user; }
export function isLoggedIn(state) { return getUserState(state).isLoggedIn; }
export function isMusician(state) {
  return getUserState(state).user.isMusician || false;
}
export function userIsBeingFetched(state) { return getUserState(state).isFetching; }
export function isRegistered(state, url) {
  const { volunteers = [] } = getModels(state, url) || {};
  return volunteers.some((item) => {
    return item.id === state.authData.userId;
  });
}
