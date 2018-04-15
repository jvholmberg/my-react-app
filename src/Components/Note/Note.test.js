import React from 'react';

import Note from './';

describe('Note', () => {
  it('Empty matches snapshot', () => {
    expect(render(
      <Note />
    )).toMatchSnapshot();
  });
  it('Primary matches snapshot', () => {
    expect(render(
      <Note primary />
    )).toMatchSnapshot();
  });
  it('Danger with className matches snapshot', () => {
    expect(render(
      <Note className='className' danger />
    )).toMatchSnapshot();
  });
});
