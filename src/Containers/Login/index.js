import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Grid, Footer } from '../../Components';
import LoginForm from './LoginForm';

import './style.css';

const mapStateToProps = (state) => {
  return ({});
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch),
});

const Login = ({ actions }) => (
  <Container full className='Login-Page'>
    <Container regular>
      <Grid col3></Grid>
      <Grid col6>
        <LoginForm />
      </Grid>
      <Grid col3></Grid>
    </Container>
    <Footer />
  </Container>
);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
