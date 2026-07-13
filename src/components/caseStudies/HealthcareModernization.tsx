// CaseStudyHealthcareModernization.tsx
import { useEffect } from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyOverview } from './CaseStudyOverview';
import { CaseStudyProblem } from './CaseStudyProblem';
import { CaseStudySolution } from './CaseStudySolution';
import { CaseStudyResults } from './CaseStudyResults';
import { CaseStudyCta } from './CaseStudyCta';
import {
  
  Sparkles,
 
  TrendingUp,
  Clock,
  Shield,
 
  Cloud,
 
  Activity,

  ChevronRight,

  FileText,

  Layers,
  Quote,

  Heart,
  Stethoscope,
 
  Database,
  Server,
  Lock,
  Unlink,
  Users,
} from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80';

const TECHNOLOGIES = [
  { icon: Database, name: 'Data Integration', color: '#2563eb', bg: 'bg-blue-50' },
  { icon: Server, name: 'Patient Management', color: '#7c3aed', bg: 'bg-purple-50' },
  { icon: Shield, name: 'HIPAA Compliance', color: '#059669', bg: 'bg-emerald-50' },
  { icon: Cloud, name: 'Cloud Platform', color: '#d97706', bg: 'bg-amber-50' },
  { icon: Lock, name: 'Data Security', color: '#dc2626', bg: 'bg-red-50' },
  { icon: Activity, name: 'Analytics & Reporting', color: '#0891b2', bg: 'bg-cyan-50' },
];

export default function HealthcareModernization() {
  useEffect(() => {
    document.title = 'Healthcare Modernization — NSS Case Study';
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-white">
            <CaseStudyHero
                title="Healthcare Modernization"
                subtitle="Modernizing patient management: 30% more efficient care operations"
                tags={['Healthcare', 'Custom Software', 'Data Integration']}
                image={HERO_IMAGE}
            />

      <CaseStudyOverview
          sectionId="healthcare-overview-heading"
          lead="A healthcare provider whose care delivery was slowed by its own systems: fragmented patient data and outdated management software creating delays clinicians felt daily."
          quote="Our clinicians were spending more time navigating systems than caring for patients. That had to change."
          quoteAuthor="Chief Medical Officer"
          glanceItems={[
                    { label: 'Industry', value: 'Healthcare' },
                    { label: 'Solution', value: 'Custom Software + Data' },
                    { label: 'Focus', value: 'Patient Management' },
                    { label: 'Impact', value: '30% More Efficient', highlight: true },
          ]}
      />

      <CaseStudyProblem
        sectionId="healthcare-problem-heading"
        eyebrow="The Problem"
        title="Fragmented systems, delayed care"
        centerIcon={Unlink}
        centerLabel="Patient data"
        centerStatus="Fragmented"
        nodes={[
          { label: 'Records', icon: FileText },
          { label: 'Departments', icon: Users },
          { label: 'Care delivery', icon: Heart },
        ]}
        metrics={[
          { label: 'Lookup time', value: 'High' },
          { label: 'Duplicate risk', value: 'Elevated' },
          { label: 'Care delays', value: 'Costly' },
        ]}
        painPoints={[
          {
            icon: Stethoscope,
            text: 'Patient information scattered across systems meant every lookup cost time, every duplicate entry risked error',
          },
          {
            icon: Activity,
            text: 'operational inefficiency compounded across departments',
          },
          {
            icon: Clock,
            text: 'delays in care delivery being the cost that mattered most.',
          },
        ]}
      />

      <CaseStudySolution
        sectionId="healthcare-modernization-solution-heading"
        pillars={[
          {
            icon: Heart,
            title: 'Integrated patient platform',
            text: 'A modernized patient management platform: advanced database solutions integrating the fragmented records',
            tag: 'Unified records',
            tone: 'blue',
          },
          {
            icon: Layers,
            title: 'Staff-first workflows',
            text: 'streamlined workflows built around how staff actually move.',
            tag: 'Workflows',
            tone: 'violet',
          },
          {
            icon: Activity,
            title: 'Faster, smoother care',
            text: 'Faster access to patient information, smoother operations, fewer workarounds.',
            tag: 'Better care',
            tone: 'emerald',
          },
        ]}
        technologies={TECHNOLOGIES}
      />

      <CaseStudyResults
        sectionId="healthcare-modernization-results-heading"
        title="The impact"
        metrics={[
          {
            icon: TrendingUp,
            value: '30%',
            label: 'More efficient care',
            text: 'Streamlined operations and workflows',
            tone: 'blue',
          },
          {
            icon: Database,
            value: 'One',
            label: 'Unified platform',
            text: 'All patient data in one place',
            tone: 'violet',
          },
          {
            icon: Shield,
            value: 'Faster',
            label: 'Patient access',
            text: 'Clinicians spend less time on systems',
            tone: 'emerald',
          },
        ]}
        outcome="30% more efficient care operations. Care delivery got faster and more accurate. Satisfaction rose measurably — for staff and for patients."
        outcomeIcon={Heart}
      />

      <CaseStudyCta
        sectionId="healthcare-modernization-cta-heading"
        title="Systems slowing your clinicians?"
        subtitle="Let's modernize your patient management. Faster access, better care, happier staff."
        primaryHref="/industries/healthcare-software-development"
        primaryLabel="Explore Healthcare Solutions"
        footnote="No obligation. Just a conversation about what's possible."
      />
    </article>
  );
}