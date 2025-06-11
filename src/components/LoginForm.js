// src/components/LoginForm.js
'use client';

import { useState, useEffect } from 'react';

const styles = {
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 },
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
};

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log("LoginForm mounted");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    // Add login logic
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Log In</button>
    </form>
  );
}
