// pages/login.js
import Link from 'next/link';
import Login from '../src/components/login'; // adjust if path differs


export default function Login() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>SMARTRAILNAV</div>
          <nav style={styles.nav}>
            <Link href="/" style={styles.navLink}>Home</Link>
            <Link href="/stations" style={styles.navLink}>Stations</Link>
            <Link href="/facilities" style={styles.navLink}>Facilities</Link>
            <Link href="/locations" style={styles.navLink}>Locations</Link>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Login</h1>
        <form style={styles.form}>
          <input type="email" placeholder="Email" style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          <button type="submit" style={styles.button}>Log In</button>
        </form>
      </main>
    </div>
  );
}

const styles = {
  page: { fontFamily: 'Arial, sans-serif', padding: 20 },
  header: { backgroundColor: '#f8f9fa', padding: '10px 0' },
  navContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: 24, fontWeight: 'bold', marginLeft: 20 },
  nav: { display: 'flex', gap: '15px', marginRight: 20 },
  navLink: { textDecoration: 'none', color: '#333' },
  main: { textAlign: 'center', marginTop: 50 },
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
};
