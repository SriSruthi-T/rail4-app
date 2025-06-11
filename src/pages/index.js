'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'; // ✅ Import Head from next/head

export default function Home() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState('');

  // Effect 1: Show welcome message after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeMessage('Welcome to SmartRailNAV 🚆');
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Effect 2: Set document title
  useEffect(() => {
    document.title = 'Home | SmartRailNAV';
  }, []);

  // Effect 3: Show live time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>SMARTRAILNAV</div>
          <nav style={styles.nav}>
            <Link href="/stations" style={styles.navLink}>Stations</Link>
            <Link href="/facilities" style={styles.navLink}>Facilities</Link>
            <Link href="/locations" style={styles.navLink}>Locations</Link>
            <Link href="/login" style={styles.navLink}>Log In</Link>
            <a href="#contact" style={styles.ctaNav}>Contact Us</a>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        {loading ? (
          <p style={styles.subtitle}>Loading...</p>
        ) : (
          <>
            <h2 style={styles.welcome}>{welcomeMessage}</h2>
            <h1 style={styles.title}>Explore Railway Stations, Facilities, and Locations</h1>
            <p style={styles.subtitle}>Find your nearest station, explore facilities, and get directions with ease.</p>
            <p style={{ marginBottom: 20, fontSize: 16 }}>Current Time: {time}</p>
            <Link href="/stations" style={styles.button}>Find a Station</Link>
            <div style={styles.imageWrapper}>
              <Image src="/rail4.jpg" alt="Train Station" width={1000} height={500} style={styles.image} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
const styles = {
  page: { fontFamily: 'Arial, sans-serif', padding: 20 },
  header: { backgroundColor: '#f8f9fa', padding: '10px 0', color: '#0070f3' },
  navContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: 24, fontWeight: 'bold', marginLeft: 20 },
  nav: { display: 'flex', gap: '15px', marginRight: 20 },
  navLink: { textDecoration: 'none', color: '#333' },
  ctaNav: { textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' },
  main: { textAlign: 'center', marginTop: 50 },
  welcome: { fontSize: 22, color: '#0070f3', marginBottom: 10 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#0070f3' },
  subtitle: { fontSize: 18, margin: '10px 0 20px', color: '#0070f3' }, // ✅ fixed
  button: { backgroundColor: '#0070f3', color: '#fff', padding: '10px 20px', borderRadius: 5, textDecoration: 'none' },
  imageWrapper: { marginTop: 30 },
  image: { borderRadius: 10, width: '100%', height: 'auto' }
};

