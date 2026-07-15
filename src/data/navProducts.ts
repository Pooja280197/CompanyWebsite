export interface NavMegaItem {
  id: string;
  label: string;
  href: string;
  description?: string;
}

/** Products mega-menu — SEO-friendly routes */
export const PRODUCT_NAV_ITEMS: NavMegaItem[] = [
  {
    id: 'cleanplan',
    label: 'CleanPlan',
    href: '/cleanplan',
    description: 'Cleaning operations & workforce management',
  },
  {
    id: 'education-erp',
    label: 'Education ERP',
    href: '/erp-solutions-for-education',
    description: 'Admissions, fees, academics & communication',
  },
  {
    id: 'rexo-erp',
    label: 'Rexo ERP',
    href: '/rexo-erp',
    description: 'Inventory, production, sales, finance & HR',
  },
  {
    id: 'showtimebro',
    label: 'ShowTimeBro',
    href: '/showtimebro',
    description: 'Events, ticketing, check-in & live sales',
  },
];

export function isProductsNavActive(pathname: string) {
  return (
    pathname === '/rexo-erp' ||
    pathname === '/cleanplan' ||
    pathname === '/erp-solutions-for-education' ||
    pathname === '/showtimebro' ||
    pathname === '/our-products' ||
    pathname.startsWith('/product/')
  );
}
