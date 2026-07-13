// CaseStudyDataPipeline.tsx
import { useEffect } from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyOverview } from './CaseStudyOverview';
import { CaseStudyProblem } from './CaseStudyProblem';
import { CaseStudySolution } from './CaseStudySolution';
import { CaseStudyResults } from './CaseStudyResults';
import { CaseStudyCta } from './CaseStudyCta';
import {
 
  Sparkles,

  Database,
  TrendingUp,

  Shield,
  Zap,
 
  LineChart,
  Activity,
 
  ChevronRight,

  FileText,
  
  Quote,
 
  Server,

  Workflow,
 
  Filter,
  Unlink,
  GitBranch,
} from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80';

const TECHNOLOGIES = [
  { icon: Workflow, name: 'ETL Pipelines', color: '#2563eb', bg: 'bg-blue-50' },
  { icon: Database, name: 'Data Warehousing', color: '#7c3aed', bg: 'bg-purple-50' },
  { icon: LineChart, name: 'Real-time Analytics', color: '#059669', bg: 'bg-emerald-50' },
  { icon: Shield, name: 'Data Governance', color: '#d97706', bg: 'bg-amber-50' },
  { icon: Filter, name: 'Data Quality', color: '#dc2626', bg: 'bg-red-50' },
  { icon: Server, name: 'Scalable Infrastructure', color: '#0891b2', bg: 'bg-cyan-50' },
];

export default function DataPipeline() {
  useEffect(() => {
    document.title = 'Data Pipeline — NSS Case Study';
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-white">
            <CaseStudyHero
                title="Enterprise Data Pipeline"
                subtitle="The pipeline rebuild that made reporting 3x faster"
                tags={['Enterprise Data Management', 'Project Value: $50,000']}
                image={HERO_IMAGE}
            />

      <CaseStudyOverview
          sectionId="data-pipeline-overview-heading"
          lead="A data-driven enterprise that needed a scalable, high-performance pipeline to process and analyze large datasets — and instead had slow ETL, inconsistent data, and no real-time view."
          quote="Our data was everywhere and nowhere. We needed one source of truth that everyone could trust."
          quoteAuthor="Head of Data Strategy"
          glanceItems={[
                    { label: 'Industry', value: 'Data-Driven Enterprise' },
                    { label: 'Technology', value: 'ETL · Data Warehousing' },
                    { label: 'Duration', value: '~4 months' },
                    { label: 'Impact', value: '3x Faster Reporting', highlight: true },
          ]}
      />

      <CaseStudyProblem
        sectionId="data-pipeline-problem-heading"
        eyebrow="The Problem"
        title="Data pipeline was the bottleneck"
        centerIcon={Unlink}
        centerLabel="Data pipeline"
        centerStatus="Blocked"
        nodes={[
          { label: 'ETL jobs', icon: Workflow },
          { label: 'Sources', icon: Server },
          { label: 'Analytics', icon: LineChart },
        ]}
        metrics={[
          { label: 'Processing speed', value: 'Slow' },
          { label: 'Data structure', value: 'Siloed' },
          { label: 'Real-time view', value: 'None' },
        ]}
        painPoints={[
          {
            icon: Activity,
            text: 'Slow data processing that made every downstream job late.',
          },
          {
            icon: GitBranch,
            text: 'Unstructured and disconnected data across sources.',
          },
          {
            icon: Database,
            text: 'Real-time analytics limited to wishful thinking.',
          },
        ]}
      />

      <CaseStudySolution
        sectionId="data-pipeline-solution-heading"
        pillars={[
          {
            icon: Workflow,
            title: 'Optimized ETL pipelines',
            text: 'Optimized ETL pipelines rebuilt for throughput.',
            tag: 'ETL',
            tone: 'blue',
          },
          {
            icon: Database,
            title: 'Warehouse & real-time analytics',
            text: 'Centralized data warehousing as the single source of truth. Real-time analytics on live data.',
            tag: 'Live data',
            tone: 'violet',
          },
          {
            icon: Shield,
            title: 'Governance at scale',
            text: 'Data governance and quality rules enforced across systems, on scalable infrastructure sized to grow.',
            tag: 'Governed',
            tone: 'emerald',
          },
        ]}
        technologies={TECHNOLOGIES}
      />

      <CaseStudyResults
        sectionId="data-pipeline-results-heading"
        title="The impact"
        metrics={[
          {
            icon: Zap,
            value: '50%',
            label: 'Faster ETL',
            text: 'ETL processes now run 50% faster',
            tone: 'blue',
          },
          {
            icon: Shield,
            value: '99.9%',
            label: 'Data availability',
            text: 'Data available when you need it',
            tone: 'violet',
          },
          {
            icon: TrendingUp,
            value: '3x',
            label: 'Faster reporting',
            text: 'Weekly numbers from a day to an hour',
            tone: 'emerald',
          },
        ]}
        outcome="ETL 50% faster, 99.9% data availability, reporting 3x faster. The weekly numbers that took a day now take an hour, and leadership trusts them."
        outcomeIcon={Database}
      />

      <CaseStudyCta
        sectionId="data-pipeline-cta-heading"
        title="Still assembling reports by hand?"
        subtitle="Let's build a data pipeline that delivers insights when you need them — not hours later."
        primaryHref="/data-science-and-analytics"
        primaryLabel="Explore Data Solutions"
        footnote="No obligation. Just a conversation about what's possible with your data."
      />
    </article>
  );
}