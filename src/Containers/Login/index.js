import React from 'react';
import { Container, Grid, Footer, TextInput, Button } from '../../Components';

const Login = ()  => (
  <Container full>
    <Container regular>
      <Grid col3></Grid>
      <Grid col6>
        <TextInput name='username' label='Username' primary required />
        <TextInput name='password' label='Password' primary password required />
        <Button primary medium>
          Login
        </Button>
      </Grid>
      <Grid col3></Grid>
    </Container>
    <Footer />
  </Container>
);
export default Login;
