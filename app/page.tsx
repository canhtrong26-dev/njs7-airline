import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import NeverMissOffer from './components/NeverMissOffer/NeverMissOffer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SpecialOffers />
      <NeverMissOffer />
    </main>
  );
}