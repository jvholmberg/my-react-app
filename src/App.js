import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import Dashboard from './Containers/Dashboard';
import Landing from './Containers/Landing';

import './App.css';

const mapStateToProps = state => {
  return {  };
};

const mapDispatchToProps = dispatch => {
  return {  };
};

const App = () => (
  <div>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/" component={Landing} />
  </div>
);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
