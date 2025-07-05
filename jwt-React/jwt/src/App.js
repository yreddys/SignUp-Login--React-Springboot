import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import MyNotes from './components/MyNotes';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogout = () => {
    setToken(null);
    alert('Logged out');
  };

  return (
    <Router>
      <Navbar token={token} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<UserList token={token} />} />
        <Route path="/notes" element={<NoteForm token={token} />} />
        <Route path="/mynotes" element={<MyNotes token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;
