// CaseStudyDiamondAI.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CaseStudyHero } from './CaseStudyHero';
import {

    Sparkles,

    Diamond,

    Shield,
    Zap,
    MoveRight,

    Database,
    Cloud,

    Target,

    ChevronRight,

    FileText,

    Quote,
    X,

    Brain,
    GitBranch,
    Filter,
    ScatterChart,
    Palette,
    Hash,
    Sparkle,
} from 'lucide-react';

const HERO_IMAGE =
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80';

const STATS = [
    { value: '80%', label: 'Accuracy', icon: Target, color: '#2563eb', bg: 'bg-blue-50', border: 'border-blue-200' },
    { value: '60%', label: 'Faster Evaluations', icon: Zap, color: '#7c3aed', bg: 'bg-purple-50', border: 'border-purple-200' },
    { value: '100%', label: 'Consistent Results', icon: Shield, color: '#059669', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { value: 'AI', label: 'Powered', icon: Brain, color: '#d97706', bg: 'bg-amber-50', border: 'border-amber-200' },
];

const TECHNOLOGIES = [
    { icon: GitBranch, name: 'Random Forest', color: '#2563eb', bg: 'bg-blue-50' },
    { icon: ScatterChart, name: 'K-Means Clustering', color: '#7c3aed', bg: 'bg-purple-50' },
    { icon: Filter, name: 'GrabCut Feature Extraction', color: '#059669', bg: 'bg-emerald-50' },
    { icon: Palette, name: 'HSV/LAB Color Analysis', color: '#d97706', bg: 'bg-amber-50' },
    { icon: Hash, name: 'Histogram Intersection', color: '#dc2626', bg: 'bg-red-50' },
    { icon: Brain, name: 'Similarity Engine', color: '#0891b2', bg: 'bg-cyan-50' },
];

const TIMELINE = [
    { phase: 'Discovery', desc: 'Analyzed diamond grading process and data', duration: '2 weeks', icon: Target, color: '#2563eb' },
    { phase: 'Model Design', desc: 'Selected and architected ML techniques', duration: '3 weeks', icon: GitBranch, color: '#7c3aed' },
    { phase: 'Training', desc: 'Trained models on diamond datasets', duration: '6 weeks', icon: Brain, color: '#059669' },
    { phase: 'Integration', desc: 'Built similarity engine and API', duration: '4 weeks', icon: Database, color: '#d97706' },
    { phase: 'Deployment', desc: 'Launched with real-time comparison', duration: '2 weeks', icon: Cloud, color: '#dc2626' },
];

// Custom hook for scroll animations
function useScrollAnimation() {
    const [refs, setRefs] = useState<(HTMLElement | null)[]>([]);
    const [visibleStates, setVisibleStates] = useState<boolean[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        refs.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleStates(prev => {
                                const newStates = [...prev];
                                newStates[index] = true;
                                return newStates;
                            });
                        }
                    });
                },
                { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach(obs => obs.disconnect());
        };
    }, [refs]);

    const registerRef = (el: HTMLElement | null, index: number) => {
        if (el && !refs.includes(el)) {
            setRefs(prev => {
                const newRefs = [...prev];
                newRefs[index] = el;
                return newRefs;
            });
            setVisibleStates(prev => {
                const newStates = [...prev];
                newStates[index] = false;
                return newStates;
            });
        }
    };

    return { registerRef, visibleStates };
}

