import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, handleLogout }) => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/register" style={{ marginRight: '10px' }}>Sign Up</Link>
      {!token && <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>}
      <Link to="/users" style={{ marginRight: '10px' }}>All Users</Link>
      {token && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;