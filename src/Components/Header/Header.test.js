import React from 'react';
import renderer from 'react-test-renderer';

import Header from './';

describe('Header', () => {
  it('H6 matches snapshot', () => {
    const tree = renderer
      .create(<Header h6 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H5 matches snapshot', () => {
    const tree = renderer
      .create(<Header h5 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    const tree = renderer
      .create(<Header h4 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    const tree = renderer
      .create(<Header h3 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    const tree = renderer
      .create(<Header h2 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H6 matches snapshot', () => {
    const tree = renderer
      .create(<Header h1 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Empty with className matches snapshot', () => {
    const tree = renderer
      .create(<Header className='className' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
