'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'Do I need to book an appointment or can I walk in?',
    a: 'Appointments are recommended for the best experience. You can book easily via WhatsApp at 092117 85275. Walk-ins are welcome based on availability.',
  },
  {
    q: 'What services does Headlocks offer?',
    a: 'We offer a full range of beauty services including bridal makeup, haircuts, hair colour, balayage, babylights, nanoplastia, keratin treatment, hair spa, facials, pedicure, manicure, nail extensions, and nail art.',
  },
  {
    q: 'Is Headlocks wheelchair accessible?',
    a: 'Yes! Our salon has a wheelchair-accessible entrance and wheelchair-accessible restroom.',
  },
  {
    q: 'Do you do bridal makeup?',
    a: 'Absolutely! Bridal makeup is one of our specialties. Our Expert Stylists personally handles bridal bookings. We offer complete bridal packages from pre-bridal prep to your wedding day look.',
  },
  {
    q: 'What are your operating hours?',
    a: 'We are open every day from 10:00 AM to 10:00 PM, including weekends and holidays.',
  },
  {
    q: 'How much does a keratin treatment cost?',
    a: 'Pricing depends on hair length and the specific treatment. Please contact us via WhatsApp or call 092117 85275 for a personalized quote.',
  },
  {
    q: 'Where is Headlocks located?',
    a: 'We are at E Block, E-103, near Afghani Dhaba, Block I, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024. Look for us above the Dominos outlet.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, credit cards, debit cards, and NFC mobile payments (Google Pay, PhonePe, etc.).',
  },
  {
    q: 'Is Headlocks good for kids?',
    a: 'Yes, our salon is kid-friendly and we welcome young clients.',
  },
  {
    q: 'Can I see your work before booking?',
    a: 'Yes! Check out our Gallery page or visit our Instagram @headlockslajpatnagar to see our latest transformations and client work.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(prev => prev === i ? null : i);
  };

  return (
    <section className={`section ${styles.faq}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">FREQUENTLY ASKED</span>
          <h2 className="section-title">Questions & <span className="gold-text">Answers</span></h2>
        </div>

        <div className={styles.list} data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openIndex === i ? 'active' : ''}`} key={i}>
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{faq.q}</span>
                <svg
                  className="faq-chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
                style={{
                  maxHeight: openIndex === i ? '300px' : '0',
                }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
