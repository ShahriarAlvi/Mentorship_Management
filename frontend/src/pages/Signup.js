import React, { useState } from 'react';
import './Signup.css';
import Axios from 'axios';

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    successMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here
    try {
        const response = await Axios.post('http://localhost:5000/signup', formData);
        console.log(response.data.message);
        setFormData({ ...formData, successMessage: 'User registered successfully', error: '' });
        // Handle success, e.g., show a success message or redirect to login page
      } catch (error) {
        if (error.response.data.error === 'Email is already registered') {
            setFormData({ ...formData, error: 'Email is already registered', successMessage: '' });
          } else {
            console.error('Error signing up:', error.response.data.error);
            // Handle other errors, e.g., show a generic error message to the user
          }
      }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
      {formData.error && <div className="error-message">{formData.error}</div>}
      {formData.successMessage && <div className="success-message">{formData.successMessage}</div>}
    </div>
  );
};

export default Signup;
