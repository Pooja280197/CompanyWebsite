import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { ServicesDropdown, ServicesMobileList } from './ServicesDropdown';
import { NavListDropdown, NavListMobileList } from './NavListDropdown';
import { PRODUCT_NAV_ITEMS, isProductsNavActive } from '../data/navProducts';
import { CASE_STUDY_NAV_ITEMS, isCaseStudiesNavActive } from '../data/navCaseStudies';
import { COMPANY_NAV_ITEMS, isCompanyNavActive } from '../data/navCompany';
import { INDUSTRY_NAV_ITEMS, isIndustriesNavActive } from '../data/navIndustries';

type DropdownKey = 'services' | 'products' | 'case-studies' | 'company' | 'industries';

const NAV_LINKS: {
  label: string;
  href: string;
  dropdown?: DropdownKey;
  /** When false, trigger opens dropdown only (no page navigation). Default true. */
  navigate?: boolean;
}[] = [
  { label: 'Home', href: '/' },
  { label: 'What We Do', href: '/#WhatWeDo', dropdown: 'services', navigate: false },
  { label: 'Our Work', href: '/our-work', dropdown: 'case-studies' },
  { label: 'Products', href: '/our-products', dropdown: 'products', navigate: false },
  { label: 'Industry Hub', href: '/industries', dropdown: 'industries' },
  { label: 'Company', href: '/about-us', dropdown: 'company' },
];

const DROPDOWN_MENU_IDS: Record<DropdownKey, string> = {
  services: 'services-mega-menu',
  products: 'products-mega-menu',
  'case-studies': 'case-studies-mega-menu',
  company: 'company-mega-menu',
  industries: 'industries-mega-menu',
};

function Logo() {
  return (
    <a href="/" className="flex items-center flex-shrink-0">
      <img src="/mainLogo.png" alt="NSS" className="h-14 w-auto -my-1" />
    </a>
  );
}

function isServicesNavActive(pathname: string) {
  return (
    pathname.startsWith('/services') ||
    pathname.startsWith('/whatWeDo') ||
    pathname === '/product-engineering' ||
    pathname === '/ai-data' ||
    pathname === '/cloud-devops' ||
    pathname === '/staff-augmentation' ||
    pathname === '/custom-software-development' ||
    pathname === '/web-development-and-design' ||
    pathname === '/mobile-app-development' ||
    pathname === '/ui-ux-design' ||
    pathname === '/ai-ml-development-services' ||
    pathname === '/data-science-and-analytics' ||
    pathname === '/iot-solutions' ||
    pathname === '/cloud-solutions' ||
    pathname === '/devops-development' ||
    pathname === '/software-maintenance-support' ||
    pathname === '/salesforce-development'
  );
}

function isNavSectionActive(label: string, pathname: string, hash: string) {
  if (label === 'Home') return pathname === '/' && !hash;
  if (label === 'What We Do') return isServicesNavActive(pathname);
  if (label === 'Products') return isProductsNavActive(pathname);
  if (label === 'Industry Hub') return isIndustriesNavActive(pathname);
  if (label === 'Our Work') return isCaseStudiesNavActive(pathname);
  if (label === 'Company') return isCompanyNavActive(pathname);
  return false;
}

