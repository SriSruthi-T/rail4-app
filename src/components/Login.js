// src/components/login.js
use 'client';
import { useState, useEffect } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    console.log('Login component mounted');
    document.title = 'Login | SmartRailNAV';
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      setError('Enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (email === 'user@example.com' && password === 'password123') {
      setSuccess('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.href = '/stations';
      }, 1500);
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Login</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Log In</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}
    </div>
  );
}

const styles = {
  page: { fontFamily: 'Arial, sans-serif', padding: 40, textAlign: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
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
  error: { color: 'red', marginTop: 15 },
  success: { color: 'green', marginTop: 15 },
};

