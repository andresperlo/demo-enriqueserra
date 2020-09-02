import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Error404 from './pages/Error404';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path='/' exact component={HomePage}/>
        <Route path='/' component={Error404}/>
      </Switch>
    </Router>
  );
}

export default App;
