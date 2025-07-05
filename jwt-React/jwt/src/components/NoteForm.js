import React, { useState } from 'react';
import { saveNote } from './api';
import { useNavigate } from 'react-router-dom';

const NoteForm = ({ token }) => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert('You must be logged in to save a note');
      navigate('/login');
      return;
    }
    try {
      await saveNote({ content }, token);
      alert('Note saved successfully!');
      setContent('');
    } catch (err) {
      alert('Failed to save note');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Save a Note</h2>
      <textarea
        rows="4"
        cols="50"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here"
        required
      />
      <br />
      <button type="submit">Save Note</button>
    </form>
  );
};

export default NoteForm;
