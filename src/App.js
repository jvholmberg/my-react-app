// Core dependecies
import React from 'react';
import { Route, withRouter } from 'react-router-dom';

// Project dependecies
import Landing from './Containers/Landing';
import Dashboard from './Containers/Dashboard';
import Login from './Containers/Login';
import Navigation from './Containers/Navigation';

// Styling (TODO: Add babel-plugin-react-css-modules)
import './App.css';

const App = () => (
  <div className='App_Container'>
    <Navigation />
    <Route exact path="/" component={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
  </div>
);

export default withRouter(App);
