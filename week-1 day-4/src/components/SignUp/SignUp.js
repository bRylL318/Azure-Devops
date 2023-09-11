import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

class SignUp extends Component {
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Enter Name"
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              error={!!this.state.error.nameError}
              helperText={this.state.error.nameError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Enter Date of Birth"
              type="date"
              id="dob"
              value={this.state.dob}
              onChange={this.handleChange}
              error={!!this.state.error.dobError}
              helperText={this.state.error.dobError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Enter Email"
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              error={!!this.state.error.emailError}
              helperText={this.state.error.emailError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Enter Contact Number"
              type="tel"
              id="contact"
              value={this.state.contact}
              onChange={this.handleChange}
              error={!!this.state.error.contactError}
              helperText={this.state.error.contactError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tell Me About Yourself"
              multiline
              minRows={3}
              id="about"
              value={this.state.about}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SignUp;
