'use client';

import { useState } from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    marginTop: 20,
  },
  input: {
    padding: '10px 15px',
    width: '300px',
    fontSize: 16,
    borderRadius: 5,
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: 5,
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
  },
  successMessage: {
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
  },
};

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      // Simulate login success
      setIsLoggedIn(true);
      console.log('Logged in with:', { email, password });
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Log In</button>
      </form>

      {isLoggedIn && <div style={styles.successMessage}>✅ Successfully logged in!</div>}
    </>
  );
}

