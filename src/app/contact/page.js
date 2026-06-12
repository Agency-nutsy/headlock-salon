import Contact from '@/components/Contact';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Contact Us | Headlocks – Lajpat Nagar, Delhi',
  description: 'Book an appointment at Headlocks Unisex Salon in Lajpat Nagar, Delhi. Call 092117 85275 or WhatsApp us.',
};

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <BookingForm />
      <Contact />
      <FAQ />
    </>
  );
}
