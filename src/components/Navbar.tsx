import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { ServicesDropdown, ServicesMobileList } from './ServicesDropdown';

const NAV_LINKS = [
  { label: 'Home',     href: '/'           },
  { label: 'About us', href: '/#about'     },
  { label: 'What We Do',href: '/#WhatWeDo', hasDropdown: true },
  { label: 'Work',     href: '/#work'      },
  { label: 'Team',     href: '/#team'      },
  { label: 'Pricing',  href: '/#pricing'  },
  { label: 'Awards',   href: '/#awards'    },
];

const SERVICES_MENU_ID = 'services-mega-menu';

function Logo() {
  return (
    <a href="/" className="flex items-center flex-shrink-0">
      <img src="/mainLogo.png" alt="NSS" className="h-14 w-auto -my-1" />
    </a>
  );
}

export default function Navbar() {
  const location = useLocation();
  const isServicePage = location.pathname.startsWith('/services');
  const [open,          setOpen]          = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [active,        setActive]        = useState('Home');
  const [servicesOpen,  setServicesOpen]  = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const openServices = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);

  const scheduleCloseServices = useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  }, []);

  const closeServices = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(false);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 nav-header ${isServicePage && !scrolled ? 'nav-header--frosted' : ''} ${scrolled ? 'nav-glass' : ''}`}
        onMouseLeave={scheduleCloseServices}
      >
        <div className="max-w-[1200px] mx-auto px-0 py-3 flex items-center justify-between gap-4 relative">
          <Logo />

          {/* Center pill nav (desktop) */}
          <nav className="hidden md:flex items-center bg-transparent rounded-full px-2 py-1.5 gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((l) => {
              if (l.hasDropdown) {
                return (
                  <div
                    key={l.label}
                    className="relative"
                    onMouseEnter={openServices}
                    onFocus={openServices}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        scheduleCloseServices();
                      }
                    }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setActive(l.label)}
                      className={`nav-link nav-link--dropdown px-5 pt-1.5 pb-1 rounded-full text-[0.95rem] font-medium ${
                        active === l.label || servicesOpen ? 'nav-link--active' : ''
                      }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls={SERVICES_MENU_ID}
                    >
                      <span className="nav-link__inner">
                        {l.label}
                        <ChevronDown
                          size={13}
                          strokeWidth={2.25}
                          className={`flex-shrink-0 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </div>
                );
              }

              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setActive(l.label)}
                  className={`nav-link px-5 pt-1.5 pb-1 rounded-full text-[0.95rem] font-medium ${
                    active === l.label ? 'nav-link--active' : ''
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a href="/#contact" className="nav-cta-btn">
              <span className="nav-cta-btn__label">Let's Collaborate</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-full border border-[#e5e5e5] items-center"
              aria-label="Open menu"
            >
              <span className="w-[18px] h-0.5 bg-[#111] rounded block" />
              <span className="w-[18px] h-0.5 bg-[#111] rounded block" />
            </button>
          </div>
        </div>

        <ServicesDropdown
          open={servicesOpen}
          menuId={SERVICES_MENU_ID}
          onMouseEnter={openServices}
          onMouseLeave={scheduleCloseServices}
          onClose={closeServices}
        />
      </header>

      {/* Full-screen mobile menu */}
      <div className={`fixed inset-0 z-[200] bg-white mmenu ${open ? 'mmenu-open' : 'mmenu-close'}`}>
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 bg-[#f3f3f3] rounded-full flex items-center justify-center hover:bg-[#eee] transition-colors"
            aria-label="Close menu"
          >
            <X size={16} className="text-[#111]" />
          </button>
        </div>
        <nav className="px-6 pt-6 overflow-y-auto max-h-[calc(100vh-5rem)]" aria-label="Mobile navigation">
          {NAV_LINKS.map((l, i) => {
            if (l.hasDropdown) {
              return (
                <div key={l.label} className="border-b border-[#f0f0f0]">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-4 group"
                    aria-expanded={mobileServicesOpen}
                  >
                    <span
                      className="text-[#111] group-hover:opacity-50 transition-opacity"
                      style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,5vw,3rem)', letterSpacing: '-0.03em' }}
                    >
                      {l.label}
                    </span>
                    <ChevronDown
                      size={22}
                      className={`text-[#ccc] transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {mobileServicesOpen && (
                    <ServicesMobileList onNavigate={() => { setOpen(false); setMobileServicesOpen(false); }} />
                  )}
                </div>
              );
            }

            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => { setActive(l.label); setOpen(false); }}
                className="flex items-center justify-between py-4 border-b border-[#f0f0f0] group"
                style={{
                  animation: open ? `fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.05 + 0.1}s both` : 'none',
                }}
              >
                <span
                  className="text-[#111] group-hover:opacity-50 transition-opacity"
                  style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,5vw,3rem)', letterSpacing: '-0.03em' }}
                >
                  {l.label}
                </span>
                <span className="text-[#ccc] text-sm font-medium">0{i + 1}</span>
              </a>
            );
          })}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 mt-8 bg-[#111] text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#222] transition-colors"
          >
            Let's Collaborate
          </a>
        </nav>
      </div>
    </>
  );
}
