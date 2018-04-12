import React from 'react';

import Section from './';

describe('Section', () => {
  it('Empty matches snapshot', () => {
    expect(shallow(
      <Section />
    )).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    expect(shallow(
      <Section className='className' />
    )).toMatchSnapshot();
  });
  it('Left-aligned with className matches snapshot', () => {
    expect(shallow(
      <Section className='className' left />
    )).toMatchSnapshot();
  });
});
