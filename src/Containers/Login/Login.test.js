import React from 'react';
import { mount } from 'enzyme';

import Login from './';

describe('Login', () => {
  it('Empty matches snapshot', () => {
    expect(shallow(
      <Login />
    )).toMatchSnapshot();
  });
  it('Should update an input when it is changed', () => {
    const inputId = 'email';
    const inputValue = 'test@example.com'

    const tree = mount(<Form />);
    const foo = tree
      .find(Form)
      .find('input')
      .simulate('change', {
        // you must add this next line as (Formik calls e.persist() internally)
        persist: () => {},
        // simulate changing e.target.name and e.target.value
        target: {
          id: inputId,
          value: inputValue,
        },
      });
      const newValue = tree
        .find(Form)
        .find('input')
        .props()
        .value;
      expect(newValue).toEqual(inputValue);
  });
});
