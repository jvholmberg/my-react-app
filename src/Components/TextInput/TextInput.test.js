import React from 'react';

import TextInput from './';

describe('TextInput', () => {
  it('Empty matches snapshot', () => {
    expect(shallow(
      <TextInput />
    )).toMatchSnapshot();
  });
  it('With label matches snapshot', () => {
    expect(shallow(
      <TextInput label='label' />
    )).toMatchSnapshot();
  });
  it('Danger matches snapshot', () => {
    expect(shallow(
      <TextInput danger />
    )).toMatchSnapshot();
  });
  it('Typical censored matches snapshot', () => {
    expect(shallow(
      <TextInput required />
    )).toMatchSnapshot();
  });
  it('Typical censored with className matches snapshot', () => {
    expect(shallow(
      <TextInput className='className' required />
    )).toMatchSnapshot();
  });
});