export default function DiamondAI() {
    const [activeStat, setActiveStat] = useState<number | null>(null);
    const [activeTimeline, setActiveTimeline] = useState<number | null>(null);

    const { registerRef, visibleStates } = useScrollAnimation();

    useEffect(() => {
        document.title = 'Diamond Similarity AI — NSS Case Study';
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="min-h-screen bg-white">
            <CaseStudyHero
                title="Diamond Similarity AI"
                subtitle="Teaching software to judge diamonds — 80% accuracy, 60% faster"
                tags={"Retail & E-Commerce", "AI-Driven Solutions", "Project Value: $150,000"}
                image={HERO_IMAGE}
            />

            {/* Overview Section */}
            <section
                ref={(el) => registerRef(el, 0)}
                className="py-16 px-6 bg-white border-t border-gray-100"
            >
                <div className="max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        <div className="lg:col-span-3">
                            <div
                                className="inline-block px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4"
                                style={{
                                    opacity: visibleStates[0] ? 1 : 0,
                                    transform: visibleStates[0] ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
                                }}
                            >
                                <span className="text-xs font-bold text-blue-700 tracking-wider">OVERVIEW</span>
                            </div>
                            <h2
                                className="text-3xl font-bold text-gray-900"
                                style={{
                                    opacity: visibleStates[0] ? 1 : 0,
                                    transform: visibleStates[0] ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                                }}
                            >
                                The client
                            </h2>
                            <p
                                className="text-gray-600 text-lg leading-relaxed mt-4"
                                style={{
                                    opacity: visibleStates[0] ? 1 : 0,
                                    transform: visibleStates[0] ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
                                }}
                            >
                                A diamond retailer whose matching process depended on expert gemologists comparing stones by eye — accurate on a good day, inconsistent across experts, and unable to keep pace with data volume.
                            </p>
                            <div
                                className="mt-6 flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    opacity: visibleStates[0] ? 1 : 0,
                                    transform: visibleStates[0] ? 'translateX(0)' : 'translateX(-30px)',
                                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
                                }}
                            >
                                <Quote size={24} className="text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-700 italic">
                                        "We needed software that could see what our experts see — and do it consistently, every time."
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">— Head of Operations</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div
                                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    opacity: visibleStates[0] ? 1 : 0,
                                    transform: visibleStates[0] ? 'translateX(0)' : 'translateX(30px)',
                                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
                                }}
                            >
                                <h3 className="text-sm font-semibold text-gray-700 mb-4">At a Glance</h3>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Industry', value: 'Retail & E-Commerce' },
                                        { label: 'Technology', value: 'AI · Machine Learning' },
                                        { label: 'Duration', value: '~4 months' },
                                        { label: 'Impact', value: '80% Accuracy', highlight: true },
                                    ].map((item, i) => (
                                        <div
                                            key={item.label}
                                            className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-sm"
                                            style={{
                                                opacity: visibleStates[0] ? 1 : 0,
                                                transform: visibleStates[0] ? 'translateX(0)' : 'translateX(20px)',
                                                transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08 + 0.35}s`,
                                            }}
                                        >
                                            <span className="text-sm text-gray-500">{item.label}</span>
                                            <span className={`text-sm font-medium ${item.highlight ? 'text-blue-600' : 'text-gray-900'}`}>
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section
                ref={(el) => registerRef(el, 1)}
                className="py-16 px-6 bg-gray-50/50 border-y border-gray-100"
            >
                <div className="max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        <div className="lg:col-span-2">
                            <div
                                className="inline-block px-3 py-1 rounded-full bg-red-100 border border-red-200 mb-4"
                                style={{
                                    opacity: visibleStates[1] ? 1 : 0,
                                    transform: visibleStates[1] ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
                                }}
                            >
                                <span className="text-xs font-bold text-red-700 tracking-wider">THE PROBLEM</span>
                            </div>
                            <h2
                                className="text-3xl font-bold text-gray-900"
                                style={{
                                    opacity: visibleStates[1] ? 1 : 0,
                                    transform: visibleStates[1] ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                                }}
                            >
                                The human eye couldn't keep up
                            </h2>
                        </div>
                        <div className="lg:col-span-3 space-y-4">
                            {[
                                { icon: X, title: 'Subjectivity', desc: 'Traditional matching relied on individual judgment, producing inconsistent results between gemologists', color: '#dc2626' },
                                { icon: X, title: 'Volume', desc: 'Manual processing of diamond features couldn\'t scale with growing inventory', color: '#dc2626' },
                                { icon: X, title: 'No Automation', desc: 'No automated model existed to predict the degree of resemblance between stones at all', color: '#dc2626' },
                            ].map((item, i) => (
                                <div
                                    key={item.title}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-200"
                                    style={{
                                        opacity: visibleStates[1] ? 1 : 0,
                                        transform: visibleStates[1] ? 'translateX(0)' : 'translateX(30px)',
                                        transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1 + 0.25}s`,
                                    }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 animate-pulse-soft">
                                        <X size={16} className="text-red-500" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                                        <div className="text-sm text-gray-500">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section
                ref={(el) => registerRef(el, 2)}
                className="py-16 px-6 bg-white"
            >
                <div className="max-w-[1100px] mx-auto">
                    <div className="text-center mb-12">
                        <div
                            className="inline-block px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-4"
                            style={{
                                opacity: visibleStates[2] ? 1 : 0,
                                transform: visibleStates[2] ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
                            }}
                        >
                            <span className="text-xs font-bold text-emerald-700 tracking-wider">SOLUTION</span>
                        </div>
                        <h2
                            className="text-3xl font-bold text-gray-900"
                            style={{
                                opacity: visibleStates[2] ? 1 : 0,
                                transform: visibleStates[2] ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                            }}
                        >
                            The similarity engine
                        </h2>
                        <p
                            className="text-gray-500 mt-2 max-w-2xl mx-auto"
                            style={{
                                opacity: visibleStates[2] ? 1 : 0,
                                transform: visibleStates[2] ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
                            }}
                        >
                            A combination of AI techniques working together to judge diamonds
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: GitBranch, title: 'Random Forest', desc: 'Attribute-based classification for consistent grading', color: '#2563eb', bg: 'bg-blue-50' },
                            { icon: ScatterChart, title: 'K-Means Clustering', desc: 'Grouped similar stones for pattern recognition', color: '#7c3aed', bg: 'bg-purple-50' },
                            { icon: Filter, title: 'GrabCut Extraction', desc: 'Precise visual analysis of diamond features', color: '#059669', bg: 'bg-emerald-50' },
                            { icon: Palette, title: 'HSV/LAB Analysis', desc: 'Advanced color similarity detection', color: '#d97706', bg: 'bg-amber-50' },
                            { icon: Hash, title: 'Histogram Intersection', desc: 'Comparing visual patterns across stones', color: '#dc2626', bg: 'bg-red-50' },
                            { icon: Sparkle, title: 'Similarity Score', desc: 'Instant comparison output per evaluation', color: '#0891b2', bg: 'bg-cyan-50' },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="group p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                                    style={{
                                        opacity: visibleStates[2] ? 1 : 0,
                                        transform: visibleStates[2] ? 'translateY(0)' : 'translateY(40px)',
                                        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08 + 0.3}s`,
                                    }}
                                >
                                    <div
                                        className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        style={{ color: item.color }}
                                    >
                                        <Icon size={26} strokeWidth={1.75} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                                    <div className="mt-4 w-10 h-0.5 rounded-full bg-gray-200 group-hover:w-16 transition-all duration-300" style={{ background: item.color }} />
                                </div>
                            );
                        })}
                    </div>

                    <div
                        className="mt-10 p-6 rounded-2xl bg-gray-50 border border-gray-100"
                        style={{
                            opacity: visibleStates[2] ? 1 : 0,
                            transform: visibleStates[2] ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s',
                        }}
                    >
                        <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">AI Technology Stack</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            {TECHNOLOGIES.map((tech, i) => {
                                const Icon = tech.icon;
                                return (
                                    <span
                                        key={tech.name}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${tech.bg} border border-gray-200 text-sm text-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
                                        style={{
                                            opacity: visibleStates[2] ? 1 : 0,
                                            transform: visibleStates[2] ? 'scale(1)' : 'scale(0.8)',
                                            transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.05 + 0.85}s`,
                                        }}
                                    >
                                        <Icon size={16} style={{ color: tech.color }} />
                                        {tech.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section
                ref={(el) => registerRef(el, 3)}
                className="py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50"
            >
                <div className="max-w-[1100px] mx-auto">
                    <div className="text-center mb-12">
                        <div
                            className="inline-block px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-4"
                            style={{
                                opacity: visibleStates[3] ? 1 : 0,
                                transform: visibleStates[3] ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
                            }}
                        >
                            <span className="text-xs font-bold text-emerald-700 tracking-wider">RESULTS</span>
                        </div>
                        <h2
                            className="text-3xl font-bold text-gray-900"
                            style={{
                                opacity: visibleStates[3] ? 1 : 0,
                                transform: visibleStates[3] ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                            }}
                        >
                            The impact
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {STATS.slice(0, 3).map((stat, i) => (
                            <div
                                key={stat.label}
                                className="group p-8 rounded-2xl bg-white border border-gray-100 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                                style={{
                                    opacity: visibleStates[3] ? 1 : 0,
                                    transform: visibleStates[3] ? 'scale(1)' : 'scale(0.85)',
                                    transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.12 + 0.3}s`,
                                }}
                                onMouseEnter={() => setActiveStat(i)}
                                onMouseLeave={() => setActiveStat(null)}
                            >
                                <div
                                    className={`text-5xl font-bold transition-all duration-300 ${activeStat === i ? 'scale-110' : ''}`}
                                    style={{ color: stat.color }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</div>
                                <div className="text-sm text-gray-500 mt-1">
                                    {i === 0 && 'Consistent across every evaluation, no off days'}
                                    {i === 1 && 'Freeing expert time for judgments that need a human'}
                                    {i === 2 && 'Instant AI-driven comparisons transformed CX'}
                                </div>
                                <div className="mt-4 h-1 w-12 mx-auto rounded-full bg-gray-200 group-hover:w-20 transition-all duration-300" style={{ background: stat.color }} />
                            </div>
                        ))}
                    </div>

                    <div
                        className="mt-8 p-6 rounded-2xl bg-white border border-gray-100 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        style={{
                            opacity: visibleStates[3] ? 1 : 0,
                            transform: visibleStates[3] ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s',
                        }}
                    >
                        <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">AI now judges diamonds with 80% accuracy — consistently, instantly, at scale.</span>
                            {' '}From subjective expert opinion to objective machine intelligence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section
                ref={(el) => registerRef(el, 4)}
                className="py-16 px-6 bg-white border-t border-gray-100 overflow-hidden"
            >
                <div className="max-w-[900px] mx-auto">
                    <div className="text-center mb-12">
                        <div
                            className="inline-block px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4"
                            style={{
                                opacity: visibleStates[4] ? 1 : 0,
                                transform: visibleStates[4] ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
                            }}
                        >
                            <span className="text-xs font-bold text-blue-700 tracking-wider">TIMELINE</span>
                        </div>
                        <h2
                            className="text-3xl font-bold text-gray-900"
                            style={{
                                opacity: visibleStates[4] ? 1 : 0,
                                transform: visibleStates[4] ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                            }}
                        >
                            How we built it
                        </h2>
                        <p
                            className="text-gray-500 mt-2"
                            style={{
                                opacity: visibleStates[4] ? 1 : 0,
                                transform: visibleStates[4] ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
                            }}
                        >
                            A methodical approach to AI development
                        </p>
                    </div>

                    <div className="relative">
                        <div
                            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 overflow-hidden"
                            style={{
                                opacity: visibleStates[4] ? 1 : 0,
                                transition: 'opacity 0.8s ease 0.4s',
                            }}
                        >
                            <div
                                className="h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-emerald-400"
                                style={{
                                    transform: visibleStates[4] ? 'scaleY(1)' : 'scaleY(0)',
                                    transformOrigin: 'top',
                                    transition: 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.5s',
                                }}
                            />
                        </div>

                        {TIMELINE.map((item, index) => {
                            const Icon = item.icon;
                            const delay = index * 0.12 + 0.6;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={item.phase}
                                    className={`relative flex items-start gap-6 mb-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                    onMouseEnter={() => setActiveTimeline(index)}
                                    onMouseLeave={() => setActiveTimeline(null)}
                                    style={{
                                        opacity: visibleStates[4] ? 1 : 0,
                                        transform: visibleStates[4]
                                            ? 'translateX(0)'
                                            : `translateX(${isEven ? '-30px' : '30px'})`,
                                        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
                                    }}
                                >
                                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                                        <div
                                            className={`w-4 h-4 rounded-full bg-white border-4 transition-all duration-500 ${activeTimeline === index ? 'scale-150 shadow-lg' : ''
                                                }`}
                                            style={{
                                                borderColor: activeTimeline === index ? '#6366f1' : item.color,
                                                animation: visibleStates[4] ? `dotPulse 2s ease-in-out ${index * 0.2}s infinite` : 'none',
                                            }}
                                        >
                                            <div
                                                className={`w-2 h-2 rounded-full mx-auto mt-0.5 transition-all duration-500 ${activeTimeline === index ? 'scale-150' : ''
                                                    }`}
                                                style={{ background: item.color }}
                                            />
                                        </div>
                                    </div>

                                    <div className={`w-full md:w-[42%] pl-12 md:pl-0 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                                        <div
                                            className={`p-5 rounded-xl bg-white border transition-all duration-500 ${activeTimeline === index
                                                    ? 'shadow-xl border-blue-300 -translate-y-1'
                                                    : 'border-gray-100 hover:shadow-md hover:-translate-y-1'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3 mb-1" style={{ justifyContent: isEven ? 'flex-start' : 'flex-end' }}>
                                                <Icon
                                                    size={16}
                                                    style={{ color: item.color }}
                                                    className={`transition-all duration-500 ${activeTimeline === index ? 'scale-125 rotate-12' : ''}`}
                                                />
                                                <span className="text-sm font-bold" style={{ color: item.color }}>{item.phase}</span>
                                                <span className="text-xs text-gray-400 ml-auto">{item.duration}</span>
                                            </div>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                            <div
                                                className={`mt-3 h-0.5 rounded-full transition-all duration-1000 ${activeTimeline === index ? 'w-full' : 'w-0'
                                                    }`}
                                                style={{ background: item.color }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                ref={(el) => registerRef(el, 5)}
                className="py-16 px-6 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-2xl animate-float-slow" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/30 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' }} />

                <div className="relative z-10 max-w-[700px] mx-auto text-center">
                    <div
                        className="p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                        style={{
                            opacity: visibleStates[5] ? 1 : 0,
                            transform: visibleStates[5] ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
                        }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4">
                            <Brain size={12} className="text-blue-500" />
                            <span className="text-xs font-bold text-blue-700 tracking-wider">AI SOLUTIONS</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Have a judgment your business makes by eye?
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-lg mx-auto">
                            Let's build AI that sees what your experts see — consistently, at scale.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                            <Link
                                to="/ai-data"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                            >
                                Explore AI Solutions
                                <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/#case-studies"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                View All Case Studies
                            </Link>
                        </div>
                        <p className="text-xs text-gray-400 mt-3">No obligation. Just a conversation about what's possible with AI.</p>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(4px); opacity: 0.3; }
        }
        .animate-scrollDot {
          animation: scrollDot 2s ease-in-out infinite;
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes bounce-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }

        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 4s ease-in-out infinite;
          background-size: 200% auto;
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
        </article>
    );
}