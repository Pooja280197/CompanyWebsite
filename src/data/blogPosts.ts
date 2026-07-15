export type BlogLink = {
  label: string;
  href: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  keyword: string;
  metaTitle: string;
  structure: string[];
  links: BlogLink[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'signs-you-need-erp-manufacturing',
    category: 'ERP',
    title: '7 Signs Your Factory Has Outgrown Spreadsheets',
    excerpt:
      'The hidden costs of manual tracking — and what an ERP actually fixes. Month-end taking a week? Stock counts disagree? Production planned on memory?',
    readTime: '7 min read',
    date: 'Aug 20',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop',
    keyword: 'when does a manufacturing business need ERP',
    metaTitle: '7 Signs Your Factory Has Outgrown Spreadsheets | NSS',
    structure: [
      'The hidden costs of manual tracking',
      '7 concrete signs: month-end takes a week; stock counts disagree; production planned on memory; dead stock financing nothing; downtime discovered after the fact; GST filing is archaeology; one person holds the truth',
      'What an ERP actually fixes (mapped to Rexo modules)',
      'How to start small',
    ],
    links: [
      { label: 'Rexo ERP', href: '/rexo-erp' },
      { label: 'Manufacturing', href: '/industries/manufacturing-software-solutions' },
      { label: 'Smart factory case study', href: '/our-work/smart-factory-iot' },
    ],
  },
  {
    slug: 'staff-augmentation-vs-outsourcing',
    category: 'Talent',
    title: 'Staff Augmentation vs. Outsourcing: An Honest Comparison',
    excerpt:
      'The control-vs-convenience axis. Cost math with real scenarios. When augmentation wins — and when outsourcing genuinely does.',
    readTime: '8 min read',
    date: 'Aug 18',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop',
    keyword: 'staff augmentation vs outsourcing',
    metaTitle: 'Staff Augmentation vs. Outsourcing: An Honest Comparison | NSS',
    structure: [
      'The control-vs-convenience axis',
      'Cost math with real scenarios',
      'When augmentation wins / when outsourcing wins (genuinely both)',
      'Red flags in either model',
      'Decision checklist',
    ],
    links: [
      { label: 'Staff Augmentation', href: '/staff-augmentation' },
      { label: 'Retail AI team case study', href: '/our-work/retail-ai-team' },
      { label: 'Manufacturing DevOps case study', href: '/our-work/manufacturing-devops' },
    ],
  },
  {
    slug: 'custom-software-vs-off-the-shelf-cost',
    category: 'Strategy',
    title: 'The Real Cost of Off-the-Shelf Software',
    excerpt:
      'Day-one price vs. year-three price. The workaround tax. When off-the-shelf is genuinely right — and when custom wins.',
    readTime: '6 min read',
    date: 'Aug 15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    keyword: 'custom software vs off the shelf',
    metaTitle: 'The Real Cost of Off-the-Shelf Software | NSS',
    structure: [
      'Day-one price vs. year-three price',
      'The workaround tax',
      'When off-the-shelf is genuinely right (credibility section)',
      'The tipping-point calculation',
      'What custom actually costs ($50K–$250K documented range)',
    ],
    links: [
      { label: 'Custom Software', href: '/custom-software-development' },
      { label: 'Product Engineering', href: '/product-engineering' },
    ],
  },
  {
    slug: 'cloud-cost-optimization-practices',
    category: 'Cloud',
    title: '6 Cloud Cost Practices That Cut One Bill by 35%',
    excerpt:
      'Why bills only grow — and six practices to stop it. Right-sizing, reserved plans, automated management, and the 35% case walk-through.',
    readTime: '8 min read',
    date: 'Aug 12',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop',
    keyword: 'cloud cost optimization best practices',
    metaTitle: '6 Cloud Cost Practices That Cut One Bill by 35% | NSS',
    structure: [
      'Why bills only grow',
      'Six practices — each with the how: right-sizing; reserved/savings plans; automated cost management; multi-cloud comparison; real-time monitoring; architecture-level fixes',
      'The 35% case walk-through',
      'Self-audit checklist',
    ],
    links: [
      { label: 'Cloud & DevOps', href: '/cloud-devops' },
      { label: 'Cloud Services', href: '/cloud-solutions' },
      { label: 'Cloud optimization case study', href: '/our-work/cloud-optimization' },
    ],
  },
  {
    slug: 'ai-adoption-playbook-mid-market',
    category: 'AI & Data',
    title: 'An AI Adoption Playbook for Mid-Market Companies',
    excerpt:
      'Why most AI pilots die — and how to make yours succeed. Data readiness, picking the right first use case, build vs. buy, and a 90-day plan.',
    readTime: '9 min read',
    date: 'Aug 10',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop',
    keyword: 'AI adoption strategy for mid-size companies',
    metaTitle: 'An AI Adoption Playbook for Mid-Market Companies | NSS',
    structure: [
      'Why most AI pilots die (data readiness, no owner, no production plan)',
      'The readiness audit',
      'Picking a first use case that pays',
      'Build vs. buy vs. API',
      'Governance without bureaucracy',
      '90-day plan',
    ],
    links: [
      { label: 'AI & Data', href: '/ai-data' },
      { label: 'AI Solutions', href: '/ai-ml-development-services' },
      { label: 'Diamond similarity case study', href: '/our-work/diamond-similarity-ai' },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
