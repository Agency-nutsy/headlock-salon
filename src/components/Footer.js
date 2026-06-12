'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Our Team', href: '/team' },
  { label: 'Offers', href: '/offers' },
  { label: 'Contact', href: '/contact' },
];

const trustSignals = [
  { icon: '⭐', text: '4.7★ Google Rating' },
  { icon: '📝', text: '229 Reviews' },
  { icon: '💇', text: 'Unisex Salon & Makeup' },
  { icon: '♿', text: 'Wheelchair Accessible' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Col 1 — Logo & About */}
          <div className={styles.col}>
            <Link href="/" className={styles.logo}>
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M24 4L20 8L16 6L18 10L14 12L18 14L24 42L30 14L34 12L30 10L32 6L28 8L24 4Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M24 12L20 28L24 42L28 28L24 12Z" fill="currentColor" fillOpacity="0.15"/>
                <circle cx="24" cy="4" r="1.5" fill="currentColor" opacity="0.8"/>
              </svg>
              <span>HEADLOCKS</span>
            </Link>
            <p className={styles.tagline}>Luxury Hair, Makeup & Beauty Redefined.</p>
            <p className={styles.blurb}>
              Delhi&apos;s trusted unisex salon in Lajpat Nagar. Expert stylists, premium services,
              and a warm, welcoming space for everyone.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/headlockslajpatnagar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}>📷</a>
              <a href="https://wa.me/919211785275" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialIcon}>💬</a>
              <a href="https://maps.app.goo.gl/pLdkFuG9oHy7ndHg9" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className={styles.socialIcon}>📍</a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Trust Signals */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Why Choose Us</h4>
            <div className={styles.trustList}>
              {trustSignals.map((signal, i) => (
                <div className={styles.trustItem} key={i}>
                  <span className={styles.trustIcon}>{signal.icon}</span>
                  <span>{signal.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p>📍 E Block, E-103, near Afghani Dhaba, Block I, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024</p>
              <p><a href="tel:+919211785275">📞 092117 85275</a></p>
              <p>🕐 10:00 AM – 10:00 PM (All Days)</p>
            </div>
            <a
              href="https://wa.me/919211785275?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ marginTop: 'var(--space-4)', width: '100%', justifyContent: 'center' }}
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        <hr className="gold-line" style={{ margin: 'var(--space-10) 0 var(--space-6)' }} />

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Headlocks Unisex Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
