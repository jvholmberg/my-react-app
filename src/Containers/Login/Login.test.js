import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Login from './';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('Empty matches snapshot', () => {
    const tree = renderer
      .create(<LoginForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('submit works', () => {
    const submitMock = () => Promise.resolve();
    const loginForm = mount(<LoginForm handleSubmit={submitMock} />);
    expect(loginForm.state().isSubmitting).toBe(false);
    loginForm.find('form').simulate('submit', {
        preventDefault() {
          // this gets called because it's sync
        },
      });
    console.log(loginForm.state().isSubmitting);
  });
});
