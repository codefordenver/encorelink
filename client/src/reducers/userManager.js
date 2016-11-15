import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RECEIVE_USER
} from '../constants/reduxConstants';

const initialState = {
  isFetching: false,
  user: {},
  userId: null,
  userToken: null,
  isLoggedIn: false,
  isError: false,
  errorMessage: ''
};

const userManager = (state = initialState, action) => {
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
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: payload.message
      };
    case RECEIVE_USER:
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
};

export default userManager;

export function getUserId(state) { return state.userManager.userId; }
export function getUserToken(state) { return state.userManager.userToken; }
export function getUser(state) { return state.userManager.user; }
export function isLoggedIn(state) { return state.userManager.isLoggedIn; }
export function isLoggedInUserAMusician(state) {
  return state.userManager.user.isMusician;
}
