import React from 'react';
import renderer from 'react-test-renderer';

import Container from './';

describe('Container', () => {
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<Container />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Full matches snapshot', () => {
    const tree = renderer
      .create(<Container full />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Regular matches snapshot', () => {
    const tree = renderer
      .create(<Container danger />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    const tree = renderer
      .create(<Container className='className' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
