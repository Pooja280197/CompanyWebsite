import type { NavMegaItem } from './navProducts';

/** Industry Hub mega-menu — SEO-friendly /industries/* routes */
export const INDUSTRY_NAV_ITEMS: NavMegaItem[] = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    href: '/industries/healthcare-software-development',
    description: 'Clinical systems, patient apps & care platforms',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    href: '/industries/manufacturing-software-solutions',
    description: 'Factory ops, IoT & production software',
  },
  {
    id: 'fintech',
    label: 'Finance / FinTech',
    href: '/industries/fintech-software-development',
    description: 'Payments, lending & financial products',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    href: '/industries/ecommerce-development',
    description: 'Storefronts, catalogs & commerce ops',
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    href: '/industries/real-estate-software-development',
    description: 'Listings, CRM & property platforms',
  },
  {
    id: 'travel',
    label: 'Travel',
    href: '/industries/travel-software-development',
    description: 'Booking, itineraries & travel tech',
  },
  {
    id: 'education',
    label: 'Education',
    href: '/industries/education-software-development',
    description: 'Campus ERP, e-learning & academic ops',
  },
  {
    id: 'sports',
    label: 'Sports',
    href: '/industries/sports-software-development',
    description: 'Fan engagement, events & sports platforms',
  },
];

export function isIndustriesNavActive(pathname: string) {
  return pathname.startsWith('/industries');
}
