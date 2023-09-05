import React, { Component } from 'react';

class Display extends Component {
 state = {
      person: {
        name: 'John Doe',
        age: 30,
        location: 'New York',
      },
    };
  
  
  render() {
    return (
      <div>
        <h2>Person Information</h2>
        <p>Name: {this.state.person.name}</p>
        <p>Age: {this.state.person.age}</p>
        <p>Location: {this.state.person.location}
        </p>
      </div>
    );
  }
}

export default Display;

