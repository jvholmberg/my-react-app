import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Login from './';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const TEST_EMAIL_INPUT_NAME = 'email';
const TEST_EMAIL_INPUT_VALUE = 'test@example.com';

describe('Login', () => {
  it('Empty matches snapshot', () => {
    const store = mockStore({})
    expect(shallow(
      <Login store={store} />
    )).toMatchSnapshot();
  });
  it('Should update an input when it is changed', () => {
    const store = mockStore({})
    const tree = mount(<Login store={store} />);
    tree.find('input[name="email"]')
      .simulate('change', {
        // you must add this next line as (Formik calls e.persist() internally)
        persist: () => {},
        // simulate changing e.target.name and e.target.value
        target: {
          name: TEST_EMAIL_INPUT_NAME,
          value: TEST_EMAIL_INPUT_VALUE,
        },
      });
      const newValue = tree
        .find('input[name="email"]')
        .props()
        .value;
    expect(newValue).toEqual(TEST_EMAIL_INPUT_VALUE);
    tree.unmount()
  });
  it('Should submit with errors', () => {
    const store = mockStore({})
    const tree = shallow(<Login store={store} />);
    const foo = tree.dive();
    console.log(foo);
    // tree.unmount()
  });
});
