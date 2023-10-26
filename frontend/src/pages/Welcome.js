import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from './UserContext';

export const Welcome = () => {
    const { user, setUser } = useContext(UserContext);
    const { email } = useParams();
  
    useEffect(() => {
      // Fetch user data using the email parameter
      // Example: Fetch data from your API using Axios or fetch
      const fetchData = async () => {
        try {
          // Replace the following with your actual API call
          const response = await fetch(`http://localhost:5000/user/${email}`);
          const data = await response.json();
          setUser(data); // Assuming your API returns user data
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
    }, [email, setUser]);
  
    return (
      <div>
        <h1>Hi to bolo </h1>
        <h1>Welcome {user.firstName} {user.lastName}</h1>
        {/* Add any additional content for the welcome page */}
      </div>
    );
  };
  
