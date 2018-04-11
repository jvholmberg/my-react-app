import React from 'react';
import renderer from 'react-test-renderer';

import Grid from './';

describe('Grid', () => {
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<Grid />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    const tree = renderer
      .create(<Grid className='className' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
