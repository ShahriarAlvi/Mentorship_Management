import React, { useState } from 'react';
import './App.css';
import UserContext from './pages/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Navbar } from './pages/Navbar';
import {Welcome } from './pages/Welcome';
import {Profile } from './pages/Profile';

function App() {
  const [user, setUser] = useState({});
  
  return (
    
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/welcome/:email' element={<Welcome />} />
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
