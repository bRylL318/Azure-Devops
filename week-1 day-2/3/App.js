import React, { Component } from 'react';
import AddInfo from './Addinfo';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

class App extends Component {
  state = {
    formData: null, // To store the user input data
  };

  handleUpdate = (data) => {
    this.setState({ formData: data });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <span style={{ flex: 1 }}>
              <span style={{ marginRight: '20px', cursor: 'pointer' }}>Home</span>
              <span style={{ marginRight: '20px', cursor: 'pointer' }}>About Us</span>
              <span style={{ marginRight: '20px', cursor: 'pointer' }}>Contact</span>
            </span>
          </Toolbar>
        </AppBar>
        <div style={{ padding: '20px' }}>
          <h1>My React App</h1>
          <AddInfo onUpdate={this.handleUpdate} />
          {this.state.formData && (
            <div
              className="card"
              style={{ width: '18rem', marginTop: '20px', border: '1px solid #ccc' }}
            >
              <div className="card-body">
                <h5 className="card-title">User Information</h5>
                <p className="card-text">
                  <strong>Name:</strong> {this.state.formData.name}
                  <br />
                  <strong>Date of Birth:</strong> {this.state.formData.dob}
                  <br />
                  <strong>Email ID:</strong> {this.state.formData.email}
                  <br />
                  <strong>Contact Number:</strong> {this.state.formData.contact}
                  <br />
                  <strong>About Me:</strong> {this.state.formData.about}
                </p>

              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
