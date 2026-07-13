// CaseStudyDiamondAI.tsx
import { useEffect } from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyOverview } from './CaseStudyOverview';
import { CaseStudyProblem } from './CaseStudyProblem';
import { CaseStudySolution } from './CaseStudySolution';
import { CaseStudyResults } from './CaseStudyResults';
import { CaseStudyCta } from './CaseStudyCta';
import {

    Sparkles,

    Diamond,

    Shield,
    Zap,

    Database,
    Cloud,

    Target,

    ChevronRight,

    FileText,

    Quote,

    Brain,
    GitBranch,
    Filter,
    ScatterChart,
    Palette,
    Hash,
    Sparkle,
    Eye,
    Gem,
    Layers,
    Unlink,
    Users,
} from 'lucide-react';

const HERO_IMAGE =
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80';

const TECHNOLOGIES = [
    { icon: GitBranch, name: 'Random Forest', color: '#2563eb', bg: 'bg-blue-50' },
    { icon: ScatterChart, name: 'K-Means Clustering', color: '#7c3aed', bg: 'bg-purple-50' },
    { icon: Filter, name: 'GrabCut Feature Extraction', color: '#059669', bg: 'bg-emerald-50' },
    { icon: Palette, name: 'HSV/LAB Color Analysis', color: '#d97706', bg: 'bg-amber-50' },
    { icon: Hash, name: 'Histogram Intersection', color: '#dc2626', bg: 'bg-red-50' },
    { icon: Brain, name: 'Similarity Engine', color: '#0891b2', bg: 'bg-cyan-50' },
];

export default function DiamondAI() {
    useEffect(() => {
        document.title = 'Diamond Similarity AI — NSS Case Study';
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="min-h-screen bg-white">
            <CaseStudyHero
                title="Diamond Similarity AI"
                subtitle="Teaching software to judge diamonds — 80% accuracy, 60% faster"
                tags={['Retail & E-Commerce', 'AI-Driven Solutions', 'Project Value: $150,000']}
                image={HERO_IMAGE}
            />

            <CaseStudyOverview
                sectionId="diamond-overview-heading"
                lead="A diamond retailer whose matching process depended on expert gemologists comparing stones by eye — accurate on a good day, inconsistent across experts, and unable to keep pace with data volume."
                quote="We needed software that could see what our experts see — and do it consistently, every time."
                quoteAuthor="Head of Operations"
                glanceItems={[
                                        { label: 'Industry', value: 'Retail & E-Commerce' },
                                        { label: 'Technology', value: 'AI · Machine Learning' },
                                        { label: 'Duration', value: '~4 months' },
                                        { label: 'Impact', value: '80% Accuracy', highlight: true },
                ]}
            />

            <CaseStudyProblem
                sectionId="diamond-problem-heading"
                eyebrow="The Problem"
                title="The human eye couldn't keep up"
                centerIcon={Unlink}
                centerLabel="Manual matching"
                centerStatus="Subjective"
                nodes={[
                    { label: 'Gemologists', icon: Users },
                    { label: 'Inventory', icon: Gem },
                    { label: 'Matching', icon: Layers },
                ]}
                metrics={[
                    { label: 'Consistency', value: 'Variable' },
                    { label: 'Processing scale', value: 'Limited' },
                    { label: 'Automation', value: 'None' },
                ]}
                painPoints={[
                    {
                        icon: Eye,
                        text: 'Subjectivity: traditional matching relied on individual judgment, producing inconsistent results between gemologists.',
                    },
                    {
                        icon: Diamond,
                        text: 'Volume: manual processing of diamond features couldn\'t scale.',
                    },
                    {
                        icon: Brain,
                        text: 'And there was no automated model to predict the degree of resemblance between stones at all.',
                    },
                ]}
            />

            <CaseStudySolution
                sectionId="diamond-similarity-solution-heading"
                techStackLabel="AI Technology Stack"
                pillars={[
                    {
                        icon: Brain,
                        title: 'Classification & clustering',
                        text: 'A similarity engine combining several techniques where each earned its place: a Random Forest classifier for attribute-based classification, K-Means clustering to group similar stones',
                        tag: 'ML engine',
                        tone: 'blue',
                    },
                    {
                        icon: Filter,
                        title: 'Visual & color analysis',
                        text: 'GrabCut feature extraction for precise visual analysis, and histogram intersection with HSV/LAB color analysis for color similarity.',
                        tag: 'GrabCut & HSV',
                        tone: 'violet',
                    },
                    {
                        icon: Sparkle,
                        title: 'Instant similarity scores',
                        text: 'The output: a similarity score per comparison, generated instantly.',
                        tag: 'Real-time',
                        tone: 'emerald',
                    },
                ]}
                technologies={TECHNOLOGIES}
            />

            <CaseStudyResults
                sectionId="diamond-similarity-results-heading"
                title="The impact"
                metrics={[
                    {
                        icon: Target,
                        value: '80%',
                        label: 'Accuracy',
                        text: 'Consistent across every evaluation, no off days',
                        tone: 'blue',
                    },
                    {
                        icon: Zap,
                        value: '60%',
                        label: 'Faster evaluations',
                        text: 'Freeing expert time for judgments that need a human',
                        tone: 'violet',
                    },
                    {
                        icon: Shield,
                        value: '100%',
                        label: 'Consistent results',
                        text: 'Instant AI-driven comparisons transformed CX',
                        tone: 'emerald',
                    },
                ]}
                outcome="AI now judges diamonds with 80% accuracy — consistently, instantly, at scale. From subjective expert opinion to objective machine intelligence."
                outcomeIcon={Gem}
            />

            <CaseStudyCta
                sectionId="diamond-similarity-cta-heading"
                title="Have a judgment your business makes by eye?"
                subtitle="Let's build AI that sees what your experts see — consistently, at scale."
                primaryHref="/ai-data"
                primaryLabel="Explore AI Solutions"
                footnote="No obligation. Just a conversation about what's possible with AI."
            />
        </article>
    );
}