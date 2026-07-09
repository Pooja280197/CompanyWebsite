import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Awards from '../components/Awards';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <FAQ />
      <Awards />
      <CTA />
    </>
  );
}
