import React from 'react';
import renderer from 'react-test-renderer';

import NavLinkExtended from './';

describe('NavLinkExtended', () => {
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<NavLinkExtended />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