export default function Navbar() {
  const location = useLocation();
  const isInnerPage =
    isServicesNavActive(location.pathname) ||
    isProductsNavActive(location.pathname) ||
    isCaseStudiesNavActive(location.pathname) ||
    isIndustriesNavActive(location.pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<DropdownKey | null>(null);
  const [arrowLeft, setArrowLeft] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Partial<Record<DropdownKey, HTMLElement>>>({});
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
    if (key === 'industries') return <NavListMobileList items={INDUSTRY_NAV_ITEMS} onNavigate={onNavigate} />;
    return <NavListMobileList items={CASE_STUDY_NAV_ITEMS} onNavigate={onNavigate} />;
  };
  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 nav-header ${isInnerPage && !scrolled ? 'nav-header--frosted' : ''} ${scrolled ? 'nav-glass' : ''}`}
        onMouseLeave={scheduleCloseMenu}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3 lg:gap-4 relative">
          <Logo />
          <nav className="hidden lg:flex items-center bg-transparent rounded-full px-1 xl:px-2 py-1.5 gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((l) => {
              const sectionActive = isNavSectionActive(l.label, location.pathname, location.hash);
              if (l.dropdown) {
                const menuOpen = openDropdown === l.dropdown;
                const canNavigate = l.navigate !== false;
                const triggerClass = `nav-link nav-link--dropdown px-3 xl:px-5 pt-1.5 pb-1 rounded-full text-[0.9rem] xl:text-[0.95rem] font-medium ${
                  sectionActive || menuOpen ? 'nav-link--active' : ''
                }`;
                const triggerInner = (
                  <span className="nav-link__inner">
                    {l.label}
                    <ChevronDown
                      size={13}
                      strokeWidth={2.25}
                      className={`flex-shrink-0 transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </span>
                );
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
                    {canNavigate ? (
                      <a
                        ref={(el) => {
                          if (el && l.dropdown) triggerRefs.current[l.dropdown] = el as HTMLElement;
                        }}
                        href={l.href}
                        className={triggerClass}
                        aria-expanded={menuOpen}
                        aria-haspopup="true"
                        aria-controls={DROPDOWN_MENU_IDS[l.dropdown]}
                      >
                        {triggerInner}
                      </a>
                    ) : (
                      <button
                        type="button"
                        ref={(el) => {
                          if (el && l.dropdown) triggerRefs.current[l.dropdown] = el as HTMLElement;
                        }}
                        className={triggerClass}
                        aria-expanded={menuOpen}
                        aria-haspopup="true"
                        aria-controls={DROPDOWN_MENU_IDS[l.dropdown]}
                        onClick={() => openMenu(l.dropdown!)}
                      >
                        {triggerInner}
                      </button>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={`nav-link px-3 xl:px-5 pt-1.5 pb-1 rounded-full text-[0.9rem] xl:text-[0.95rem] font-medium ${sectionActive ? 'nav-link--active' : ''
                    }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <a href="/contact-us" className="nav-cta-btn">
              <span className="nav-cta-btn__label">Let's Collaborate</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </a>
            <button
              onClick={() => {
                setOpen(true);
                setMobileDropdown(null);
              }}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-full border border-slate-200 bg-white/80 items-center hover:bg-slate-50 transition-colors"
              aria-label="Open menu"
            >
              <span className="w-[16px] h-[1.5px] bg-[#0f172a] rounded-full block" />
              <span className="w-[16px] h-[1.5px] bg-[#0f172a] rounded-full block" />
              <span className="w-[16px] h-[1.5px] bg-[#0f172a] rounded-full block" />
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
          open={openDropdown === 'industries'}
          menuId={DROPDOWN_MENU_IDS.industries}
          label="Industry Hub"
          items={INDUSTRY_NAV_ITEMS}
          columns={2}
          arrowLeft={openDropdown === 'industries' ? arrowLeft : null}
          onMouseEnter={() => openMenu('industries')}
          onMouseLeave={scheduleCloseMenu}
          onClose={closeMenu}
        />
        <NavListDropdown
          open={openDropdown === 'case-studies'}
          menuId={DROPDOWN_MENU_IDS['case-studies']}
          label="Our Work"
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
        <div className="mmenu__header">
          <Logo />
          <button
            onClick={() => {
              setOpen(false);
              setMobileDropdown(null);
            }}
            className="w-10 h-10 bg-[#f1f5f9] rounded-full flex items-center justify-center hover:bg-[#e2e8f0] transition-colors"
            aria-label="Close menu"
          >
            <X size={18} className="text-[#0f172a]" strokeWidth={2.25} />
          </button>
        </div>
        <nav className="mmenu__nav" aria-label="Mobile navigation">
          {NAV_LINKS.map((l) => {
            const sectionActive = isNavSectionActive(l.label, location.pathname, location.hash);
            if (l.dropdown) {
              const expanded = mobileDropdown === l.dropdown;
              return (
                <div key={l.label} className="mmenu__item">
                  <button
                    type="button"
                    onClick={() => setMobileDropdown((v) => (v === l.dropdown ? null : l.dropdown!))}
                    className={`mmenu__trigger${sectionActive || expanded ? ' mmenu__trigger--active' : ''}`}
                    aria-expanded={expanded}
                  >
                    <span>{l.label}</span>
                    <ChevronDown size={18} strokeWidth={2.25} className="mmenu__chevron" aria-hidden="true" />
                  </button>
                  {expanded && <div className="mmenu__panel">{renderMobileDropdownList(l.dropdown)}</div>}
                </div>
              );
            }
            return (
              <div key={l.label} className="mmenu__item">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`mmenu__link${sectionActive ? ' mmenu__link--active' : ''}`}
                  aria-current={sectionActive ? 'page' : undefined}
                >
                  <span>{l.label}</span>
                </a>
              </div>
            );
          })}
          <a href="/contact-us" onClick={() => setOpen(false)} className="mmenu__cta">
            Let's Collaborate
          </a>
        </nav>
      </div>
    </>
  );
}
