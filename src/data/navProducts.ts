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
    href: '/product/cleanplan',
    description: 'Cleaning operations & workforce management',
  },
  {
    id: 'education-erp',
    label: 'Education ERP',
    href: '/product/education-erp',
    description: 'Admissions, fees, academics & communication',
  },
  {
    id: 'our-products',
    label: 'All Products',
    href: '/our-products',
    description: 'Explore the full NSS product suite',
  },
];

export function isProductsNavActive(pathname: string) {
  return pathname.startsWith('/product') || pathname === '/our-products';
}
