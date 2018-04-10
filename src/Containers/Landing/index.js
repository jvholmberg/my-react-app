import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, Divider, Footer, Section, Grid, Header, Logo, Button,
} from '../../Components';

import './style.css';

const Landing = ()  => (
  <Container full>
    <Section className='GetStarted' inverted center>
      <Header h1 >This is some header</Header>
      <Header h4>This is a subtitle that gives more information</Header>
      <Button primary large>Get Started</Button>
      <Link to="/dashboard">already member, log in</Link>
    </Section>
    <Container regular>
      <Section center>
        <Grid col4>
          <Logo className='fab fa-react' large />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Grid>
        <Grid col4>
          <Logo className='fab fa-node-js' large />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Grid>
        <Grid col4>
          <Logo className='fab fa-npm' large />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Grid>
      </Section>
    </Container>
    <Container regular>
      <Section center>
        <Grid col12>
          <Header h4>What is Lorem Ipsum?</Header>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Grid>
      </Section>
      <Divider />
      <Section center>
        <Grid col12>
          <Header h4>What is Lorem Ipsum?</Header>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Grid>
      </Section>
      <Divider />
      <Section center>
        <Grid col12>
          <Header h4>What is Lorem Ipsum?</Header>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Grid>
      </Section>
    </Container>
    <Footer />
  </Container>
);
export default Landing;
