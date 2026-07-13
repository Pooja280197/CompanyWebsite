import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import HomeAiProduction from '../components/HomeAiProduction';
import HomeOutcomes from '../components/HomeOutcomes';
import HomeProudNumbers from '../components/HomeProudNumbers';
import Portfolio from '../components/Portfolio';
import StatsBand from '../components/StatsBand';
import ThreeWaysIn from '../components/ThreeWaysIn';
import IndustriesBand from '../components/IndustriesBand';
import ClientSay from '../components/ClientSay';
import TechStackBand from '../components/TechStackBand';
import HomeConsultCta from '../components/HomeConsultCta';
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
      <HomeAiProduction />
      <HomeOutcomes />
      <HomeProudNumbers />
      <Portfolio />
      <StatsBand />
      <ThreeWaysIn />
      <IndustriesBand />
      <ClientSay />
      <TechStackBand />
      <HomeConsultCta />
      <Team />
      <FAQ />
      <Awards />
      <CTA />
    </>
  );
}
