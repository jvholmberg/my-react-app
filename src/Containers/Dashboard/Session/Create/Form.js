import React from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import { TextInput, TextArea, Button } from '../../../../Components';

const validationSchema = (values) => Yup.object().shape({
  name: Yup.string()
    .required('Name is required!'),
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
    return <div className='CreateSession-Error'>* {errors}</div>;
  }
  // Multiple errors
  if (touched && errors) {
    return errors.map((err) => <div className='CreateSession-Error'>* {err}</div>);
  }
  // No errors
  return <div></div>;
};

const render = (formProps) => (
  <Form>
    <Field
      name="name"
      render={({ field, form: { touched, errors } }) => (
        <TextInput label='Name' required touched={touched} errors={errors} {...field} />
      )} />
    <Field
      name="time"
      render={({ field, form: { touched, errors } }) => (
        <TextInput label='Time' touched={touched} errors={errors} {...field} />
      )} />
    <Field
      name="desc"
      render={({ field, form: { touched, errors } }) => (
        <TextArea label='Description' touched={touched} errors={errors} {...field} />
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
);

const CreateSession = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    render={render}
  />
);

export default CreateSession;
