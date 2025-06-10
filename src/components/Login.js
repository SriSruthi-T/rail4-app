// components/Login.js
// import { useState, useEffect } from 'react';
import Login from '../src/components/Login'; // Capital L matches filename

export default function LoginPage() {
  return <Login />;
}


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    console.log('Login component mounted');
    document.title = 'Login | SmartRailNAV';
  }, []);

  const validateEmail = (email) => {
    // Basic email pattern check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation checks
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Fake login check (replace this with real API call)
    if (email === 'user@example.com' && password === 'password123') {
      setSuccess('Login successful! Redirecting...');
      setError('');
      // Simulate redirection after success
      setTimeout(() => {
        window.location.href = '/stations'; // Redirect after login
      }, 2000);
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Log In to SmartRailNAV</h1>

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
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50,
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    gap: 15
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    border: '1px solid #ccc'
  },
  button: {
    padding: 10,
    fontSize: 16,
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginTop: 15
  },
  success: {
    color: 'green',
    marginTop: 15
  }
};
