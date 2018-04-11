import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './';

describe('Logo', () => {
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<Logo />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With icon matches snapshot', () => {
    const tree = renderer
      .create(<Logo icon='fas fa-bars' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    const tree = renderer
      .create(<Logo className='className' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
