import React from 'react';

import Button from './';

describe('Button', () => {
  it('Empty matches snapshot', () => {
    expect(render(
      <Button />
    )).toMatchSnapshot();
  });
  it('Primary matches snapshot', () => {
    expect(render(
      <Button primary />
    )).toMatchSnapshot();
  });
  it('Danger with className matches snapshot', () => {
    expect(render(
      <Button className='className' danger />
    )).toMatchSnapshot();
  });
});
