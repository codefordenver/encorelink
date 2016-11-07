import { fromJS } from 'immutable';
import encoreLinkReducer from '../rootReducer';

//This test confirms that our initial state is what we want
describe('encoreLinkReducer', () => {
  it('merges the initial state from all EncoreLink-specific reducers', () => {
    expect(encoreLinkReducer(undefined, {})).toEqual(fromJS({
      userManager: {
        user: {},
        userId: null,
        userToken: null,
        isLoggedIn: false,
        isError: false,
        errorMessage: '',
        isFetching: false
      },
      eventManager: {
        isFetching: false
      },
      form: {}
    }));
  });
});
