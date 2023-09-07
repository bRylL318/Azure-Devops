import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Addinfo from './Addinfo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

class App extends Component {
  state = {
    userData: null,
    isSubmitted: false, // Track whether the form is submitted
    activeTab: 0, // Track the active tab (0 for Home, 1 for About Us, 2 for Contact)
  };

  handleUserDataUpdate = (userData) => {
    this.setState({ userData, isSubmitted: true }); // Set isSubmitted to true when the form is submitted
  };

  handleTabChange = (event, newValue) => {
    this.setState({ activeTab: newValue });
  };

  render() {
    const { isSubmitted, userData, activeTab } = this.state;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">My App</Typography>
            <Tabs value={activeTab} onChange={this.handleTabChange}>
              <Tab label="Home" />
              <Tab label="About Us" />
              <Tab label="Contact" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          {activeTab === 0 && (
            <div>
              <h2>Welcome to the Home Page</h2>
             
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h2>About Us</h2>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h2>Contact Us</h2>
            </div>
          )}
          <Addinfo onUpdate={this.handleUserDataUpdate} />
          {isSubmitted && userData && (
            <Card style={{ marginTop: '20px' }}>
              <CardContent>
                <h2>User Information:</h2>
                <div>Name: {userData.name}</div>
                <div>Date of Birth: {userData.dob}</div>
                <div>Email: {userData.email}</div>
                <div>Contact Number: {userData.contact}</div>
                <div>About Me: {userData.about}</div>
              </CardContent>
            </Card>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
