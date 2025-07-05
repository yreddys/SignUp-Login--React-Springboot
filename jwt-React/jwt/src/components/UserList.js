import React, { useEffect, useState } from 'react';
import { getAllUsers } from './api';
import { useNavigate } from 'react-router-dom';

const UserList = ({ token }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    getAllUsers(token)
      .then((res) => setUsers(res.data))
      .catch(() => alert('Failed to fetch users'));
  }, [token, navigate]);

  return (
    <div>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

