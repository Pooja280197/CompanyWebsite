// IndustryHealthcare.tsx - Completely Unique with Rich Animations
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Check,
  Heart,
  Stethoscope,
  TrendingUp,
  Shield,
  Zap,
  MoveRight,
  Award,
  BarChart3,
  Clock,
  Lock,
  Globe,
  Users,
  Building2,
  ChevronRight,
  PlayCircle,
  FileText,
  Layers,
  Quote,
  X,
  Briefcase,
  Database,
  Server,
  Rocket,
  FileHeart,
  Pill,
  Hospital,
  Microscope,
  ClipboardCheck,
  UserCheck,
  Activity,
  CalendarHeart,
  Cloud,
} from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80';

const SERVICES = [
  { icon: ClipboardCheck, title: 'Patient Management Systems', desc: 'Registration to discharge on one record', color: '#2563eb', bg: 'bg-blue-50' },
  { icon: CalendarHeart, title: 'Hospital Operations Software', desc: 'Appointments, wards, billing, and inventory connected', color: '#7c3aed', bg: 'bg-purple-50' },
  { icon: Database, title: 'Health Data Engineering', desc: 'Pipelines that make clinical reporting trustworthy', color: '#059669', bg: 'bg-emerald-50' },
  { icon: Globe, title: 'Telehealth & Patient Portals', desc: 'Access without the waiting room', color: '#d97706', bg: 'bg-amber-50' },
  { icon: Lock, title: 'Compliance-Aware Architecture', desc: 'Encryption, access control, and audit trails', color: '#dc2626', bg: 'bg-red-50' },
];

const TECHNOLOGIES = [
  { icon: Database, name: 'HL7/FHIR Integration', color: '#2563eb' },
  { icon: Shield, name: 'HIPAA-Aware Architecture', color: '#7c3aed' },
  { icon: Cloud, name: 'Cloud Platform', color: '#059669' },
  { icon: Lock, name: 'Data Encryption', color: '#d97706' },
  { icon: Activity, name: 'Analytics & Reporting', color: '#dc2626' },
  { icon: UserCheck, name: 'Access Control', color: '#0891b2' },
];

