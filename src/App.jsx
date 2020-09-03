import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Error404 from './pages/Error404';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import BusinessPage from './pages/BusinessPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/demo-enriqueserra/empresa' exact component={BusinessPage} />
        <Route path='/demo-enriqueserra/contacto' exact component={ContactPage} />
        <Route path='/demo-enriqueserra/servicios' exact component={ServicePage} />
        <Route path='/demo-enriqueserra' exact component={HomePage} />
        <Route path='/' component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
