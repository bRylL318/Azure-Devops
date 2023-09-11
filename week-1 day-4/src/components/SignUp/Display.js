import React, { Component } from 'react';
import SignUp from './SignUp';

class App extends Component {
  state = {
    formDataList: [],
  };

  handleUpdate = (data) => {
    // Add the new form data to the array
    const formDataList = [...this.state.formDataList, data];
    this.setState({ formDataList });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>My React App</h1>
        <SignUp onUpdate={this.handleUpdate} />
        {this.state.formDataList.map((formData, index) => (
          <div
            key={index}
            className="card"
            style={{ width: '18rem', marginTop: '20px', border: '1px solid #ccc' }}
          >
            <div className="card-body">
              <h5 className="card-title">User Information {index + 1}</h5>
              <p className="card-text">
                <strong>Name:</strong> {formData.name}
                <br />
                <strong>Date of Birth:</strong> {formData.dob}
                <br />
                <strong>Email ID:</strong> {formData.email}
                <br />
                <strong>Contact Number:</strong> {formData.contact}
                <br />
                <strong>About Me:</strong> {formData.about}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
