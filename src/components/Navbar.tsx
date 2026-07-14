import { useState, useEffect, useRef, useCallback } from 'react';

import { useLocation } from 'react-router-dom';

import { ChevronDown, X } from 'lucide-react';

import { ServicesDropdown, ServicesMobileList } from './ServicesDropdown';

import { NavListDropdown, NavListMobileList } from './NavListDropdown';

import { PRODUCT_NAV_ITEMS, isProductsNavActive } from '../data/navProducts';

import { CASE_STUDY_NAV_ITEMS, isCaseStudiesNavActive } from '../data/navCaseStudies';

import { COMPANY_NAV_ITEMS, isCompanyNavActive } from '../data/navCompany';



type DropdownKey = 'services' | 'products' | 'case-studies' | 'company';



const NAV_LINKS: {

  label: string;

  href: string;

  dropdown?: DropdownKey;

}[] = [

    { label: 'Home', href: '/' },

    { label: 'What We Do', href: '/#WhatWeDo', dropdown: 'services' },

    { label: 'Case Studies', href: '/#case-studies', dropdown: 'case-studies' },

    { label: 'Products', href: '/our-products', dropdown: 'products' },


    { label: 'Company', href: '/aboutus', dropdown: 'company' },

    { label: 'Contact Us', href: '/contactUs' },

  ];



const DROPDOWN_MENU_IDS: Record<DropdownKey, string> = {

  services: 'services-mega-menu',

  products: 'products-mega-menu',

  'case-studies': 'case-studies-mega-menu',

  company: 'company-mega-menu',

};



function Logo() {

  return (

    <a href="/" className="flex items-center flex-shrink-0">

      <img src="/mainLogo.png" alt="NSS" className="h-14 w-auto -my-1" />

    </a>

  );

}



function isServicesNavActive(pathname: string) {

  return pathname.startsWith('/services') || pathname.startsWith('/whatWeDo');

}



function isNavSectionActive(label: string, pathname: string, hash: string) {

  if (label === 'Home') return pathname === '/' && !hash;

  if (label === 'What We Do') return isServicesNavActive(pathname);

  if (label === 'Products') return isProductsNavActive(pathname);

  if (label === 'Case Studies') return isCaseStudiesNavActive(pathname);

  if (label === 'Company') return isCompanyNavActive(pathname);

  if (label === 'Contact Us') return pathname === '/contactUs';

  return false;

}



