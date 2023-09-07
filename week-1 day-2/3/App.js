import React, { Component } from 'react';
import Addinfo from './Addinfo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

class App extends Component {
  state = {
    formData: null, 
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
          <Addinfo onUpdate={this.handleUpdate} />
          {this.state.formData && (
            <Card variant="outlined" style={{ marginTop: '20px' }}>
              <CardContent>
                <h2>User Information</h2>
                <p>Name: {this.state.formData.name}</p>
                <p>Date of Birth: {this.state.formData.dob}</p>
                <p>Email ID: {this.state.formData.email}</p>
                <p>Contact Number: {this.state.formData.contact}</p>
                <p>About Me: {this.state.formData.about}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

export default App;
