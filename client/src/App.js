import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group'; 
import './App.scss';

import 'debug.addIndicators';
import 'TimelineLite';
import {Home} from './views/Home';
import Highlight from './views/Highlight';
import About from './views/About';
import Events from './views/Events';
import Contact from './views/Contact';

import YearGallery from './components/Highlight/Gallery/YearGallery';

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
          {/* <Route render={({location}) => (
            <TransitionGroup>
          <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/highlights" component={Highlight}></Route>
            <Route exact path="/highlights/:year" component={YearGallery}></Route>
            <Route exact path="/program" component={Events}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
          </CSSTransition>
          </TransitionGroup>
          )}/> */}
          </div>
        </Router>
    );
  }
}

export default App;
