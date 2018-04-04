// Core dependecies
import React from 'react';
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
      <NavLinkExtended activeClassName='Active' to='/dashboard'>Dashboard</NavLinkExtended>
      <NavLinkExtended activeClassName='Active' to='/'>Home</NavLinkExtended>
    </Navigation>
    <Route exact path="/" component={Landing} />
    <Route exact path="/dashboard" component={Dashboard} />
  </div>
);

export default withRouter(App);
