// Core dependecies
import React from 'react';
import { Route, withRouter } from 'react-router-dom';

// Project dependecies
import CreateSession from './Containers/Dashboard/Session/Create';
import Dashboard from './Containers/Dashboard';
import Landing from './Containers/Landing';
import Login from './Containers/Login';
import Navigation from './Containers/Navigation';


import { Footer } from './Components';

// Styling (TODO: Add babel-plugin-react-css-modules)
import './App.css';

const App = () => (
  <div className='App_Container'>
    <Navigation />
    <Route exact path="/" component={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/dashboard/session/create" component={CreateSession} />
    <Footer />
  </div>
);

export default withRouter(App);
