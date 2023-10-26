const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
app.use(cors());

const port = 5000;

// Replace these with your actual database credentials
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    try {
      // Check if the email is already registered
      const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
      db.query(checkEmailQuery, [email], async (checkEmailErr, checkEmailResult) => {
        if (checkEmailErr) {
          console.error('Error checking email:', checkEmailErr);
          return res.status(500).json({ error: 'Error signing up' });
        }
  
        if (checkEmailResult.length > 0) {
          // Email is already registered
          return res.status(400).json({ error: 'Email is already registered' });
        }
  
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);
  
        const insertUserQuery = 'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
        db.query(insertUserQuery, [firstName, lastName, email, hashedPassword], (err, result) => {
          if (err) {
            console.error('Error inserting user:', err);
            res.status(500).json({ error: 'Error signing up' });
          } else {
            console.log('User signed up successfully');
            res.status(200).json({ message: 'User signed up successfully' });
          }
        });
      });
    } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).json({ error: 'Error signing up' });
    }
  });

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const getUserQuery = 'SELECT * FROM users WHERE email = ?';
      db.query(getUserQuery, [email], async (getUserErr, getUserResult) => {
        if (getUserErr) {
          console.error('Error retrieving user:', getUserErr);
          return res.status(500).json({ error: 'Error logging in' });
        }
  
        if (getUserResult.length === 0) {
          return res.status(400).json({ error: 'Invalid email or password' });
        }
  
        const hashedPassword = getUserResult[0].password;
  
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  
        if (!isPasswordValid) {
          return res.status(400).json({ error: 'Invalid email or password' });
        }
  
        // Successfully logged in
        res.status(200).json({ message: 'Login successful' });
      });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Error logging in' });
    }
  });

  app.get('/user/:email', async (req, res) => {
    const email = req.params.email;
    try {
      const getUserQuery = 'SELECT * FROM users WHERE email = ?';
      db.query(getUserQuery, [email], (getUserErr, getUserResult) => {
        if (getUserErr) {
          console.error('Error retrieving user data:', getUserErr);
          return res.status(500).json({ error: 'Error fetching user data' });
        }
  
        if (getUserResult.length === 0) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        const userData = {
          firstName: getUserResult[0].firstName,
          lastName: getUserResult[0].lastName,
          // Add other user properties as needed
        };
  
        res.json(userData);
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Error fetching user data' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
