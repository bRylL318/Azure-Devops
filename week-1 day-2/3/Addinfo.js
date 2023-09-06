import React, { Component } from 'react';

class Addinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dob: '',
      email: '',
      contact: '',
      about: '',
      errors: {},
    };
  }

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
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="User-form">
        <h2>User Information Form:</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input
              type="text"
              name="contact"
              value={this.state.contact}
              onChange={this.handleChange}
            />
            {errors.contact && <p className="error">{errors.contact}</p>}
          </div>
          <div className="form-group">
            <label>Tell me about yourself:</label>
            <textarea
              name="about"
              value={this.state.about}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Addinfo;
