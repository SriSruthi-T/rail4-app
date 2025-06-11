// components/FacilitiesSection.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FacilitiesSection() {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const data = [
      {
        src: '/waiting-room.jpg',
        alt: 'Waiting Room',
        title: 'Comfortable Waiting Rooms',
        desc: 'Relax in spacious waiting areas with free Wi-Fi, seating, and refreshments.',
      },
      {
        src: '/food-court.jpg',
        alt: 'Food Court',
        title: 'Food Courts',
        desc: 'Enjoy a variety of cuisines at our food courts available at major stations.',
      },
      {
        src: '/charging-station.jpg',
        alt: 'Charging Stations',
        title: 'Charging Stations',
        desc: 'Charge your devices at convenient stations throughout the premises.',
      },
    ];
    setFacilities(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHighlighted(1); // highlight the second card
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = 'Facilities Section Loaded';
  }, []);

  if (loading) return <p>Loading facilities...</p>;

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Facilities Available</h1>
      <div style={styles.grid}>
        {facilities.map((f, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              backgroundColor: highlighted === index ? '#e6f7ff' : 'white',
            }}
          >
            <Image src={f.src} alt={f.alt} width={300} height={200} style={styles.image} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
      <Link href="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  );
}

const styles = {
  page: { padding: 20, fontFamily: 'Arial, sans-serif' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  grid: { display: 'flex', gap: 20, flexWrap: 'wrap' },
  card: { flex: '1 0 30%', padding: 20, border: '1px solid #ccc', borderRadius: 8 },
  image: { borderRadius: 8, marginBottom: 10 },
  backLink: { display: 'block', marginTop: 30, color: '#0070f3', textDecoration: 'none' }
};
