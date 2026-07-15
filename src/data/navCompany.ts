import type { NavMegaItem } from './navProducts';

export const COMPANY_NAV_ITEMS: NavMegaItem[] = [
  {
    id: 'about-us',
    label: 'About Us',
    href: '/about-us',
  },
  {
    id: 'careers',
    label: 'Career',
    href: '/careers',
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
  },
  {
    id: 'contact-us',
    label: 'Contact Us',
    href: '/contact-us',
  },
];

export function isCompanyNavActive(pathname: string) {
  return (
    pathname === '/about-us' ||
    pathname.startsWith('/about-us/') ||
    pathname === '/careers' ||
    pathname.startsWith('/careers/') ||
    pathname === '/blog' ||
    pathname.startsWith('/blog/') ||
    pathname === '/contact-us' ||
    pathname.startsWith('/contact-us/')
  );
}
