import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavLinkExtended from './';

describe('NavLinkExtended', () => {
  it('Only to specified matches snapshot', () => {
    expect(shallow(
      <NavLinkExtended to='/' />
    )).toMatchSnapshot();
  });
});
