import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/editor" component={Home} />
      </Switch>
    </Router>
  );
}
