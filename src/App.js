import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // define state
  state = {
    cohortName: 'Tarjan',
    salutation: 'Swing Swing',
    name: 'Arthur'
  }

  render() {
    return (
      <div>
      <h1>{this.state.cohortName} State Learning</h1>

          <div>
          {this.state.salutation}! My name is {this.state.name}
          </div>
      </div>
    )
  }
}

export default App;
