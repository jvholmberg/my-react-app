import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import {
  Container,
  Grid,
  TextInput,
  Button,
} from '../../Components';

import './style.css';

const mapStateToProps = (state) => {
  return ({});
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch),
});

const validationSchema = (values) => Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password must be atleast 8 characters')
    .required('Password is required'),
});

const handleSubmit  = (values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
};

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

const Login = ({ actions }) => (
  <Container full className='Login-Page'>
    <Container regular>
      <Grid col3></Grid>
      <Grid col6>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          render={(formProps) => (
            <Form>
              <Field
                name="email"
                render={({ field, form: { touched, errors } }) => (
                  <TextInput label='Email' required touched={touched} errors={errors} {...field} />
                )} />
                <Field
                  name="password"
                  render={({ field, form: { touched, errors } }) => (
                    <TextInput label='Password' required password touched={touched} errors={errors} {...field} />
                  )} />
              <Button primary medium type='submit' disabled={formProps.isSubmitting}>
                Log in
              </Button>
              <Button secondary medium onClick={formProps.handleReset}>
                Reset
              </Button>
              {renderErrors(formProps.errors.email, formProps.touched.email)}
              {renderErrors(formProps.errors.password, formProps.touched.password)}
            </Form>
          )}
        />
      </Grid>
      <Grid col3></Grid>
    </Container>
  </Container>
);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
