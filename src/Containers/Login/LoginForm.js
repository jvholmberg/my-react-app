import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { TextInput, Button } from '../../Components';

const EmailInput= () =>
  <TextInput label='Email' primary required />;

const PasswordInput= () =>
  <TextInput label='Password' primary password required />;

const validate = (values) => {
  const errors = {};

  if (!values.email) {
     errors.email = 'Required'
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address'
   }

   return errors;
}

const warn = (values) => {
  console.log(values);
};

const LoginForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name='email' component={EmailInput} />
    <Field name='password' component={PasswordInput} />
    <Button
      primary
      medium
      type='submit'
      disabled={submitting}>
        Login
    </Button>
    <Button
      secondary
      medium
      onClick={reset}
      disabled={pristine || submitting}>
        Reset
    </Button>
  </form>
);

export default reduxForm({
  form: 'loginForm',
  validate,
  warn,
})(LoginForm);
