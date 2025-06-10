import React from 'react';

export default function Contact() {
  return (
    <main className="contact-page">
      <header className="header">
        <div className="nav-container container">
          <div className="logo">SmartRailNAV</div>
          <nav className="nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/stations" className="nav-link">Stations</a>
            <a href="/facilities" className="nav-link">Facilities</a>
            <a href="/locations" className="nav-link">Locations</a>
            <a href="/contact" className="nav-link active">Contact</a>
          </nav>
        </div>
      </header>

      <section className="contact-section container">
        <h1>Contact Us</h1>
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>If you have any questions or feedback, feel free to contact us using the form or the information below.</p>
            <ul>
              <li><strong>Email:</strong> support@smartrailnav.com</li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Address:</strong> SmartRailNAV HQ, Rail Avenue, New Delhi, India</li>
            </ul>
          </div>

          <form className="contact-form">
            <h2>Send a Message</h2>
            <label>
              Name:
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" placeholder="Your Email" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 SmartRailNAV. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .contact-page {
          font-family: 'Inter', sans-serif;
          background: #f9f9f9;
          color: #333;
        }
        .header {
          background: #0b3d91;
          padding: 1rem 0;
          color: white;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: auto;
          padding: 0 1rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .nav {
          display: flex;
          gap: 1rem;
        }
        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }
        .nav-link.active {
          text-decoration: underline;
        }
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 2rem 1rem;
        }
        .contact-section h1 {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .contact-info ul {
          list-style: none;
          padding: 0;
        }
        .contact-info li {
          margin-bottom: 0.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          font-weight: 500;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-top: 0.25rem;
          font-size: 1rem;
        }
        .contact-form button {
          padding: 0.75rem;
          background-color: #0b3d91;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        .contact-form button:hover {
          background-color: #092c6b;
        }
        .footer {
          background: #0b3d91;
          color: white;
          text-align: center;
          padding: 1rem 0;
          margin-top: 2rem;
        }
      `}</style>
    </main>
  );
}

