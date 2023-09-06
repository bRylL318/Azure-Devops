import React, { Component } from 'react';
import Addinfo from './Addinfo';

class App extends Component {
  state = {
    userData: null,
  };

  handleUserDataUpdate = (userData) => {
    this.setState({ userData });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My App</h1>
        </header>
        <div className="App-container">
          <Addinfo onUpdate={this.handleUserDataUpdate} />
          {this.state.userData && (
            <div className="User-info">
              <h2>User Information:</h2>
              <div>Name: {this.state.userData.name}</div>
              <div>Date of Birth: {this.state.userData.dob}</div>
              <div>Email: {this.state.userData.email}</div>
              <div>Contact Number: {this.state.userData.contact}</div>
              <div>About Me: {this.state.userData.about}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
