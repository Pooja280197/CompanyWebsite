import type { NavMegaItem } from './navProducts';

export const COMPANY_NAV_ITEMS: NavMegaItem[] = [
  {
    id: 'about-us',
    label: 'About Us',
    href: '/aboutus',
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
];

export function isCompanyNavActive(pathname: string) {
  return (
    pathname === '/aboutus' ||
    pathname.startsWith('/aboutus/') ||
    pathname === '/careers' ||
    pathname.startsWith('/careers/') ||
    pathname === '/blog' ||
    pathname.startsWith('/blog/')
  );
}
