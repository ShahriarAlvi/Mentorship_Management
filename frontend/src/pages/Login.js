import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Axios from 'axios';
import UserContext from './UserContext';

export const Login = () => {
    const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/login', formData);
      console.log(response.data.message);
      setUser({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      });
      // Redirect to the welcome page upon successful login
      navigate(`/welcome/${formData.email}`); // Use navigate instead of history.push
    } catch (error) {
      setError('Invalid email or password');
      console.error('Error logging in:', error.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
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

        <button type="submit">Login</button>

        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};
