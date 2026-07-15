import {
  BarChart3,
  Blocks,
  Bot,
  Cloud,
  Code2,
  Layout,
  Lightbulb,
  Megaphone,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

type ServiceItemBase = Omit<ServiceItem, 'href'>;

/** Maps legacy service ids → canonical public paths */
export const SERVICE_PATHS: Record<string, string> = {
  'custom-software': '/custom-software-development',
  'web-development': '/web-development-and-design',
  'mobile-apps': '/mobile-app-development',
  'ui-ux-design': '/ui-ux-design',
  'ai-solutions': '/ai-ml-development-services',
  analytics: '/data-science-and-analytics',
  consulting: '/iot-solutions',
  'cloud-services': '/cloud-solutions',
  devops: '/devops-development',
  'maintenance-support': '/software-maintenance-support',
  salesforce: '/salesforce-development',
  'brand-strategy': '/services/brand-strategy',
  'digital-marketing': '/services/digital-marketing',
  ecommerce: '/services/ecommerce',
  seo: '/services/seo',
};

const SERVICE_ITEMS_BASE: ServiceItemBase[] = [
  {
    id: 'brand-strategy',
    label: 'Brand Strategy',
    description: 'Positioning & identity systems',
    icon: Palette,
    iconBg: '#ede9fe',
    iconColor: '#7c3aed',
  },
  {
    id: 'custom-software',
    label: 'Custom Software',
    description: 'Tailored platforms & business tools',
    icon: Blocks,
    iconBg: '#dbeafe',
    iconColor: '#2563eb',
  },
  {
    id: 'web-development',
    label: 'Web Development',
    description: 'Fast, scalable web products',
    icon: Code2,
    iconBg: '#fce7f3',
    iconColor: '#db2777',
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    description: 'Campaigns that convert',
    icon: Megaphone,
    iconBg: '#dbeafe',
    iconColor: '#2563eb',
  },
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    description: 'Human-centered interfaces',
    icon: Layout,
    iconBg: '#ffedd5',
    iconColor: '#ea580c',
  },
  {
    id: 'analytics',
    label: 'Analytics & Reporting',
    description: 'Data-driven decisions',
    icon: BarChart3,
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
  },
  {
    id: 'mobile-apps',
    label: 'Mobile App Development',
    description: 'iOS & Android experiences',
    icon: Smartphone,
    iconBg: '#e0e7ff',
    iconColor: '#4f46e5',
  },
  {
    id: 'ai-solutions',
    label: 'AI Solutions',
    description: 'Smart automation & ML',
    icon: Bot,
    iconBg: '#f3e8ff',
    iconColor: '#9333ea',
  },
  {
    id: 'cloud-services',
    label: 'Cloud Services',
    description: 'Secure cloud infrastructure',
    icon: Cloud,
    iconBg: '#cffafe',
    iconColor: '#0891b2',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce Solutions',
    description: 'Online stores that scale',
    icon: ShoppingCart,
    iconBg: '#fef3c7',
    iconColor: '#d97706',
  },
  {
    id: 'seo',
    label: 'SEO Optimization',
    description: 'Organic growth & visibility',
    icon: Search,
    iconBg: '#fee2e2',
    iconColor: '#dc2626',
  },
  {
    id: 'consulting',
    label: 'IT Consulting',
    description: 'Strategy & tech advisory',
    icon: Lightbulb,
    iconBg: '#f1f5f9',
    iconColor: '#475569',
  },
];

export const SERVICE_ITEMS: ServiceItem[] = SERVICE_ITEMS_BASE.map((item) => ({
  ...item,
  href: SERVICE_PATHS[item.id] ?? `/${item.id}`,
}));

export interface ServiceMegaLink {
  id: string;
  label: string;
  href: string;
}

export interface ServiceMegaColumn {
  id: string;
  title: string;
  href: string;
  items: ServiceMegaLink[];
}

export const SERVICE_MEGA_COLUMNS: ServiceMegaColumn[] = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    href: '/product-engineering',
    items: [
      { id: 'custom-software', label: 'Custom Software', href: '/custom-software-development' },
      { id: 'web-development', label: 'Web Development', href: '/web-development-and-design' },
      { id: 'mobile-apps', label: 'Mobile Apps', href: '/mobile-app-development' },
      { id: 'ui-ux-design', label: 'UI/UX Design', href: '/ui-ux-design' },
    ],
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    href: '/ai-data',
    items: [
      { id: 'ai-ml', label: 'AI/ML Development', href: '/ai-ml-development-services' },
      { id: 'data-science', label: 'Data Science & Analytics', href: '/data-science-and-analytics' },
      { id: 'iot', label: 'IoT Solutions', href: '/iot-solutions' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    href: '/cloud-devops',
    items: [
      { id: 'cloud', label: 'Cloud Solutions', href: '/cloud-solutions' },
      { id: 'devops', label: 'DevOps', href: '/devops-development' },
      { id: 'maintenance', label: 'Maintenance & Support', href: '/software-maintenance-support' },
      { id: 'salesforce', label: 'Salesforce', href: '/salesforce-development' },
    ],
  },
  {
    id: 'staff-augmentation',
    title: 'Staff Augmentation',
    href: '/staff-augmentation',
    items: [],
  },
];

/** @deprecated Use SERVICE_MEGA_COLUMNS */
export const SERVICE_COL_LEFT = SERVICE_ITEMS.slice(0, 6);
/** @deprecated Use SERVICE_MEGA_COLUMNS */
export const SERVICE_COL_RIGHT = SERVICE_ITEMS.slice(6);
