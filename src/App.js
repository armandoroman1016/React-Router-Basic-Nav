import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <Navigation />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' component = {About} />
        <Route path = '/contact' component = {Contact} />
      </Switch>
    </Router>
  </div>
);

export default App;