export default function Navbar() {

  const location = useLocation();

  const isInnerPage =

    isServicesNavActive(location.pathname) ||

    isProductsNavActive(location.pathname) ||

    isCaseStudiesNavActive(location.pathname) ||

    location.pathname.startsWith('/industries');



  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);

  const [mobileDropdown, setMobileDropdown] = useState<DropdownKey | null>(null);

  const [arrowLeft, setArrowLeft] = useState<number | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const headerRef = useRef<HTMLElement>(null);

  const triggerRefs = useRef<Partial<Record<DropdownKey, HTMLAnchorElement>>>({});



  const updateArrowPosition = useCallback((key: DropdownKey) => {

    const trigger = triggerRefs.current[key];

    const header = headerRef.current;

    if (!trigger || !header) return;

    const triggerRect = trigger.getBoundingClientRect();

    const headerRect = header.getBoundingClientRect();

    setArrowLeft(triggerRect.left - headerRect.left + triggerRect.width / 2);

  }, []);



  const openMenu = useCallback((key: DropdownKey) => {

    if (closeTimer.current) clearTimeout(closeTimer.current);

    setOpenDropdown(key);

    requestAnimationFrame(() => updateArrowPosition(key));

  }, [updateArrowPosition]);



  const scheduleCloseMenu = useCallback(() => {

    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);

  }, []);



  const closeMenu = useCallback(() => {

    if (closeTimer.current) clearTimeout(closeTimer.current);

    setOpenDropdown(null);

    setArrowLeft(null);

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



  useEffect(() => {

    if (!openDropdown) return;

    const onResize = () => updateArrowPosition(openDropdown);

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);

  }, [openDropdown, updateArrowPosition]);



  const renderMobileDropdownList = (key: DropdownKey) => {

    const onNavigate = () => {

      setOpen(false);

      setMobileDropdown(null);

    };



    if (key === 'services') return <ServicesMobileList onNavigate={onNavigate} />;

    if (key === 'products') return <NavListMobileList items={PRODUCT_NAV_ITEMS} onNavigate={onNavigate} />;

    if (key === 'company') return <NavListMobileList items={COMPANY_NAV_ITEMS} onNavigate={onNavigate} />;

    return <NavListMobileList items={CASE_STUDY_NAV_ITEMS} onNavigate={onNavigate} />;

  };



  return (

    <>

      <header

        ref={headerRef}

        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 nav-header ${isInnerPage && !scrolled ? 'nav-header--frosted' : ''} ${scrolled ? 'nav-glass' : ''}`}

        onMouseLeave={scheduleCloseMenu}

      >

        <div className="max-w-[1200px] mx-auto px-0 py-3 flex items-center justify-between gap-4 relative">

          <Logo />



          <nav className="hidden md:flex items-center bg-transparent rounded-full px-2 py-1.5 gap-0.5" aria-label="Main navigation">

            {NAV_LINKS.map((l) => {

              const sectionActive = isNavSectionActive(l.label, location.pathname, location.hash);



              if (l.dropdown) {

                const menuOpen = openDropdown === l.dropdown;

                return (

                  <div

                    key={l.label}

                    className="relative"

                    onMouseEnter={() => openMenu(l.dropdown!)}

                    onFocus={() => openMenu(l.dropdown!)}

                    onBlur={(e) => {

                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {

                        scheduleCloseMenu();

                      }

                    }}

                  >

                    <a

                      ref={(el) => {

                        if (el && l.dropdown) triggerRefs.current[l.dropdown] = el;

                      }}

                      href={l.href}

                      className={`nav-link nav-link--dropdown px-5 pt-1.5 pb-1 rounded-full text-[0.95rem] font-medium ${sectionActive || menuOpen ? 'nav-link--active' : ''

                        }`}

                      aria-expanded={menuOpen}

                      aria-haspopup="true"

                      aria-controls={DROPDOWN_MENU_IDS[l.dropdown]}

                    >

                      <span className="nav-link__inner">

                        {l.label}

                        <ChevronDown

                          size={13}

                          strokeWidth={2.25}

                          className={`flex-shrink-0 transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`}

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

                  className={`nav-link px-5 pt-1.5 pb-1 rounded-full text-[0.95rem] font-medium ${sectionActive ? 'nav-link--active' : ''

                    }`}

                >

                  {l.label}

                </a>

              );

            })}

          </nav>



          <div className="flex items-center gap-3">

            <a href="/contactUs" className="nav-cta-btn">

              <span className="nav-cta-btn__label">Let's Collaborate</span>

              <span className="nav-cta-btn__icon">

                <svg viewBox="0 0 10 10" fill="none">

                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />

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

          open={openDropdown === 'services'}

          menuId={DROPDOWN_MENU_IDS.services}

          arrowLeft={openDropdown === 'services' ? arrowLeft : null}

          onMouseEnter={() => openMenu('services')}

          onMouseLeave={scheduleCloseMenu}

          onClose={closeMenu}

        />

        <NavListDropdown

          open={openDropdown === 'products'}

          menuId={DROPDOWN_MENU_IDS.products}

          label="Products"

          items={PRODUCT_NAV_ITEMS}

          columns={1}

          arrowLeft={openDropdown === 'products' ? arrowLeft : null}

          onMouseEnter={() => openMenu('products')}

          onMouseLeave={scheduleCloseMenu}

          onClose={closeMenu}

        />

        <NavListDropdown

          open={openDropdown === 'case-studies'}

          menuId={DROPDOWN_MENU_IDS['case-studies']}

          label="Case Studies"

          items={CASE_STUDY_NAV_ITEMS}

          columns={2}

          arrowLeft={openDropdown === 'case-studies' ? arrowLeft : null}

          onMouseEnter={() => openMenu('case-studies')}

          onMouseLeave={scheduleCloseMenu}

          onClose={closeMenu}

        />

        <NavListDropdown

          open={openDropdown === 'company'}

          menuId={DROPDOWN_MENU_IDS.company}

          label="Company"

          items={COMPANY_NAV_ITEMS}

          columns={1}

          arrowLeft={openDropdown === 'company' ? arrowLeft : null}

          onMouseEnter={() => openMenu('company')}

          onMouseLeave={scheduleCloseMenu}

          onClose={closeMenu}

        />

      </header>



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

            if (l.dropdown) {

              const expanded = mobileDropdown === l.dropdown;

              return (

                <div key={l.label} className="border-b border-[#f0f0f0]">

                  <button

                    type="button"

                    onClick={() => setMobileDropdown((v) => (v === l.dropdown ? null : l.dropdown!))}

                    className="flex w-full items-center justify-between py-4 group"

                    aria-expanded={expanded}

                  >

                    <span

                      className="text-[#111] group-hover:opacity-50 transition-opacity"

                      style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,5vw,3rem)', letterSpacing: '-0.03em' }}

                    >

                      {l.label}

                    </span>

                    <ChevronDown

                      size={22}

                      className={`text-[#ccc] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}

                      aria-hidden="true"

                    />

                  </button>

                  {expanded && renderMobileDropdownList(l.dropdown)}

                </div>

              );

            }



            return (

              <a

                key={l.label}

                href={l.href}

                onClick={() => setOpen(false)}

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

            href="/contactUs"

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

