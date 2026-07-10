// Blog.tsx - Blog Index Page
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  User,
  Tag,
  ChevronRight,
  Quote,
  X,
  Mail,
  Phone,
  MapPin,
  Check,
  ArrowUpRight,
  Circle,
  Dot,
  Plus,
  Minus,
  Star,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  CalendarCheck2,
  Award,
  Gauge,
  BarChart3,
  Users,
  Building2,
  MessageSquare,
  BookOpen,
  PenTool,
  TrendingUp,
  Zap,
  Shield,
  Database,
  Server,
  Rocket,
  Brain,
  Cpu,
  Factory,
  ShoppingBag,
  GraduationCap,
  Plane,
  Trophy,
  Landmark,
  Home,
  Heart,
  Newspaper,
} from 'lucide-react';

const injectStyles = () => {
  const id = 'blog-premium';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .blog-premium {
      background: #FAFBFC;
      color: #0F172A;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .font-editorial {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
    }

    .heading-xl {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
      font-size: clamp(48px, 7vw, 80px);
      line-height: 1.05;
      letter-spacing: -0.03em;
    }

    .heading-lg {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
      font-size: clamp(36px, 5vw, 56px);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .heading-md {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
      font-size: clamp(24px, 2.5vw, 32px);
      line-height: 1.2;
    }

    .reveal-up {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-up.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .reveal-left {
      opacity: 0;
      transform: translateX(-60px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-left.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .reveal-right {
      opacity: 0;
      transform: translateX(60px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-right.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .reveal-scale {
      opacity: 0;
      transform: scale(0.95);
      transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-scale.visible {
      opacity: 1;
      transform: scale(1);
    }

    .gradient-text {
      background: linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .blog-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #f1f5f9;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .blog-card:hover {
      transform: translateY(-6px);
      border-color: transparent;
      box-shadow: 0 20px 48px rgba(15,23,42,0.08), 0 8px 24px rgba(15,23,42,0.04);
    }
    .blog-card .card-image {
      height: 200px;
      background: linear-gradient(135deg, #EFF6FF, #F5F3FF);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .blog-card .card-image .icon-bg {
      width: 64px;
      height: 64px;
      border-radius: 16px;
      background: rgba(37,99,235,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .blog-card .card-body {
      padding: 24px;
    }
    .blog-card .category-tag {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
      background: #EFF6FF;
      color: #2563EB;
      letter-spacing: 0.03em;
    }
    .blog-card .read-time {
      font-size: 13px;
      color: #94a3b8;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .float-el {
      animation: floatEl 6s ease-in-out infinite;
      position: absolute;
      pointer-events: none;
    }
    .float-el:nth-child(2) { animation-delay: 1.5s; }
    .float-el:nth-child(3) { animation-delay: 3s; }

    @keyframes floatEl {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-16px) rotate(4deg); }
    }

    .divider-gradient {
      height: 2px;
      background: linear-gradient(to right, transparent, rgba(37,99,235,0.1), transparent);
      width: 80px;
      margin: 16px 0;
    }

    .brief-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      border: 1px solid #f1f5f9;
      transition: all 0.3s ease;
    }
    .brief-card:hover {
      border-color: #2563EB;
      box-shadow: 0 8px 24px rgba(37,99,235,0.06);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .text-reveal-line');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Blog() {
  const wrapperRef = useReveal();
  const [activeBrief, setActiveBrief] = useState<number | null>(null);

  useEffect(() => {
    injectStyles();
    document.title = 'Blog — NSS';
  }, []);

  const blogPosts = [
    {
      slug: 'signs-you-need-erp-manufacturing',
      category: 'ERP',
      title: '7 Signs Your Factory Has Outgrown Spreadsheets',
      excerpt: 'The hidden costs of manual tracking — and what an ERP actually fixes. Month-end taking a week? Stock counts disagree? Production planned on memory?',
      readTime: '7 min read',
      date: 'Coming Soon',
      icon: Factory,
      color: '#059669',
      bg: '#ECFDF5',
      keyword: 'when does a manufacturing business need ERP',
      metaTitle: '7 Signs Your Factory Has Outgrown Spreadsheets | NSS',
      links: ['/rexo-erp', '/industries/manufacturing-software-solutions'],
    },
    {
      slug: 'staff-augmentation-vs-outsourcing',
      category: 'Talent',
      title: 'Staff Augmentation vs. Outsourcing: An Honest Comparison',
      excerpt: 'The control-vs-convenience axis. Cost math with real scenarios. When augmentation wins — and when outsourcing genuinely does.',
      readTime: '8 min read',
      date: 'Coming Soon',
      icon: Users,
      color: '#7C3AED',
      bg: '#F5F3FF',
      keyword: 'staff augmentation vs outsourcing',
      metaTitle: 'Staff Augmentation vs. Outsourcing: An Honest Comparison | NSS',
      links: ['/staff-augmentation'],
    },
    {
      slug: 'custom-software-vs-off-the-shelf-cost',
      category: 'Strategy',
      title: 'The Real Cost of Off-the-Shelf Software',
      excerpt: 'Day-one price vs. year-three price. The workaround tax. When off-the-shelf is genuinely right — and when custom wins.',
      readTime: '6 min read',
      date: 'Coming Soon',
      icon: Server,
      color: '#D97706',
      bg: '#FFFBEB',
      keyword: 'custom software vs off the shelf',
      metaTitle: 'The Real Cost of Off-the-Shelf Software | NSS',
      links: ['/custom-software-development', '/product-engineering'],
    },
    {
      slug: 'cloud-cost-optimization-practices',
      category: 'Cloud',
      title: '6 Cloud Cost Practices That Cut One Bill by 35%',
      excerpt: 'Why bills only grow — and six practices to stop it. Right-sizing, reserved plans, automated management, and the 35% case walk-through.',
      readTime: '8 min read',
      date: 'Coming Soon',
      icon: Server,
      color: '#2563EB',
      bg: '#EFF6FF',
      keyword: 'cloud cost optimization best practices',
      metaTitle: '6 Cloud Cost Practices That Cut One Bill by 35% | NSS',
      links: ['/cloud-devops', '/cloud-solutions'],
    },
    {
      slug: 'ai-adoption-playbook-mid-market',
      category: 'AI & Data',
      title: 'An AI Adoption Playbook for Mid-Market Companies',
      excerpt: 'Why most AI pilots die — and how to make yours succeed. Data readiness, picking the right first use case, build vs. buy, and a 90-day plan.',
      readTime: '9 min read',
      date: 'Coming Soon',
      icon: Brain,
      color: '#DC2626',
      bg: '#FEF2F2',
      keyword: 'AI adoption strategy for mid-size companies',
      metaTitle: 'An AI Adoption Playbook for Mid-Market Companies | NSS',
      links: ['/ai-data', '/ai-ml-development-services'],
    },
  ];

  return (
    <div className="blog-premium" ref={wrapperRef}>
      
      {/* ===== HERO ===== */}
      <section className="relative min-h-[50vh] flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F5F3FF]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
          <Newspaper className="float-el top-[15%] right-[8%] text-[#2563EB]/10 w-20 h-20" />
          <PenTool className="float-el bottom-[25%] right-[12%] text-[#7C3AED]/10 w-16 h-16" />
          <BookOpen className="float-el top-[35%] left-[85%] text-[#06B6D4]/10 w-14 h-14" />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-8 reveal-up">
            <span className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
              <PenTool size={16} className="text-[#2563EB]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Blog</span>
            <span className="text-xs text-slate-300">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">Insights</span>
          </div>

          <h1 className="heading-xl text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
            Launch article <span className="gradient-text">briefs</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mt-6 leading-relaxed reveal-up" style={{ transitionDelay: '200ms' }}>
            Full drafts follow after page content is approved. Each article targets a specific keyword, includes structured internal linking, and is designed to rank.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 reveal-up" style={{ transitionDelay: '300ms' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
              <Check size={14} className="text-[#059669]" />
              1,200–1,800 words
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
              <Check size={14} className="text-[#059669]" />
              Real author byline
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
              <Check size={14} className="text-[#059669]" />
              Article schema
            </span>
          </div>
        </div>
      </section>

      {/* ===== BLOG GRID ===== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => {
              const Icon = post.icon;
              return (
                <div
                  key={i}
                  className="blog-card"
                  style={{
                    opacity: 0,
                    animation: `fadeUp 0.6s ease ${i * 0.08 + 0.2}s forwards`,
                  }}
                >
                  <div className="card-image">
                    <div className="icon-bg" style={{ backgroundColor: post.bg }}>
                      <Icon size={32} style={{ color: post.color }} />
                    </div>
                    <span 
                      className="absolute top-4 right-4 category-tag"
                      style={{ background: post.bg, color: post.color }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="card-body">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="read-time">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                      <Link to={`/blog/${post.slug}`} className="hover:text-[#2563EB] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors flex items-center gap-1 group"
                      >
                        Read brief
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== DETAILED BRIEFS ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAFBFC]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] mb-4 reveal-up">
              <span className="w-1 h-5 rounded-full bg-[#2563EB]" />
              Article Briefs
            </span>
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              Each post, <span className="gradient-text">deconstructed</span>
            </h2>
            <p className="text-slate-500 mt-2 reveal-up" style={{ transitionDelay: '150ms' }}>
              Target keywords, meta titles, structures, and internal links for every launch article.
            </p>
          </div>

          <div className="space-y-4">
            {blogPosts.map((post, i) => (
              <div
                key={i}
                className="brief-card"
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.5s ease ${i * 0.08 + 0.2}s forwards`,
                }}
                onMouseEnter={() => setActiveBrief(i)}
                onMouseLeave={() => setActiveBrief(null)}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="lg:w-1/4 flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: post.bg }}
                      >
                        <post.icon size={18} style={{ color: post.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: post.color }}>
                          {post.category}
                        </div>
                        <div className="text-xs text-slate-400">Brief {i + 1}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-3/4 space-y-2">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-lg font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                    >
                      {post.title}
                    </Link>
                    
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.05em] text-slate-400">Keyword</span>
                        <p className="text-slate-600 mt-0.5">{post.keyword}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.05em] text-slate-400">Meta Title</span>
                        <p className="text-slate-600 mt-0.5 text-sm truncate">{post.metaTitle}</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.05em] text-slate-400">Internal Links</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {post.links.map((link, idx) => (
                          <Link 
                            key={idx}
                            to={link}
                            className="text-xs text-[#2563EB] hover:text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-1 rounded-full transition-colors"
                          >
                            {link}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.05em] text-slate-400">Structure</span>
                      <p className="text-sm text-slate-500 mt-0.5 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-2 border-t border-slate-100">
                      <span className="text-xs text-slate-400">
                        <Clock size={12} className="inline mr-1" />
                        {post.readTime}
                      </span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400">1,200–1,800 words</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400">Article schema</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUTHOR NOTE ===== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-[#F5F3FF] border border-[#7C3AED]/10">
            <div className="w-16 h-16 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mx-auto mb-4">
              <User size={28} className="text-[#7C3AED]" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A]">Author bylines pending</h3>
            <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
              Each article will feature a real author byline with bio. Names and credentials to be confirmed before publication.
            </p>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#059669]" />
                Real byline
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#059669]" />
                Photo optional
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#059669]" />
                Article schema included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <PenTool size={14} className="text-[#2563EB]" />
            <span className="text-xs font-bold text-white/80 tracking-widest">BLOG</span>
          </div>
          <h2 className="heading-lg text-white">
            Need a custom content <span className="gradient-text">brief</span>?
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
            We write for your domain — ERP, AI, cloud, or custom software. Let's talk about what you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F172A] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Let's Talk Content
              <ArrowRight size={18} />
            </a>
            <a href="/blog" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              View All Posts
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-4">Full drafts ready after brief approval.</p>
        </div>
      </section>
    </div>
  );
}