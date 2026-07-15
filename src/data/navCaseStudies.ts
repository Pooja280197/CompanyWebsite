import type { NavMegaItem } from './navProducts';

/** Our Work mega-menu — SEO-friendly /our-work/* routes */
export const CASE_STUDY_NAV_ITEMS: NavMegaItem[] = [
  {
    id: 'smart-factory-iot',
    label: 'Smart Factory IoT',
    href: '/our-work/smart-factory-iot',
    description: 'Connected manufacturing & real-time telemetry',
  },
  {
    id: 'diamond-similarity-ai',
    label: 'Diamond Similarity AI',
    href: '/our-work/diamond-similarity-ai',
    description: 'Visual search & similarity matching at scale',
  },
  {
    id: 'cloud-optimization',
    label: 'Cloud Optimization',
    href: '/our-work/cloud-optimization',
    description: 'Cost control without sacrificing performance',
  },
  {
    id: 'enterprise-data-pipeline',
    label: 'Enterprise Data Pipeline',
    href: '/our-work/enterprise-data-pipeline',
    description: 'Governed data flow across the enterprise',
  },
  {
    id: 'retail-ai-team',
    label: 'Retail AI Team',
    href: '/our-work/retail-ai-team',
    description: 'Embedded AI engineers for retail growth',
  },
  {
    id: 'manufacturing-devops',
    label: 'Manufacturing DevOps',
    href: '/our-work/manufacturing-devops',
    description: 'Reliable releases on the factory floor',
  },
  {
    id: 'healthcare-patient-management',
    label: 'Healthcare Patient Management',
    href: '/our-work/healthcare-patient-management',
    description: 'Legacy systems brought into modern care',
  },
];

export function isCaseStudiesNavActive(pathname: string) {
  return pathname.startsWith('/our-work');
}
