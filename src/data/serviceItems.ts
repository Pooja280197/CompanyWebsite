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
  href: `/services/${item.id}`,
}));

export interface ServiceMegaLink {
  id: string;
  label: string;
  href: string;
}

export interface ServiceMegaColumn {
  id: string;
  title: string;
  items: ServiceMegaLink[];
}

export const SERVICE_MEGA_COLUMNS: ServiceMegaColumn[] = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    items: [
      { id: 'custom-software', label: 'Custom Software', href: '/services/custom-software' },
      { id: 'web-development', label: 'Web Development', href: '/services/web-development' },
      { id: 'mobile-apps', label: 'Mobile Apps', href: '/services/mobile-apps' },
      { id: 'ui-ux-design', label: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    items: [
      { id: 'ai-ml', label: 'AI/ML Development', href: '/services/ai-solutions' },
      { id: 'data-science', label: 'Data Science & Analytics', href: '/services/analytics' },
      { id: 'iot', label: 'IoT Solutions', href: '/services/consulting' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    items: [
      { id: 'cloud', label: 'Cloud Solutions', href: '/services/cloud-services' },
      { id: 'devops', label: 'DevOps', href: '/services/devops' },
      { id: 'maintenance', label: 'Maintenance & Support', href: '/services/maintenance-support' },
      { id: 'salesforce', label: 'Salesforce', href: '/services/salesforce' },
    ],
  },
  {
    id: 'team-extension',
    title: 'Team Extension',
    items: [
      { id: 'staff-augmentation', label: 'Staff Augmentation', href: '/#contact' },
      { id: 'engagement-models', label: 'Engagement Models', href: '/#contact' },
      { id: 'hire-by-skill', label: 'Hire by Skill', href: '/#contact' },
    ],
  },
];

/** @deprecated Use SERVICE_MEGA_COLUMNS */
export const SERVICE_COL_LEFT = SERVICE_ITEMS.slice(0, 6);
/** @deprecated Use SERVICE_MEGA_COLUMNS */
export const SERVICE_COL_RIGHT = SERVICE_ITEMS.slice(6);
