import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Logo } from '../../Components';

const CreateSessionButton = () => (
<Link to='/dashboard/session/create'>
  <Logo icon='fas fa-plus' />
  Create Session
</Link>
);

const Dashboard = ()  => (
  <Container full>
    <Container regular>
      <Grid col12>
      <Header h2>Session</Header>
      <CreateSessionButton />
    </Grid>
    </Container>
  </Container>
);
export default Dashboard;
