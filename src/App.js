// Core dependecies
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

// Project dependecies
import Dashboard from './Containers/Dashboard';
import Landing from './Containers/Landing';
import { NavLinkExtended } from './Components';
import Navigation from './Containers/Navigation';

// Styling (TODO: Add babel-plugin-react-css-modules)
import './App.css';

const App = () => (
  <div className='App_Container'>
    <Navigation>
      <NavLinkExtended to='dashboard'>Dashboard</NavLinkExtended>
      <NavLinkExtended to=''>Home</NavLinkExtended>
    </Navigation>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/" component={Landing} />
  </div>
);

export default withRouter(connect(null, null)(App));
