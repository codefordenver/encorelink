import React from 'react';
import renderer from 'react-test-renderer';
import Terms from '../Terms';

test('Terms renders correctly', () => {
  const tree = renderer.create(
    <Terms />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
