import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InternationalSpeakers from '@/components/InternationalSpeakers';
import AboutISCRS from '@/components/AboutISCRS';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <InternationalSpeakers />
      <AboutISCRS />
    </main>
  );
}