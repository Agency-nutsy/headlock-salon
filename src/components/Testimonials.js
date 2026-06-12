'use client';
import styles from './Testimonials.module.css';

const reviews = [
  {
    text: "Had such an amazing service by bunny✨\nThe experience couldn’t have been nicer and i LOVED my hair.\nI will definitely visit again ♥️",
    name: 'Anchal',
    service: 'Hair Service',
    stars: 5,
  },
  {
    text: "I recently had the pleasure of visiting Headlock Salon located in Lajpat Nagar, and I must express my utmost satisfaction with the services rendered. This establishment stands out for its commitment to quality and customer care, making it a noteworthy choice for anyone seeking hair and beauty treatments. One of the highlights of my experience was the hair coloring service provided by Bunny Vohra. Their expertise in color application is truly commendable, demonstrating a keen understanding of color theory and a meticulous approach to achieving the desired result. The final outcome not only met but exceeded my expectations, showcasing vibrant hues that complemented my features beautifully.",
    name: 'Shweta Negi',
    service: 'Hair Coloring',
    stars: 5,
  },
  {
    text: "My experience has been amazing everytime i come to this salon and i have been coming here since years now the staff is amazing vinay atul shavaiz kaif everyone and i would highly highly recommend others to get their services done from here and then see the results 💝💝",
    name: 'Tabina Mir',
    service: 'Salon Services',
    stars: 5,
  },
  {
    text: "Exceptional quality of service and such generosity in giving discounts. Kaif was a brilliant hairdresser and Vinay is so very efficient in his client facing capacity!",
    name: 'Nadia Faruque',
    service: 'Haircut',
    stars: 5,
  },
  {
    text: "Went to Headlock to get my hair coloured for the first time i was very happy with the results. Atul and other staff members are amazing. Special mention to Bunny as he suggested the right colour and style. My go to person from now on for hair colours and styling.\nThankyou!!",
    name: 'rashi tiwari',
    service: 'Hair Coloring & Styling',
    stars: 5,
  },
  {
    text: "Amazing experience at head look! Mr. Arman was incredibly professional and friendly, making me feel comfortable from the moment I walked in. The salon was clean, well-organized, and had a relaxing ambiance. My stylist did a fantastic job, paying attention to every detail and ensuring I was happy with the result. The prices were reasonable for the quality of service provided. I’ll definitely be coming back and would highly recommend this salon to anyone looking for top-notch service!",
    name: 'Himanshu Sharma',
    service: 'Hair Styling',
    stars: 5,
  },
  {
    text: "Visited headlocks salon for Hair color and nanoplastia, services are amazing. Special thanks to Atul(Jaani) & Mr Bunny for the amazing services provided. Both are very humble. I would highly recommend to visit & get the services done.",
    name: 'Apurva Saxena',
    service: 'Hair Color & Nanoplastia',
    stars: 5,
  },
  {
    text: "Atul really put my imagination into reality, amazing work! Super friendly with clients, made me really comfortable and I loved his work! <3",
    name: 'Amoolya Tripathi',
    service: 'Hair Service',
    stars: 5,
  },
  {
    text: "I had a wonderful experience of hair colour transformation. It was a tough task which was executed with precision and years of experience by Bunny with a great support by Atul and special mention of lucky for his amazing cold coffee as it keeps u charged. Bunny is a great hair artist and now my go to person for hair cut, styling and colour. Kudos u guys.",
    name: 'Shikha Jain',
    service: 'Hair Color Transformation',
    stars: 5,
  },
  {
    text: "Had a haircut and hair colour today , staff is truly caring check on you if you need water , coffee or anything else .\n\nThe work done was amazing and truly appreciated",
    name: 'pritika sharma',
    service: 'Haircut & Hair Color',
    stars: 5,
  },
];

// Duplicate reviews to create a seamless infinite loop
const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section id="reviews" className={`section ${styles.testimonials}`}>
      <div className={styles.grain} aria-hidden="true"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className={styles.headerRow} data-aos="fade-up">
          <div className={styles.headerLeft}>
            <span className="section-label">WHAT CLIENTS SAY</span>
            <h2 className="section-title">229 Reasons to <span className="gold-text">Trust</span> Us</h2>
          </div>
        </div>

        <div className={styles.carouselWrap} data-aos="fade-up" data-aos-delay="100">
          <div className={styles.track}>
            {duplicatedReviews.map((review, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.stars}>
                  {'★'.repeat(review.stars).split('').map((s, j) => (
                    <span key={j} className={styles.star}>★</span>
                  ))}
                </div>
                <div className={styles.quoteDecor}>&ldquo;</div>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.footer}>
                  <span className={styles.name}>{review.name}</span>
                  {review.service && <span className={styles.service}>{review.service}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Rating Bar */}
        <div className={styles.googleBar} data-aos="fade-up">
          <div className={styles.googleRating}>
            <span className={styles.googleStar}>⭐</span>
            <span className={styles.googleScore}>4.7 / 5 on Google</span>
            <span className={styles.googleCount}>Based on 229 reviews</span>
          </div>
          <a
            href="https://maps.app.goo.gl/pLdkFuG9oHy7ndHg9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
