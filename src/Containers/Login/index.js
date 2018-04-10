import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Grid, Footer } from '../../Components';
import LoginForm from './LoginForm';
import LoginFormReducer, { submitLoginForm } from './reducer';

const mapStateToProps = (state) => {
  return ({});
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    submitLoginForm,
  }, dispatch),
});

const Login = ({ actions }) => (
  <Container full>
    <Container regular>
      <Grid col3></Grid>
      <Grid col6>
        <LoginForm onSubmit={(values) => {
          console.log(values);
          actions.submitLoginForm(values);
        }} />
      </Grid>
      <Grid col3></Grid>
    </Container>
    <Footer />
  </Container>
);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
export { LoginFormReducer }
