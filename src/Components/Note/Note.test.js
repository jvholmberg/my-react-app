import React from 'react';

import Note from './';

describe('Note', () => {
  it('Empty matches snapshot', () => {
    expect(shallow(
      <Note />
    )).toMatchSnapshot();
  });
  it('Primary matches snapshot', () => {
    expect(shallow(
      <Note primary />
    )).toMatchSnapshot();
  });
  it('Danger with className matches snapshot', () => {
    expect(shallow(
      <Note className='className' danger />
    )).toMatchSnapshot();
  });
});
