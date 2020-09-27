import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Header from './pages/Header'
import Register from './pages/Register'
import Uppercase from './pages/Uppercase'
import BMIcalculator from './pages/BMIcalculator'
import Todos from './pages/Todos'
import Home from './pages/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Halo, Selamat Datang</h1>
      <Home />
      <Header />
      <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/uppercase">
        <Uppercase />
      </Route>
      <Route path="/bmicalculator">
        <BMIcalculator />
      </Route>
      <Route path="/todos">
        <Todos />
      </Route>
      </Switch>

      

    </div>
    </Router>
  );
}

export default App;
