import React from 'react';

import Container from './';

describe('Container', () => {
  it('Empty matches snapshot', () => {
    expect(shallow(
      <Container />
    )).toMatchSnapshot();
  });
  it('Full matches snapshot', () => {
    expect(shallow(
      <Container full />
    )).toMatchSnapshot();
  });
  it('Regular matches snapshot', () => {
    expect(shallow(
      <Container regular />
    )).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    expect(shallow(
      <Container className='className' />
    )).toMatchSnapshot();
  });
});
