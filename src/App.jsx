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
import PlanOroPage from './pages/PlanOroPage';
import PlanPlataPage from './pages/PlanPlataPage';
import PlanAPage from './pages/PlanAPages';
import PlanAsistPage from './pages/PlanAsistPage';
import PrestadoresPage from './pages/PrestadoresPage';
import ProfesionalPage from './pages/ProfesionalPage';
import ComprarPlanPage from './pages/ComprarPlanPage';
import CementerioPage from './pages/CementerioPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/cementerio' exact component={CementerioPage} />
        <Route path='/comprarplan' exact component={ComprarPlanPage} />
        <Route path='/profesional' exact component={ProfesionalPage} />
        <Route path='/prestadores' exact component={PrestadoresPage} />
        <Route path='/planasist' exact component={PlanAsistPage} />
        <Route path='/plana' exact component={PlanAPage} />
        <Route path='/planplata' exact component={PlanPlataPage} />
        <Route path='/planoro' exact component={PlanOroPage} />
        <Route path='/empresa' exact component={BusinessPage} />
        <Route path='/contacto' exact component={ContactPage} />
        <Route path='/servicios' exact component={ServicePage} />
        <Route path='/' exact component={HomePage} />
        <Route path='/' component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
