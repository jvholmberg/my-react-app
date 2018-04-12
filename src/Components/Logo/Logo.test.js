import React from 'react';

import Logo from './';

describe('Logo', () => {
  it('Empty matches snapshot', () => {
    expect(shallow(
      <Logo />
    )).toMatchSnapshot();
  });
  it('With icon matches snapshot', () => {
    expect(shallow(
      <Logo icon='fas fa-bars' />
    )).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    expect(shallow(
      <Logo className='className' />
    )).toMatchSnapshot();
  });
});
