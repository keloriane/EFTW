import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch }from 'react-router-dom'
import './App.scss';

import 'debug.addIndicators';
import 'TimelineLite';

class App extends Component {
  render() {
    return (  
      <div className="app">       
          <h1>Sup !!!</h1>
      </div>
    );
  }
}

export default App;
