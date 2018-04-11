import React from 'react';
import renderer from 'react-test-renderer';

import Button from './';

describe('Button', () => {
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Primary matches snapshot', () => {
    const tree = renderer
      .create(<Button primary />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Danger with className matches snapshot', () => {
    const tree = renderer
      .create(<Button className='className' danger />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
