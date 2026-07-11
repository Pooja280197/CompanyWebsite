// CaseStudySmartFactory.tsx
import { useEffect } from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyOverview } from './CaseStudyOverview';
import { CaseStudyProblem } from './CaseStudyProblem';
import { CaseStudySolution } from './CaseStudySolution';
import { CaseStudyResults } from './CaseStudyResults';
import { CaseStudyCta } from './CaseStudyCta';
import {

    TrendingUp,

    Shield,
    Zap,
    BarChart3,
    Cpu,
    Database,
    Cloud,
    Activity,
    GitBranch,
    Factory,
    MapPin,
    Cog,
    Unlink,
    Gauge,
} from 'lucide-react';

const HERO_IMAGE =
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80';

const TECHNOLOGIES = [
    { icon: Cloud, name: 'Cloud Platform', color: '#2563eb', bg: 'bg-blue-50' },
    { icon: Cpu, name: 'IoT Sensors', color: '#7c3aed', bg: 'bg-purple-50' },
    { icon: Database, name: 'Data Lake', color: '#059669', bg: 'bg-emerald-50' },
    { icon: BarChart3, name: 'Real-time Analytics', color: '#d97706', bg: 'bg-amber-50' },
    { icon: Activity, name: 'Predictive Models', color: '#dc2626', bg: 'bg-red-50' },
    { icon: Shield, name: 'Security Framework', color: '#0891b2', bg: 'bg-cyan-50' },
];

export default function SmartFactory() {
    useEffect(() => {
        document.title = 'Smart Factory IoT — NSS Case Study';
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="min-h-screen bg-white">
            <CaseStudyHero
                title="Smart Factory IoT"
                subtitle="How a 100-year-old manufacturer cut costs 40% with a connected factory"
                tags={['Manufacturing & Industrial Automation', 'Project Value: $250,000']}
                image={HERO_IMAGE}
            />

            <CaseStudyOverview
                sectionId="smart-factory-overview-heading"
                lead="A shipping manufacturing company with a century of operating history — and a tracking system that hadn't aged as well: divisions, locations, and machines managed manually, with no centralized view of operations."
                quote="We were running a modern factory with paper and spreadsheets. The data existed — it just couldn't talk to itself."
                quoteAuthor="Operations Director"
                glanceItems={[
                                        { label: 'Industry', value: 'Manufacturing' },
                                        { label: 'Technology', value: 'IoT · Cloud · Data' },
                                        { label: 'Duration', value: '~5 months' },
                                        { label: 'Impact', value: '40% Cost Reduction', highlight: true },
                ]}
            />

            <CaseStudyProblem
                sectionId="smart-factory-problem-heading"
                eyebrow="The Problem"
                title="Manual tracking created inefficiencies at every level"
                centerIcon={Unlink}
                centerLabel="Manual tracking"
                centerStatus="Disconnected"
                nodes={[
                    { label: 'Divisions', icon: Factory },
                    { label: 'Locations', icon: MapPin },
                    { label: 'Machines', icon: Cog },
                ]}
                metrics={[
                    { label: 'Real-time visibility', value: '0%' },
                    { label: 'Centralized view', value: 'None' },
                    { label: 'Decision framework', value: 'Missing' },
                ]}
                painPoints={[
                    {
                        icon: GitBranch,
                        text: 'No streamlined process for managing divisions, locations, or machines.',
                    },
                    {
                        icon: Activity,
                        text: 'No real-time monitoring meant zero insight into machine performance or maintenance needs — breakdowns announced themselves.',
                    },
                    {
                        icon: Database,
                        text: 'The data that did exist was unstructured, with no framework for turning it into decisions.',
                    },
                ]}
            />

            <CaseStudySolution
                sectionId="smart-factory-solution-heading"
                lead="A connected factory stack — from cloud foundation to predictive intelligence, built as one system instead of scattered tools."
                pillars={[
                    {
                        icon: Cloud,
                        title: 'Unified cloud platform',
                        text: 'A complete digital transformation on a cloud-based, multi-level system: every division, location, and machine managed in one platform.',
                        tag: 'One platform',
                        tone: 'blue',
                    },
                    {
                        icon: Activity,
                        title: 'Real-time dashboards',
                        text: 'Real-time dashboards and alerts brought live monitoring to factory assets for the first time.',
                        tag: 'Live monitoring',
                        tone: 'violet',
                    },
                    {
                        icon: Gauge,
                        title: 'Predictive maintenance',
                        text: 'Predictive maintenance models watched machine patterns and scheduled service before failures — turning breakdowns from surprises into calendar entries.',
                        tag: 'Scheduled care',
                        tone: 'emerald',
                    },
                ]}
                technologies={TECHNOLOGIES}
            />

            <CaseStudyResults
                sectionId="smart-factory-results-heading"
                metrics={[
                    {
                        icon: Zap,
                        value: '30%',
                        label: 'Faster operations',
                        text: '30% faster operations from automated workflows.',
                        tone: 'blue',
                        progress: 30,
                    },
                    {
                        icon: TrendingUp,
                        value: '50%',
                        label: 'Quicker decisions',
                        text: '50% quicker decision-making on real-time analytics.',
                        tone: 'violet',
                        progress: 50,
                    },
                    {
                        icon: Shield,
                        value: '40%',
                        label: 'Cost savings',
                        text: '40% cost savings as predictive maintenance eliminated unexpected failures.',
                        tone: 'emerald',
                        progress: 40,
                    },
                ]}
                outcome="The platform now runs daily operations for the whole plant."
                outcomeIcon={Factory}
            />

            <CaseStudyCta
                sectionId="smart-factory-cta-heading"
                title="Running a plant on spreadsheets and memory?"
                subtitle="Let's discuss your factory. We'll show you what's possible."
                primaryHref="/industries/manufacturing-software-solutions"
                primaryLabel="Discuss Your Factory"
                footnote="No obligation. Just a conversation about what's possible."
            />
        </article>
    );
}