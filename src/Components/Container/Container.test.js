import React from 'react';

import Container from './';

describe('Container', () => {
  it('Empty matches snapshot', () => {
    expect(render(
      <Container />
    )).toMatchSnapshot();
  });
  it('Full matches snapshot', () => {
    expect(render(
      <Container full />
    )).toMatchSnapshot();
  });
  it('Regular matches snapshot', () => {
    expect(render(
      <Container regular />
    )).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    expect(render(
      <Container className='className' />
    )).toMatchSnapshot();
  });
});
