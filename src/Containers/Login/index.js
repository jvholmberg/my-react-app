import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Grid } from '../../Components';
import Form from './Form';

import './style.css';

const mapStateToProps = (state) => {
  return ({});
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch),
});

class Login extends Component {

  render() {
    const { actions } = this.props;
    return (
      <Container full className='Login-Page'>
        <Container regular>
          <Grid col3></Grid>
          <Grid col6>
            <Form />
          </Grid>
          <Grid col3></Grid>
        </Container>
      </Container>
    );
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
