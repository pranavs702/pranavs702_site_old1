import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe';
import Git from './components/pages/Git';
import LinkedIn from './components/pages/LinkedIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/projects' component={Projects} />
          <Route path='/git' component={Git} />
          <Route path='/linkedin' component={LinkedIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
