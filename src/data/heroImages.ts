export interface HeroImageConfig {
  src: string;
  objectPosition?: string;
  alt: string;
}

const unsplash = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

/** Topic-specific hero backgrounds — subject on the right, text readable on the left */
export const HERO_IMAGES = {
  // Service pages
  brandStrategy: {
    src: unsplash('photo-1552664730-d307ca884978'),
    objectPosition: '90% center',
    alt: 'Brand strategy workshop',
  },
  webDevelopment: {
    src: unsplash('photo-1498050108023-c5249f4df085'),
    objectPosition: '88% center',
    alt: 'Web development workspace',
  },
  customSoftware: {
    src: unsplash('photo-1555066931-4365d14bab8c'),
    objectPosition: '86% center',
    alt: 'Custom software development',
  },
  digitalMarketing: {
    src: unsplash('photo-1460925895917-afdab827c52f'),
    objectPosition: '90% center',
    alt: 'Digital marketing analytics',
  },
  uiUxDesign: {
    src: unsplash('photo-1561070791-2526d30994b5'),
    objectPosition: '88% center',
    alt: 'UI UX design process',
  },
  analytics: {
    src: unsplash('photo-1504868584819-f8e8b4b6d7e3'),
    objectPosition: '88% center',
    alt: 'Data science and analytics dashboard',
  },
  mobileApps: {
    src: unsplash('photo-1512941937669-90a1b58e7e9c'),
    objectPosition: '88% center',
    alt: 'Mobile app development',
  },
  aiSolutions: {
    src: unsplash('photo-1677442136019-21780ecad995'),
    objectPosition: '86% center',
    alt: 'Artificial intelligence technology',
  },
  cloudServices: {
    src: unsplash('photo-1451187580459-43490279c0fa'),
    objectPosition: '84% center',
    alt: 'Cloud infrastructure and servers',
  },
  ecommerce: {
    src: unsplash('photo-1556742049-0cfed4f6a45d'),
    objectPosition: '88% center',
    alt: 'E-commerce online store',
  },
  seo: {
    src: unsplash('photo-1432888622747-4eb9a8f2c293'),
    objectPosition: '90% center',
    alt: 'SEO and search visibility',
  },
  consulting: {
    src: unsplash('photo-1600880292203-757bb62b4baf'),
    objectPosition: '88% center',
    alt: 'IT consulting meeting',
  },
  devops: {
    src: unsplash('photo-1558494949-ef010cbdcc31'),
    objectPosition: '86% center',
    alt: 'DevOps and automation',
  },
  maintenanceSupport: {
    src: unsplash('photo-1553877522-43269d4ea984'),
    objectPosition: '88% center',
    alt: 'Software maintenance and support',
  },
  salesforce: {
    src: unsplash('photo-1551434678-e076c223a692'),
    objectPosition: '90% center',
    alt: 'Salesforce CRM teamwork',
  },

  // Pillar pages
  productEngineering: {
    src: unsplash('photo-1504639725590-34d0984388bd'),
    objectPosition: '86% center',
    alt: 'Product engineering and code',
  },
  aiAndData: {
    src: unsplash('photo-1620712943543-bcc4688e7485'),
    objectPosition: '84% center',
    alt: 'AI and data science',
  },
  cloudAndDevops: {
    src: unsplash('photo-1451187580459-43490279c0fa'),
    objectPosition: '82% center',
    alt: 'Cloud and DevOps infrastructure',
  },
  staffAugmentation: {
    src: unsplash('photo-1522071820081-009f0129c71c'),
    objectPosition: '88% center',
    alt: 'Team extension and collaboration',
  },
} as const satisfies Record<string, HeroImageConfig>;

export type HeroImageKey = keyof typeof HERO_IMAGES;
