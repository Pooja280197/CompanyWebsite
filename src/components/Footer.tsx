import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Mail, MapPin, Phone } from 'lucide-react';

const SOCIALS = [
  { label: 'Facebook', icon: FaFacebook, href: '#' },
  { label: 'X', icon: FaXTwitter, href: '#' },
  { label: 'LinkedIn', icon: FaLinkedin, href: '#' },
  { label: 'Instagram', icon: FaInstagram, href: '#' },
] as const;

const WHAT_WE_DO = [
  { label: 'Product Engineering', href: '/product-engineering' },
  { label: 'AI & Data', href: '/ai-data' },
  { label: 'Cloud & DevOps', href: '/cloud-devops' },
  { label: 'Staff Augmentation', href: '/staff-augmentation' },
] as const;

const EXPLORE = [
  { label: 'Products', href: '/our-products' },
  { label: 'Industries Hub', href: '/industries' },
  { label: 'Our Work', href: '/our-work' },
] as const;

const COMPANY = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Blog', href: '/blog' },
] as const;

const LEGAL = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
] as const;

const OFFICE =
  '308 Shagun Arcade, PU-4, Scheme 54, AB Road, Vijay Nagar, Indore 452010';
const PHONE = '+91 88780 03344';
const EMAIL = 'info@nagarsoftwaresolution.com';

function FooterLink({ href, children }: { href: string; children: string }) {
  const className = 'footer-link group';
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '#') {
    return (
      <a
        href={href}
        className={className}
        onClick={href === '#' ? (e) => e.preventDefault() : undefined}
      >
        <span className="footer-link__wave">
          <span className="footer-link__text">{children}</span>
          <span className="footer-link__text footer-link__text--hover" aria-hidden="true">
            {children}
          </span>
        </span>
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      <span className="footer-link__wave">
        <span className="footer-link__text">{children}</span>
        <span className="footer-link__text footer-link__text--hover" aria-hidden="true">
          {children}
        </span>
      </span>
    </Link>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="footer-col">
      <p className="footer-heading">{title}</p>
      <ul className="footer-col__list">
        {links.map((item) => (
          <li key={item.href + item.label}>
            <FooterLink href={item.href}>{item.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-brand__logo" aria-label="NSS home">
              <img src="/mainLogo.png" alt="NSS" />
              <span>Nagar Software Solution</span>
            </Link>

            <p className="footer-brand__tagline">
              Software and AI that ships — built for teams who need outcomes, not slide decks.
            </p>

            <ul className="footer-nap" aria-label="Contact">
              <li>
                <MapPin className="footer-nap__icon" aria-hidden="true" />
                <span>{OFFICE}</span>
              </li>
              <li>
                <Phone className="footer-nap__icon" aria-hidden="true" />
                <a href="tel:+918878003344" className="footer-brand__contact">
                  {PHONE}
                </a>
              </li>
              <li>
                <Mail className="footer-nap__icon" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`} className="footer-brand__contact">
                  {EMAIL}
                </a>
              </li>
            </ul>

            <div className="footer-brand__socials">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-social"
                  aria-label={label}
                  onClick={href === '#' ? (e) => e.preventDefault() : undefined}
                >
                  <Icon className="footer-social__icon" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="What We Do" links={WHAT_WE_DO} />
          <FooterColumn title="Explore" links={EXPLORE} />
          <FooterColumn title="Company" links={COMPANY} />
        </div>

        <div className="footer-bottom">
          <p className="footer-text-faint">
            © {new Date().getFullYear()} Nagar Software Solution. All rights reserved.
          </p>
          <div className="footer-bottom__links">
            {LEGAL.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
