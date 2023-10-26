import React, { useState } from 'react';
import './App.css';
import UserContext from './pages/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Navbar } from './pages/Navbar';
import {Welcome } from './pages/Welcome';

function App() {
  const [user, setUser] = useState({});
  return (
    
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path="/welcome/:email" element={<Welcome />} />
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
