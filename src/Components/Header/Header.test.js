import React from 'react';

import Header from './';

describe('Header', () => {
  it('H6 matches snapshot', () => {
    expect(render(
      <Header h6 />
    )).toMatchSnapshot();
  });
  it('H5 matches snapshot', () => {
    expect(render(
      <Header h5 />
    )).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    expect(render(
      <Header h4 />
    )).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    expect(render(
      <Header h3 />
    )).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    expect(render(
      <Header h2 />
    )).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    expect(render(
      <Header h1 />
    )).toMatchSnapshot();
  });
  it('Empty matches snapshot', () => {
    expect(render(
      <Header />
    )).toMatchSnapshot();
  });
  it('Empty with className matches snapshot', () => {
    expect(render(
      <Header className='className' />
    )).toMatchSnapshot();
  });
});
