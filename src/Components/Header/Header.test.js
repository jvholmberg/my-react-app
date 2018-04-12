import React from 'react';

import Header from './';

describe('Header', () => {
  it('H6 matches snapshot', () => {
    expect(shallow(
      <Header h6 />
    )).toMatchSnapshot();
  });
  it('H5 matches snapshot', () => {
    expect(shallow(
      <Header h5 />
    )).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    expect(shallow(
      <Header h4 />
    )).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    expect(shallow(
      <Header h3 />
    )).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    expect(shallow(
      <Header h2 />
    )).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    expect(shallow(
      <Header h1 />
    )).toMatchSnapshot();
  });
  it('Empty matches snapshot', () => {
    expect(shallow(
      <Header />
    )).toMatchSnapshot();
  });
  it('Empty with className matches snapshot', () => {
    expect(shallow(
      <Header className='className' />
    )).toMatchSnapshot();
  });
});
