import React from 'react';
import Yup from 'yup';
import { withFormik } from 'formik';
import { TextInput, Button } from '../../Components';

const FormInput = ({
  label,
  required,
  password,
  value,
  error,
  touched,
  onChange,
  onBlur,
  ...props,
}) => (
  <TextInput
    label={label}
    required={required}
    password={password}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    primary={!touched}
    success={!error}
    danger={touched && error}
    {...props} />
);

const renderErrors = (errors, touched) => {
  // Single error
  if (touched && typeof errors === 'string') {
    return <div className='LoginForm-Error'>* {errors}</div>;
  }
  // Multiple errors
  if (touched && errors) {
    return errors.map((err) => <div className='LoginForm-Error'>* {err}</div>);
  }
  // No errors
  return <div></div>;
};

const LoginForm = ({
  values,
  errors,
  touched,
  dirty,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
}) => (
  <form onSubmit={handleSubmit}>
    <FormInput
      id='email'
      name='email'
      label='Email'
      required
      value={values.email}
      error={errors.email}
      touched={touched.email}
      onChange={handleChange}
      onBlur={handleBlur} />
    <FormInput
      id='password'
      name='password'
      label='Password'
      password
      required
      value={values.password}
      error={errors.password}
      touched={touched.password}
      onChange={handleChange}
      onBlur={handleBlur} />
    <Button
      primary
      medium
      type='submit'
      disabled={isSubmitting}>
      Login
    </Button>
    <Button
      secondary
      medium
      onClick={handleReset}
      disabled={!dirty || isSubmitting}>
      Reset
    </Button>
    {renderErrors(errors.email, touched.email)}
    {renderErrors(errors.password, touched.password)}
  </form>
);

const formEnhancer = withFormik({
  mapPropsToValues: (props) => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string()
      .min(8, 'Password must be atleast 8 characters')
      .required('Password is required'),
  }),
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    setSubmitting(false);
    alert(JSON.stringify(values));
  },
});

export default formEnhancer(LoginForm);
