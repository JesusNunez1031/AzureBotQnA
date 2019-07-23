import React, { Component } from 'react';
//import { Route, Switch } from 'react-router-dom';
import Dashboard from "./containers/Dashboard/Dashboard";
import classes from './App.module.css';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Dashboard/>
      </>
    );
  }
}

export default App;
