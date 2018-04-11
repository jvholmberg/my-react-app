import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from './';

describe('TextInput', () => {
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<TextInput />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With label matches snapshot', () => {
    const tree = renderer
      .create(<TextInput label='label' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Danger matches snapshot', () => {
    const tree = renderer
      .create(<TextInput danger />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Typical censored matches snapshot', () => {
    const tree = renderer
      .create(<TextInput required />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Typical censored with className matches snapshot', () => {
    const tree = renderer
      .create(<TextInput className='className' required />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
