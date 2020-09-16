import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // define state
  state = {
    cohortName: 'Tarjan',
    salutation: 'Swing Swing',
    name: 'Arthur',
    whereILive: 'Nokomis East',
    pizzaTopping: 'green olives'
  }

  render() {
    return (
      <div>
      <h1>{this.state.cohortName} State Learning</h1>

          <div>
          {this.state.salutation}! My name is {this.state.name}
          </div>
          <ul>
            <li>My name is {this.state.name}.</li>
            <li>I live in {this.state.whereILive}</li>
            <li>My favorite pizza topping is {this.state.pizzaTopping}</li>
          </ul>
      </div>
    )
  }
}

export default App;
