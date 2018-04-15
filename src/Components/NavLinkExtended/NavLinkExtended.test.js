import React from 'react';

import NavLinkExtended from './';

describe('NavLinkExtended', () => {
  it('Only to specified matches snapshot', () => {
    expect(render(
      <NavLinkExtended to='/' />
    )).toMatchSnapshot();
  });
});
