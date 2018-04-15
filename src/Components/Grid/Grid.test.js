import React from 'react';
import renderer from 'react-test-renderer';

import Grid from './';

describe('Grid', () => {
  it('Empty matches snapshot', () => {
    expect(render(
      <Grid />
    )).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    expect(render(
      <Grid className='className' />
    )).toMatchSnapshot();
  });
});
