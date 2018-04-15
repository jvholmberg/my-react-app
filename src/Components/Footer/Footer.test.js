import React from 'react';

import Footer from './';

describe('Footer', () => {
  it('Empty matches snapshot', () => {
    expect(render(
      <Footer />
    )).toMatchSnapshot();
  });
});
