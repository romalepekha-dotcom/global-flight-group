import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Packages from '@/components/Packages';
import Trust from '@/components/Trust';
import AircraftTypes from '@/components/AircraftTypes';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <HowItWorks />
      <Packages />
      <Trust />
      <AircraftTypes />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

