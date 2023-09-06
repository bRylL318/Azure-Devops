import React, { Component } from 'react';
import GroceryList from './GroceryList';

class GroceryApp extends Component {
  state = {
    groceries: ['Apples', 'Bananas', 'Milk', 'Bread'],
  };

  render() {
    return (
      <div>
        <h1>My Grocery App</h1>
        <GroceryList groceries={this.state.groceries} />
      </div>
    );
  }
}

export default GroceryApp;
