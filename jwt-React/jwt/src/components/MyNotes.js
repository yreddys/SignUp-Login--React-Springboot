import React, { useEffect, useState } from 'react';
import { getMyNotes } from './api';
import { useNavigate } from 'react-router-dom';

const MyNotes = ({ token }) => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert('Please login to view your notes');
      navigate('/login');
      return;
    }
    getMyNotes(token)
      .then((res) => setNotes(res.data))
      .catch(() => alert('Failed to fetch notes'));
  }, [token, navigate]);

  return (
    <div>
      <h2>My Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyNotes;
