// CaseStudyRetailAITeam.tsx
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
 
  Shield,
  
  BarChart3,
  
  ChevronRight,
  Quote,
 
  Briefcase,
  Brain,
  
  UserPlus,
  
  Database,
  LineChart,
} from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80';

export default function RetailAITeam() {
  useEffect(() => {
    document.title = 'Retail AI Team — NSS Case Study';
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-white">
            <CaseStudyHero
                title="Retail AI Team"
                subtitle="Five embedded AI engineers, one 20% sales lift"
                tags={['Staff Augmentation', 'AI & Data', 'Embedded Team of 5']}
                image={HERO_IMAGE}
            />

      <CaseStudyOverview
          sectionId="retail-ai-overview-heading"
          lead="A retail company sitting on customer data it couldn't use: fragmented across systems, feeding marketing campaigns that fired blind — missed opportunities on both sales and engagement."
          quote="We had all this customer data but couldn't turn it into sales. We needed people who could build the models — inside our team."
          quoteAuthor="VP of Marketing"
          glanceItems={[
          { label: 'Industry', value: 'Retail' },
          { label: 'Solution', value: 'Staff Augmentation + AI' },
          { label: 'Team Size', value: '5 Engineers' },
          { label: 'Impact', value: '20% Sales Lift', highlight: true },
          ]}
      />

      <CaseStudyProblem
        sectionId="retail-ai-engagement-heading"
        eyebrow="The Engagement"
        eyebrowVariant="engagement"
        title="Skills, not a vendor"
        centerIcon={Users}
        centerLabel="Embedded team"
        centerStatus="Active"
        nodes={[
          { label: 'AI devs', icon: Brain },
          { label: 'Models', icon: LineChart },
          { label: 'Insights', icon: BarChart3 },
        ]}
        metrics={[
          { label: 'Team size', value: '5' },
          { label: 'Location', value: 'In-house' },
          { label: 'Knowledge', value: 'Retained' },
        ]}
        painPoints={[
          {
            icon: UserPlus,
            text: 'Rather than outsourcing a project, the client extended their team: five of our AI developers embedded directly into their workflow, under their direction.',
          },
          {
            icon: Brain,
            text: 'The team implemented predictive models, advanced segmentation, and campaign-targeting tools',
          },
          {
            icon: Database,
            text: 'Turning the client\'s own data into actionable insight, inside the client\'s own walls.',
          },
        ]}
      />

      <CaseStudyResults
        sectionId="retail-ai-team-results-heading"
        title="The impact"
        metrics={[
          {
            icon: TrendingUp,
            value: '20%',
            label: 'Sales lift',
            text: 'Through targeted campaigns and improved engagement',
            tone: 'blue',
          },
          {
            icon: Users,
            value: '5',
            label: 'AI engineers',
            text: 'Embedded directly into client workflow',
            tone: 'violet',
          },
          {
            icon: Shield,
            value: '100%',
            label: 'In-house knowledge',
            text: 'Knowledge stayed in-house, skills leveled up',
            tone: 'emerald',
          },
        ]}
        outcome="20% sales lift, 5 engineers, one embedded team. The client team leveled up alongside — the knowledge stayed in-house, because the work happened in-house."
        outcomeIcon={Users}
      />

      <CaseStudyCta
        sectionId="retail-ai-team-cta-heading"
        title="Need skills, not a vendor?"
        subtitle="Extend your team with vetted engineers who work inside your workflow — not outside it."
        primaryHref="/staff-augmentation"
        primaryLabel="Explore Staff Augmentation"
        footnote="No obligation. Just a conversation about your team's needs."
      />
    </article>
  );
}