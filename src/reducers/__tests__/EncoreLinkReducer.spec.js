import encoreLinkReducer from '../rootReducer';

describe('encoreLinkReducer', () => {
  it('has the expected initial state', () => {
    expect(encoreLinkReducer(undefined, {})).toMatchSnapshot();
  });
});
