import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Formik, Form, Field } from 'formik';

import Login from './';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Login', () => {

  it('Empty matches snapshot', () => {
    const store = mockStore({})
    expect(shallow(
      <Login store={store} />
    )).toMatchSnapshot();
  });
  it('Should update an input when it is changed', () => {
    const store = mockStore({})

    const inputName = 'email';
    const inputValue = 'test@example.com'

    const tree = mount(<Login store={store} />);
    const foo = tree
      .find(Formik)
      .find('input[name="email"]')
      .simulate('change', {
        // you must add this next line as (Formik calls e.persist() internally)
        persist: () => {},
        // simulate changing e.target.name and e.target.value
        target: {
          name: inputName,
          value: inputValue,
        },
      });
      // const newValue = tree
      //   .find(Form)
      //   .find('input')
      //   .props()
      //   .value;
    // expect(newValue).toEqual(inputValue);
    tree.unmount()
  });
});
