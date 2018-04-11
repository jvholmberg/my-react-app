import React from 'react';
import renderer from 'react-test-renderer';

import Note from './';

describe('Note', () => {
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<Note />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Primary matches snapshot', () => {
    const tree = renderer
      .create(<Note primary />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Danger with className matches snapshot', () => {
    const tree = renderer
      .create(<Note className='className' danger />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
