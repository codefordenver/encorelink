import React from 'react';
import renderer from 'react-test-renderer';
import TestWrapper from '../../test-utils/TestWrapper';

import Landing from '../Landing';


test('Landing renders correctly', () => {
  const tree = renderer.create(
    <TestWrapper>
      <Landing />
    </TestWrapper>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
