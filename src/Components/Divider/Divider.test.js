import React from 'react';

import Divider from './';

describe('Divider', () => {
  it('Empty matches snapshot', () => {
    expect(render(
      <Divider />
    )).toMatchSnapshot();
  });
});
