import React from 'react';

import Section from './';

describe('Section', () => {
  it('Empty matches snapshot', () => {
    expect(render(
      <Section />
    )).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    expect(render(
      <Section className='className' />
    )).toMatchSnapshot();
  });
  it('Left-aligned with className matches snapshot', () => {
    expect(render(
      <Section className='className' left />
    )).toMatchSnapshot();
  });
});
