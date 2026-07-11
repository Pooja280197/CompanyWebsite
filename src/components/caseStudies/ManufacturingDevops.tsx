// CaseStudyManufacturingDevOps.tsx
import { useEffect } from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyOverview } from './CaseStudyOverview';
import { CaseStudyProblem } from './CaseStudyProblem';
import { CaseStudyResults } from './CaseStudyResults';
import { CaseStudyCta } from './CaseStudyCta';
import {
  
  Sparkles,
  Users,
  TrendingUp,
  Clock,
  Shield,
 
  Activity,
  
  Building2,
 
  ChevronRight,
 
  Quote,
  
  Briefcase,
  GitBranch,
  
  Server,
  Lock,
  Rocket,
} from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80';

export default function ManufacturingDevOps() {
  useEffect(() => {
    document.title = 'Manufacturing DevOps — NSS Case Study';
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-white">
            <CaseStudyHero
                title="Manufacturing DevOps"
                subtitle="Two specialists, one critical deadline, deployments 25% faster"
                tags={['Manufacturing', 'Staff Augmentation', 'DevOps', 'Embedded Team of 2']}
                image={HERO_IMAGE}
            />

      <CaseStudyOverview
          sectionId="mfg-devops-overview-heading"
          lead="A manufacturing company mid-way through a critical project phase, hitting delays and security risks in CI/CD pipelines they lacked the DevOps expertise to fix — with a deadline that wasn't moving."
          quote="We had the deadline staring at us and no DevOps expertise in-house. Two engineers changed everything."
          quoteAuthor="Project Manager"
          glanceItems={[
                    { label: 'Industry', value: 'Manufacturing' },
                    { label: 'Solution', value: 'Staff Augmentation + DevOps' },
                    { label: 'Team Size', value: '2 Engineers' },
                    { label: 'Impact', value: '25% Faster Deployments', highlight: true },
          ]}
      />

      <CaseStudyProblem
        sectionId="manufacturing-devops-engagement-heading"
        eyebrow="The Engagement"
        eyebrowVariant="engagement"
        title="DevOps expertise, when it mattered most"
        centerIcon={Users}
        centerLabel="Embedded specialists"
        centerStatus="Active"
        nodes={[
          { label: 'Pipeline', icon: GitBranch },
          { label: 'Security', icon: Lock },
          { label: 'Compliance', icon: Shield },
        ]}
        metrics={[
          { label: 'Specialists', value: '2' },
          { label: 'Automation', value: 'End-to-end' },
          { label: 'Disruption', value: 'Zero' },
        ]}
        painPoints={[
          {
            icon: Users,
            text: 'Two experienced DevOps specialists embedded into the client\'s team.',
          },
          {
            icon: Server,
            text: 'They automated the deployment process end to end, hardened pipeline security, and brought the workflow in line with industry compliance standards',
          },
          {
            icon: Rocket,
            text: 'while the client\'s project kept moving around them.',
          },
        ]}
      />

      <CaseStudyResults
        sectionId="manufacturing-devops-results-heading"
        title="The impact"
        metrics={[
          {
            icon: TrendingUp,
            value: '25%',
            label: 'Faster deployments',
            text: 'Automated pipelines cut deployment time',
            tone: 'blue',
          },
          {
            icon: Users,
            value: '2',
            label: 'DevOps specialists',
            text: 'Embedded directly into client workflow',
            tone: 'violet',
          },
          {
            icon: Shield,
            value: '100%',
            label: 'Security gaps closed',
            text: 'Security hardened, compliance enforced',
            tone: 'emerald',
          },
        ]}
        outcome="Deployments 25% faster, security gaps closed, deadline met. The client inherited a deployment process every future project now builds on."
        outcomeIcon={Rocket}
      />

      <CaseStudyCta
        sectionId="manufacturing-devops-cta-heading"
        title="Deadline arriving faster than your hiring?"
        subtitle="Get vetted DevOps specialists embedded in your team — in days, not months."
        primaryHref="/staff-augmentation"
        primaryLabel="Explore Staff Augmentation"
        footnote="No obligation. Just a conversation about your team's needs."
      />
    </article>
  );
}