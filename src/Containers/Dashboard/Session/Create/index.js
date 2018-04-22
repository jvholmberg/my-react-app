import React, { Component } from 'react';
import { Container, Grid, Header } from '../../../../Components';

import Form from './Form';

class CreateSession extends Component {

  render() {
    return (
      <Container full>
        <Container regular>
          <Grid col12>
            <Header h2>Summary</Header>
          </Grid>
        </Container>
        <Container regular>
          <Grid col6>
            <Form />
          </Grid>
          <Grid col6></Grid>
        </Container>
      </Container>
    );
  }
};
export default CreateSession;
