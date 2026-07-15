import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useReveal } from '../hooks/useReveal';
import { scrollPageToTop } from '../lib/lenisScroll';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useSmoothScroll();
  useReveal();

  useEffect(() => {
    if (location.hash) return;
    scrollPageToTop();
    // Re-assert after paint in case route content shifts Lenis
    const raf = requestAnimationFrame(() => scrollPageToTop());
    const t = window.setTimeout(() => scrollPageToTop(), 50);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [location.pathname, location.search, location.key]);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="site-shell min-h-screen flex flex-col w-full min-w-0 overflow-x-clip">
      <Navbar />
      <main className="flex-1 w-full min-w-0">{children}</main>
      <Footer />
    </div>
  );
}
