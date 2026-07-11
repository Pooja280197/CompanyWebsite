// CaseStudyCloudOptimization.tsx
import { useEffect } from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyOverview } from './CaseStudyOverview';
import { CaseStudyProblem } from './CaseStudyProblem';
import { CaseStudySolution } from './CaseStudySolution';
import { CaseStudyResults } from './CaseStudyResults';
import { CaseStudyCta } from './CaseStudyCta';
import {

    Sparkles,

    Cloud,

    Shield,
    Zap,

    Database,

    Activity,

    ChevronRight,

    FileText,

    Quote,

    Server,

    Lock,
    GitBranch,
    RefreshCw,
    DollarSign,
    Unlink,
    Gauge,

} from 'lucide-react';

const HERO_IMAGE =
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80';

const TECHNOLOGIES = [
    { icon: Server, name: 'Load Balancing', color: '#2563eb', bg: 'bg-blue-50' },
    { icon: Activity, name: 'Auto-Scaling', color: '#7c3aed', bg: 'bg-purple-50' },
    { icon: Database, name: 'Database Tuning', color: '#059669', bg: 'bg-emerald-50' },
    { icon: Shield, name: 'DDoS Protection', color: '#d97706', bg: 'bg-amber-50' },
    { icon: Lock, name: 'Zero-Trust Security', color: '#dc2626', bg: 'bg-red-50' },
    { icon: GitBranch, name: 'CI/CD Automation', color: '#0891b2', bg: 'bg-cyan-50' },
];

export default function CloudOptimization() {
    useEffect(() => {
        document.title = 'Cloud Optimization — NSS Case Study';
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="min-h-screen bg-white">
            <CaseStudyHero
                title="Cloud Optimization"
                subtitle="99.99% uptime on a cloud bill 35% smaller"
                tags={['Cloud & IT Infrastructure', 'Project Value: $80,000']}
                image={HERO_IMAGE}
            />

            <CaseStudyOverview
                sectionId="cloud-overview-heading"
                lead="A high-traffic enterprise application whose growth had outrun its infrastructure: traffic spikes it couldn't absorb, performance bottlenecks users felt, and security exposure nobody could ignore."
                quote="Our infrastructure was holding us back. We needed to scale without breaking the bank."
                quoteAuthor="VP of Engineering"
                glanceItems={[
                                        { label: 'Industry', value: 'Enterprise SaaS' },
                                        { label: 'Technology', value: 'Cloud · DevOps' },
                                        { label: 'Duration', value: '~3.5 months' },
                                        { label: 'Impact', value: '99.99% Uptime', highlight: true },
                ]}
            />

            <CaseStudyProblem
                sectionId="cloud-problem-heading"
                eyebrow="The Problem"
                title="Infrastructure couldn't keep up with growth"
                centerIcon={Unlink}
                centerLabel="Legacy stack"
                centerStatus="Overloaded"
                nodes={[
                    { label: 'Traffic', icon: Activity },
                    { label: 'Queries', icon: Gauge },
                    { label: 'Security', icon: Shield },
                ]}
                metrics={[
                    { label: 'Scalability', value: 'Low' },
                    { label: 'Query latency', value: 'High' },
                    { label: 'Monthly cost', value: 'Rising' },
                ]}
                painPoints={[
                    {
                        icon: Activity,
                        text: 'Unpredictable traffic surges the architecture couldn\'t scale for.',
                    },
                    {
                        icon: Server,
                        text: 'Query inefficiencies delaying user interactions.',
                    },
                    {
                        icon: Lock,
                        text: 'DDoS exposure demanding serious DNS and network security. And unoptimized instances quietly inflating the monthly bill.',
                    },
                ]}
            />

            <CaseStudySolution
                sectionId="cloud-optimization-solution-heading"
                pillars={[
                    {
                        icon: Server,
                        title: 'Load balancing & database tuning',
                        text: 'Load balancing with auto-scaling to absorb surges automatically. Database tuning that improved query speed 30%.',
                        tag: 'Auto-scale',
                        tone: 'blue',
                    },
                    {
                        icon: Shield,
                        title: 'Security overhaul',
                        text: 'A security overhaul: DDoS protection, DNS hardening, zero-trust access.',
                        tag: 'Hardened',
                        tone: 'violet',
                    },
                    {
                        icon: GitBranch,
                        title: 'Cost & deployment automation',
                        text: 'Cost optimization across the instance fleet. And CI/CD automation so deployments stopped being risk events.',
                        tag: 'CI/CD',
                        tone: 'emerald',
                    },
                ]}
                technologies={TECHNOLOGIES}
            />

            <CaseStudyResults
                sectionId="cloud-optimization-results-heading"
                title="The impact"
                metrics={[
                    {
                        icon: Shield,
                        value: '99.99%',
                        label: 'Uptime',
                        text: 'Reliable under peak load — enterprise-grade',
                        tone: 'blue',
                    },
                    {
                        icon: Zap,
                        value: '40%',
                        label: 'Faster performance',
                        text: 'Users felt the difference immediately',
                        tone: 'violet',
                    },
                    {
                        icon: DollarSign,
                        value: '35%',
                        label: 'Cost savings',
                        text: 'Smart resource allocation paid for itself',
                        tone: 'emerald',
                    },
                ]}
                outcome="99.99% uptime, 40% faster, 35% lower costs. Continuous threat monitoring in place, zero-downtime deployments ever since."
                outcomeIcon={Cloud}
            />

            <CaseStudyCta
                sectionId="cloud-optimization-cta-heading"
                title="Bill climbing while performance falls?"
                subtitle="Get a free cloud assessment. We'll show you exactly where you're wasting money and what needs to change."
                primaryHref="/cloud-devops"
                primaryLabel="Get Free Cloud Assessment"
                footnote="No obligation. Just clarity on what's possible."
            />
        </article>
    );
}