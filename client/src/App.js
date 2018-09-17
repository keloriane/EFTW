import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';

import 'debug.addIndicators';
import 'TimelineLite';
import Home from './views/Home';
import Highlight from './views/Highlight';
import About from './views/About';
import Events from './views/Events';
import Contact from './views/Contact';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/highlights" component={Highlight}></Route>
            <Route path="/program" component={Events}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
