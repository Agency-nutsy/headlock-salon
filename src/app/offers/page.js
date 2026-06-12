import Offers from '@/components/Offers';

export const metadata = {
  title: 'Offers & Memberships | Headlocks – Lajpat Nagar, Delhi',
  description: 'Exclusive salon offers, discounts, and memberships at Headlocks in Lajpat Nagar, Delhi.',
};

export default function OffersPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <Offers />
    </>
  );
}
