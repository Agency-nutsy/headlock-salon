'use client';
import Link from 'next/link';
import styles from './About.module.css';

const features = [
  { icon: '💇', text: 'Unisex Salon & Makeup Studio' },
  { icon: '♿', text: 'Wheelchair Accessible' },
  { icon: '💳', text: 'Cards & UPI Accepted' },
  { icon: '⭐', text: '4.7 Stars — 229 Reviews' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`}>
      <div className={`container ${styles.grid}`}>
        {/* Left Column — Image Stack */}
        <div className={styles.imageStack} data-aos="fade-right">
          <div className={styles.img1}>
            <img
              src="/salon/1.jpg"
              alt="Headlocks salon interior with styling chairs and wash basins in Lajpat Nagar, Delhi"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.img2}>
            <img
              src="/salon/2.jpg"
              alt="Elegant interior view of Headlocks with arched mirrors and premium decor"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.floatingCard}>
            <span className={styles.floatingRating}>★ 4.7 / 5</span>
            <span className={styles.floatingText}>Based on 229 Google Reviews</span>
          </div>
        </div>

        {/* Right Column — Text */}
        <div className={styles.text} data-aos="fade-left">
          <span className="section-label">OUR STORY</span>
          <h2 className="section-title">Where <span className="gold-text">Craft</span> Meets Luxury</h2>
          <p className={styles.body}>
            Headlocks Unisex Salon is a premium salon and makeup studio nestled in the
            heart of Lajpat Nagar, Delhi. Known for exceptional bridal makeup, expert hair makeovers,
            and meticulous attention to detail, Headlocks has earned a loyal following of clients who
            value quality and professionalism.
          </p>
          <p className={styles.body}>
            From stunning balayage and keratin treatments to relaxing facials and nail art, every
            service is delivered by our talented team of expert stylists in a
            warm, welcoming space designed for comfort and luxury. Rated 4.7★ on Google with over 229
            reviews, our clients consistently praise our friendly team and professional results.
          </p>

          <div className={styles.features}>
            {features.map((f, i) => (
              <div className={styles.pill} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <span className={styles.pillIcon}>{f.icon}</span>
                <span className={styles.pillText}>{f.text}</span>
              </div>
            ))}
          </div>

          <Link href="/team" className={styles.ctaLink}>
            Meet Our Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
