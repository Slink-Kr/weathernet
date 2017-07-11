import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home     from './Components/Home.jsx'
import App      from './App.jsx'

const RouterComponent = () => (
  <Router>
      <App>
        <Route exact path="/" component={Home}/>
      </App>
  </Router>
)
export default RouterComponent