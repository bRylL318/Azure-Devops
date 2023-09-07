import React, { Component } from 'react';

class Addinfo extends Component {
  state = {
    name: '',
    dob: '',
    email: '',
    contact: '',
    about: '',
    error: {
      nameError: '',
      dobError: '',
      emailError: '',
      contactError: '',
    },
    formValid: false,
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value }, () => {
      this.validateField(id, value);
    });
  };

  validateField = (field, value) => {
    let formValid = this.state.formValid;
    let error = { ...this.state.error };

    switch (field) {
      case 'name':
        if (!value.trim()) {
          formValid = false;
          error.nameError = 'Name is required';
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          formValid = false;
          error.nameError = 'Name should contain alphabets only';
        } else {
          formValid = true;
          error.nameError = '';
        }
        break;
      case 'dob':
        const currentDate = new Date();
        const selectedDate = new Date(value);
        if (!value.trim()) {
          formValid = false;
          error.dobError = 'Date of Birth is required';
        } else if (selectedDate > currentDate) {
          formValid = false;
          error.dobError = 'Date of Birth cannot be greater than today';
        } else {
          formValid = true;
          error.dobError = '';
        }
        break;
      case 'email':
        if (!value.trim()) {
          formValid = false;
          error.emailError = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          formValid = false;
          error.emailError = 'Invalid email format';
        } else {
          formValid = true;
          error.emailError = '';
        }
        break;
      case 'contact':
        if (!value.trim()) {
          formValid = false;
          error.contactError = 'Contact Number is required';
        } else if (!/^\d{10}$/.test(value)) {
          formValid = false;
          error.contactError = 'Contact Number should be 10 digits';
        } else {
          formValid = true;
          error.contactError = '';
        }
        break;
      default:
        break;
    }

    this.setState({ formValid, error });
  };

  handleSubmit = () => {
    if (this.state.formValid) {
      const formData = {
        name: this.state.name,
        dob: this.state.dob,
        email: this.state.email,
        contact: this.state.contact,
        about: this.state.about,
      };
      this.props.onUpdate(formData); 
    } else {
      alert('Please fill in the required fields correctly.');
    }
  };

  render() {
    return (
      <div>
        <label>Enter Name</label>
        <input
          type="text"
          placeholder="Please enter name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>{this.state.error.nameError}</p>

        <label>Enter Date of Birth</label>
        <input
          type="date"
          id="dob"
          value={this.state.dob}
          onChange={this.handleChange}
        />
        <p>{this.state.error.dobError}</p>

        <label>Enter Email</label>
        <input
          type="email"
          placeholder="Please enter email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <p>{this.state.error.emailError}</p>

        <label>Enter Contact Number</label>
        <input
          type="tel"
          placeholder="Please enter contact number"
          id="contact"
          value={this.state.contact}
          onChange={this.handleChange}
        />
        <p>{this.state.error.contactError}</p>

        <label>Tell Me About Yourself</label>
        <textarea
          placeholder="Write something about yourself"
          id="about"
          value={this.state.about}
          onChange={this.handleChange}
        />

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Addinfo;
