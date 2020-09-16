import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Creatures from './Creatures'

class App extends Component {
  // define state
  state = {
    cohortName: 'Tarjan',
    salutation: 'Swing Swing',
    user: {
      name: 'Arthur',
      whereILive: 'Uptown',
      pizzaTopping: 'roasted red peppers'
    }
  }

  // Mutates the state and user object
  // this.state.user.pizzaTopping = newPizzaTopping;

  onChangePizza = (event) => {
    let newPizzaTopping = event.target.value;
    console.log(`changed pizza topping to: `, newPizzaTopping);

    /*
    let oldUser = this.state.user;
    let newUser = {
      ...oldUser,
      pizzaTopping: newPizzaTopping
    }
    
    this.setState({
      user: newUser
    });
    */

    this.setState({
      // Create a new user object for our state
     // aka "immutable" state
     // like a new carbon copy 
      user: {
        // include data from existing user object
        // name: this.state.user.name,
        // whereILive: this.state.user.whereILive,
        // modify new state
        // pizzaTopping: newPizzaTopping

        // New syntax
        // creates a new object
        ...this.state.user,
        pizzaTopping: newPizzaTopping
      }
    })
  }

  render() {
    console.log('state', this.state)
    return (
      <div>
      <h1>{this.state.cohortName} State Learning</h1>

          <div>
            {this.state.salutation}! My name is {this.state.user.name}
          </div>
          <ul>
            <li>My name is {this.state.user.name}.</li>
            <li>I live in {this.state.user.whereILive}.</li>
            <li>My favorite pizza topping is {this.state.user.pizzaTopping}.</li>
          </ul>

          <h4>Edit user form</h4>
          <input type="text" placeholder="Favorite Pizza Topping" onChange={this.onChangePizza}/>

          <h4>Mythical Creatures</h4>
          <Creatures />
      </div>
    )
  }
}

export default App;
