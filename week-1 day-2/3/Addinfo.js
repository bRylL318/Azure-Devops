import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class Addinfo extends Component {
  state = {
    name: '',
    dob: '',
    email: '',
    contact: '',
    about: '',
    errors: {},
  };


  validateForm = () => {
    const { name, dob, email, contact } = this.state;
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = 'Name should contain alphabets only';
    }

    if (!dob) {
      errors.dob = 'Date of Birth is required';
    } else {
      const today = new Date();
      const dobDate = new Date(dob);
      if (dobDate > today) {
        errors.dob = "Date of Birth can't be greater than today's date";
      }
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!contact) {
      errors.contact = 'Contact Number is required';
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = 'Contact Number should be 10 digits';
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      const { name, dob, email, contact, about } = this.state;
      const userData = { name, dob, email, contact, about };
      this.props.onUpdate(userData);
    }
  };

  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
      [e.target.dob]: e.target.value,
      [e.target.email]: e.target.value
    });

  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h2>User Information Form:</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={this.state.name}
            onChange={this.handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            variant="outlined"
            fullWidth
            value={this.state.dob}
            onChange={this.handleChange}
            error={Boolean(errors.dob)}
            helperText={errors.dob}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={this.state.email}
            onChange={this.handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="Contact Number"
            name="contact"
            variant="outlined"
            fullWidth
            value={this.state.contact}
            onChange={this.handleChange}
            error={Boolean(errors.contact)}
            helperText={errors.contact}
          />
          <TextField
            label="Tell me about yourself"
            name="about"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={this.state.about}
            onChange={this.handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Addinfo;
