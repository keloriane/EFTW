import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';

import 'debug.addIndicators';
import 'TimelineLite';
import {Home} from './views/Home';
import Highlight from './views/Highlight';
import About from './views/About';
import Events from './views/Events';
import Contact from './views/Contact';

import YearGallery from './components/Highlight/Gallery/YearGallery';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/highlights" component={Highlight}></Route>
            <Route exact path="/highlights/:year" component={YearGallery}></Route>
            <Route exact path="/program" component={Events}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