export default function IndustryHealthcare() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<boolean[]>([]);

  useEffect(() => {
    document.title = 'Healthcare Software Development — NSS';
    window.scrollTo(0, 0);
    setTimeout(() => setHeroVisible(true), 200);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => {
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
  }, []);

  const registerSection = (el: HTMLElement | null, index: number) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero - Full Viewport with Parallax Float */}
      <header className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Healthcare software development"
            className="w-full h-full object-cover scale-110 animate-hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-blue-950/90" />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div 
                className="flex items-center gap-2 text-sm text-slate-400 mb-8 animate-slide-down"
                style={{ opacity: heroVisible ? 1 : 0 }}
              >
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-slate-600">/</span>
                <span className="text-blue-400 font-medium">Healthcare</span>
              </div>

              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6 animate-slide-down"
                style={{ opacity: heroVisible ? 1 : 0, animationDelay: '0.1s' }}
              >
                <Heart size={14} className="text-blue-400 animate-pulse" />
                <span className="text-xs font-bold text-blue-200 tracking-widest">HEALTHCARE</span>
              </div>

              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight animate-slide-up"
                style={{ opacity: heroVisible ? 1 : 0, animationDelay: '0.2s' }}
              >
                Software where
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 animate-gradient bg-[length:200%_auto]">
                  patients matter most
                </span>
              </h1>

              <p 
                className="text-xl text-slate-300 leading-relaxed max-w-lg mt-6 animate-slide-up"
                style={{ opacity: heroVisible ? 1 : 0, animationDelay: '0.3s' }}
              >
                Healthcare software with the discipline the domain demands: patient data handled properly, workflows built around clinicians, systems that don't fail at 2 a.m.
              </p>

              <div 
                className="flex flex-wrap gap-4 mt-8 animate-slide-up"
                style={{ opacity: heroVisible ? 1 : 0, animationDelay: '0.4s' }}
              >
                <Link
                  to="/#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Discuss Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300">
                  <PlayCircle size={18} />
                  Watch Overview
                </button>
              </div>
            </div>

            {/* Right - Floating Stats Cards */}
            <div 
              className="grid grid-cols-2 gap-4 animate-slide-right"
              style={{ opacity: heroVisible ? 1 : 0, animationDelay: '0.3s' }}
            >
              {[
                { value: '30%', label: 'Care Efficiency', icon: TrendingUp, color: '#60a5fa' },
                { value: '99.9%', label: 'Data Integrity', icon: Shield, color: '#a78bfa' },
                { value: '24/7', label: 'System Uptime', icon: Clock, color: '#34d399' },
                { value: '100%', label: 'Compliance Ready', icon: Lock, color: '#fbbf24' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 hover:-translate-y-2 transition-all duration-500"
                    style={{
                      animationDelay: `${i * 0.1 + 0.5}s`,
                      opacity: heroVisible ? 1 : 0,
                      animation: heroVisible ? `fade-up 0.6s ease ${i * 0.1 + 0.5}s forwards` : 'none',
                    }}
                  >
                    <Icon 
                      size={28} 
                      className="mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: stat.color }} 
                    />
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-slate-400 animate-scroll-dot" />
          </div>
        </div>
      </header>

      {/* Services - Animated Carousel Style Grid */}
      <section 
        ref={(el) => registerSection(el, 0)}
        className="py-24 px-6 bg-white relative overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4 animate-fade-in" style={{ opacity: visibleSections[0] ? 1 : 0 }}>
              <span className="text-xs font-bold text-blue-700 tracking-wider">WHAT WE BUILD</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900"
              style={{ opacity: visibleSections[0] ? 1 : 0, transform: visibleSections[0] ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease 0.1s' }}
            >
              Healthcare software<br />that actually works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const isActive = activeIndex === i;
              return (
                <div
                  key={service.title}
                  className="group relative p-8 rounded-2xl bg-white border-2 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-3"
                  style={{
                    borderColor: isActive ? service.color : '#f3f4f6',
                    opacity: visibleSections[0] ? 1 : 0,
                    transform: visibleSections[0] ? 'translateY(0)' : 'translateY(40px)',
                    transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08 + 0.2}s`,
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-4 transition-all duration-300 ${
                      isActive ? 'scale-110 rotate-3' : 'group-hover:scale-110'
                    }`}
                    style={{ color: service.color }}
                  >
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.desc}</p>
                  <div 
                    className={`mt-4 h-0.5 rounded-full transition-all duration-500 ${
                      isActive ? 'w-16' : 'w-10 group-hover:w-16'
                    }`}
                    style={{ background: service.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Banner - Animated Counters */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '30%', label: 'Care Efficiency Gain' },
              { value: '99.9%', label: 'Data Integrity' },
              { value: '24/7', label: 'System Uptime' },
              { value: '100%', label: 'Compliance Ready' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="group"
                style={{
                  opacity: 0,
                  animation: `fade-up 0.6s ease ${i * 0.1 + 0.3}s forwards`,
                }}
              >
                <div className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem + Solution - Split with Animation */}
      <section 
        ref={(el) => registerSection(el, 1)}
        className="py-24 px-6 bg-gray-50 relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              style={{
                opacity: visibleSections[1] ? 1 : 0,
                transform: visibleSections[1] ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
              }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-red-100 border border-red-200 mb-4">
                <span className="text-xs font-bold text-red-700 tracking-wider">THE CHALLENGE</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                The fragmentation tax in care delivery
              </h2>
              <div className="mt-6 space-y-3">
                {[
                  'Patient data scattered across systems',
                  'Every lookup costs time',
                  'Every duplicate entry risks error',
                  'Systems that won\'t talk to each other',
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-red-100 hover:shadow-md transition-all duration-300"
                    style={{
                      opacity: visibleSections[1] ? 1 : 0,
                      transform: visibleSections[1] ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.5s ease ${i * 0.08 + 0.3}s`,
                    }}
                  >
                    <X size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                opacity: visibleSections[1] ? 1 : 0,
                transform: visibleSections[1] ? 'translateX(0)' : 'translateX(40px)',
                transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
              }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check size={24} className="text-emerald-600" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Our Solution</span>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: Database, text: 'Unified patient records across all systems' },
                    { icon: Layers, text: 'Streamlined clinical workflows' },
                    { icon: Zap, text: 'Real-time data access for clinicians' },
                    { icon: Shield, text: 'Compliance built into the architecture' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                        style={{
                          opacity: visibleSections[1] ? 1 : 0,
                          transform: visibleSections[1] ? 'translateX(0)' : 'translateX(20px)',
                          transition: `all 0.5s ease ${i * 0.08 + 0.4}s`,
                        }}
                      >
                        <Icon size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Animated Pills */}
      <section 
        ref={(el) => registerSection(el, 2)}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-[1200px] mx-auto text-center">
          <div 
            className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-4"
            style={{ opacity: visibleSections[2] ? 1 : 0, transform: visibleSections[2] ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}
          >
            <span className="text-xs font-bold text-gray-700 tracking-wider">TECHNOLOGY</span>
          </div>
          <h2 
            className="text-4xl font-bold text-gray-900 mb-8"
            style={{ opacity: visibleSections[2] ? 1 : 0, transform: visibleSections[2] ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease 0.15s' }}
          >
            Built on healthcare-grade technology
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {TECHNOLOGIES.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  style={{
                    opacity: visibleSections[2] ? 1 : 0,
                    transform: visibleSections[2] ? 'scale(1)' : 'scale(0.8)',
                    transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.05 + 0.3}s`,
                  }}
                >
                  <Icon size={16} style={{ color: tech.color }} />
                  {tech.name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial - Animated */}
      <section 
        ref={(el) => registerSection(el, 3)}
        className="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl" />
        
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <div 
            className="flex justify-center mb-6"
            style={{ opacity: visibleSections[3] ? 1 : 0, transform: visibleSections[3] ? 'scale(1)' : 'scale(0.8)', transition: 'all 0.6s ease 0.1s' }}
          >
            <Quote size={48} className="text-blue-400" />
          </div>
          <blockquote 
            className="text-2xl md:text-3xl font-serif-italic text-gray-800 leading-relaxed"
            style={{ opacity: visibleSections[3] ? 1 : 0, transform: visibleSections[3] ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease 0.2s' }}
          >
            "Our clinicians were spending more time navigating systems than caring for patients. This transformed everything."
          </blockquote>
          <div 
            className="mt-6 flex items-center justify-center gap-3"
            style={{ opacity: visibleSections[3] ? 1 : 0, transform: visibleSections[3] ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
              CM
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Chief Medical Officer</div>
              <div className="text-sm text-gray-500">Healthcare Provider</div>
            </div>
          </div>
          <div 
            className="mt-4"
            style={{ opacity: visibleSections[3] ? 1 : 0, transform: visibleSections[3] ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.4s' }}
          >
            <Link
              to="/our-work/healthcare-modernization"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
            >
              Read the full case study
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ - Animated Accordion */}
      <section 
        ref={(el) => registerSection(el, 4)}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-[800px] mx-auto">
          <div 
            className="text-center mb-12"
            style={{ opacity: visibleSections[4] ? 1 : 0, transform: visibleSections[4] ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease 0.1s' }}
          >
            <h2 className="text-4xl font-bold text-gray-900">Common questions, straight answers</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Do you build HIPAA-compliant systems?',
                a: 'We build HIPAA-aware architecture — encryption, access controls, audit logging, BAA-compatible hosting — and work with your compliance officer on certification specifics, honestly scoped per project.'
              },
              {
                q: 'Can you integrate with existing hospital systems?',
                a: 'Usually yes — HL7/FHIR interfaces and database-level integration are standard scoping questions in healthcare engagements.'
              },
              {
                q: 'Do you work with clinics or only hospitals?',
                a: 'Both, plus diagnostics, telehealth startups, and health-data companies — the discipline scales in both directions.'
              }
            ].map((faq, i) => {
              const isOpen = expandedFaq === i;
              return (
                <div
                  key={i}
                  className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                  style={{
                    opacity: visibleSections[4] ? 1 : 0,
                    transform: visibleSections[4] ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease ${i * 0.08 + 0.2}s`,
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 text-left"
                    onClick={() => setExpandedFaq(isOpen ? null : i)}
                  >
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    <ChevronRight 
                      size={20} 
                      className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600 text-sm">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Bold */}
      <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-[700px] mx-auto text-center relative z-10">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in"
          >
            <Heart size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-200 tracking-widest">START YOUR PROJECT</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white">Ready to build healthcare software?</h2>
          <p className="text-gray-400 text-lg mt-4">Let's discuss your project. We'll show you what's possible.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Discuss Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">No obligation. Just a conversation about what's possible.</p>
        </div>
      </section>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @keyframes scroll-dot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.3; }
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s ease-in-out infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease-in-out infinite;
          background-size: 200% auto;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes hero-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-hero-zoom {
          animation: hero-zoom 20s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-up 0.6s ease forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.7s ease forwards;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}