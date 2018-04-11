import React from 'react';
import renderer from 'react-test-renderer';

import Section from './';

describe('Section', () => {
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<Section />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With className matches snapshot', () => {
    const tree = renderer
      .create(<Section className='className' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Left-aligned with className matches snapshot', () => {
    const tree = renderer
      .create(<Section className='className' left />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
