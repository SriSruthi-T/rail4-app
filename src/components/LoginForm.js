'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px', // ✅ Must be a string with units
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
};

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    console.log("LoginForm mounted");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Prevents default page reload
    console.log("Logging in:", email, password);

    // ✅ Dummy login logic
    if (email === 'srisruthi@gmail.com' && password === '12345678') {
      alert('Login successful!');
      router.push('/stations'); // ✅ Redirect to stations page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
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
      <button type="submit" style={styles.button}>
        Log In
      </button>
    </form>
  );
}
