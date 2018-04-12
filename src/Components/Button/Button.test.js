import React from 'react';

import Button from './';

describe('Button', () => {
  it('Empty matches snapshot', () => {
    expect(shallow(
      <Button />
    )).toMatchSnapshot();
  });
  it('Primary matches snapshot', () => {
    expect(shallow(
      <Button primary />
    )).toMatchSnapshot();
  });
  it('Danger with className matches snapshot', () => {
    expect(shallow(
      <Button className='className' danger />
    )).toMatchSnapshot();
  });
});
