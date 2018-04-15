import React from 'react';

import Logo from './';

describe('Logo', () => {
  it('Empty matches snapshot', () => {
    expect(render(
      <Logo />
    )).toMatchSnapshot();
  });
  it('With icon matches snapshot', () => {
    expect(render(
      <Logo icon='fas fa-bars' />
    )).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    expect(render(
      <Logo className='className' />
    )).toMatchSnapshot();
  });
});
