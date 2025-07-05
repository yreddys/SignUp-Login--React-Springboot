import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>JWT Auth App Home</h1>
      <p>Use the navigation above to interact with the app.</p>
      <ul>
        <li>Sign Up – Register a new user</li>
        <li>Login – Authenticate and receive JWT</li>
        <li>All Users – View all registered users (login required)</li>
        <li>Save Note – Create a note (login required)</li>
        <li>My Notes – View your saved notes</li>
      </ul>
    </div>
  );
};

export default Home;