// Blog.tsx - Blog Index Page (Redesigned)
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  ChevronRight,
  Check,
  ArrowUpRight,
  Factory,
  Users,
  Server,
  Brain,
  PenTool,
  BookOpen,
  Newspaper,
  Zap,
  Grid,
  List,
  Search,
  Filter,
  TrendingUp,
  Star,
  Play,
  Mic,
  Video,
  Camera,
  Monitor,
  Headphones,
  LayoutGrid,
  Rss,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  Heart,
  Twitter,
  Linkedin,
  Mail as MailIcon,
  Link as LinkIcon,
} from 'lucide-react';

const injectStyles = () => {
  const id = 'blog-premium-redesign';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .blog-premium-redesign {
      background: #FFFFFF;
      color: #0A0A0A;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .blog-premium-redesign .font-serif {
      font-family: 'Georgia', 'Times New Roman', serif;
    }

    .blog-premium-redesign .heading-display {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: clamp(42px, 6vw, 72px);
      line-height: 1.05;
      letter-spacing: -0.02em;
      font-weight: 700;
    }

    .blog-premium-redesign .heading-featured {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: clamp(28px, 3.5vw, 40px);
      line-height: 1.15;
      letter-spacing: -0.01em;
      font-weight: 700;
    }

    .blog-premium-redesign .heading-section {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: clamp(22px, 2.5vw, 30px);
      line-height: 1.2;
      font-weight: 700;
    }

    .blog-premium-redesign .heading-card {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: clamp(18px, 1.4vw, 22px);
      line-height: 1.25;
      font-weight: 700;
    }

    .blog-premium-redesign .text-balance {
      text-wrap: balance;
    }

    /* Navigation */
    .blog-premium-redesign .nav-link {
      position: relative;
      color: #4B5563;
      font-weight: 500;
      font-size: 14px;
      transition: color 0.2s ease;
      padding: 4px 0;
    }
    .blog-premium-redesign .nav-link:hover {
      color: #0A0A0A;
    }
    .blog-premium-redesign .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #0A0A0A;
      transition: width 0.2s ease;
    }
    .blog-premium-redesign .nav-link:hover::after {
      width: 100%;
    }

    /* Hero gradient */
    .blog-premium-redesign .hero-gradient {
      background: radial-gradient(ellipse at 80% 20%, rgba(37, 99, 235, 0.03) 0%, transparent 70%),
                  radial-gradient(ellipse at 20% 80%, rgba(124, 58, 237, 0.02) 0%, transparent 70%);
    }

    /* Blog card - Riverside style */
    .blog-premium-redesign .blog-card-riverside {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #E5E7EB;
      transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      cursor: pointer;
    }
    .blog-premium-redesign .blog-card-riverside:hover {
      transform: translateY(-4px);
      border-color: #D1D5DB;
      box-shadow: 0 12px 40px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03);
    }
    .blog-premium-redesign .blog-card-riverside .card-image-wrap {
      height: 180px;
      background: linear-gradient(135deg, #F3F4F6, #E5E7EB);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .blog-premium-redesign .blog-card-riverside .card-image-wrap .icon-box {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .blog-premium-redesign .blog-card-riverside .card-body {
      padding: 20px 22px 22px;
    }
    .blog-premium-redesign .blog-card-riverside .meta-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #6B7280;
    }
    .blog-premium-redesign .blog-card-riverside .category-pill {
      display: inline-block;
      padding: 3px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.03em;
      background: #F3F4F6;
      color: #4B5563;
    }
    .blog-premium-redesign .blog-card-riverside .read-time {
      font-size: 13px;
      color: #9CA3AF;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    /* Featured post - hero style */
    .blog-premium-redesign .featured-post {
      background: #F8FAFC;
      border-radius: 24px;
      border: 1px solid #E5E7EB;
      padding: 40px;
      transition: all 0.3s ease;
    }
    .blog-premium-redesign .featured-post:hover {
      border-color: #D1D5DB;
      box-shadow: 0 8px 32px rgba(0,0,0,0.04);
    }

    /* Brief card */
    .blog-premium-redesign .brief-card-riverside {
      background: white;
      border-radius: 14px;
      padding: 24px 28px;
      border: 1px solid #E5E7EB;
      transition: all 0.3s ease;
    }
    .blog-premium-redesign .brief-card-riverside:hover {
      border-color: #0A0A0A;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    }

    /* Trending section */
    .blog-premium-redesign .trending-item {
      padding: 12px 0;
      border-bottom: 1px solid #F3F4F6;
      transition: all 0.2s ease;
    }
    .blog-premium-redesign .trending-item:last-child {
      border-bottom: none;
    }
    .blog-premium-redesign .trending-item:hover .trending-title {
      color: #2563EB;
    }

    /* Animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .blog-premium-redesign .animate-fade-up {
      opacity: 0;
      animation: fadeUp 0.6s ease forwards;
    }

    .blog-premium-redesign .animate-fade-in {
      opacity: 0;
      animation: fadeIn 0.6s ease forwards;
    }

    .blog-premium-redesign .delay-1 { animation-delay: 0.05s; }
    .blog-premium-redesign .delay-2 { animation-delay: 0.1s; }
    .blog-premium-redesign .delay-3 { animation-delay: 0.15s; }
    .blog-premium-redesign .delay-4 { animation-delay: 0.2s; }
    .blog-premium-redesign .delay-5 { animation-delay: 0.25s; }
    .blog-premium-redesign .delay-6 { animation-delay: 0.3s; }

    .blog-premium-redesign .hover-lift {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .blog-premium-redesign .hover-lift:hover {
      transform: translateY(-2px);
    }

    .blog-premium-redesign .divider-light {
      height: 1px;
      background: linear-gradient(to right, #E5E7EB, transparent);
    }

    /* Floating elements */
    .blog-premium-redesign .float-slow {
      animation: floatSlow 8s ease-in-out infinite;
    }
    .blog-premium-redesign .float-slow:nth-child(2) { animation-delay: 2s; }
    .blog-premium-redesign .float-slow:nth-child(3) { animation-delay: 4s; }

    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(2deg); }
    }

    .blog-premium-redesign .gradient-text-dark {
      background: linear-gradient(135deg, #0A0A0A 0%, #4B5563 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .blog-premium-redesign .badge-pending {
      background: #FEF3C7;
      color: #92400E;
      font-size: 10px;
      font-weight: 600;
      padding: 2px 10px;
      border-radius: 999px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    /* Responsive tweaks */
    @media (max-width: 768px) {
      .blog-premium-redesign .featured-post {
        padding: 24px;
      }
      .blog-premium-redesign .brief-card-riverside {
        padding: 18px 20px;
      }
    }
  `;
  document.head.appendChild(style);
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.animate-fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Blog() {
  const wrapperRef = useReveal();
  const [activeBrief, setActiveBrief] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
      links: ['/product/rexo-erp', '/industries/manufacturing-software-solutions'],
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
      structure: 'Control vs convenience → Cost math → When each wins → Red flags → Checklist',
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
      structure: 'Day-one vs year-three → Workaround tax → When off-the-shelf works → Tipping point → Cost range',
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
      structure: 'Why bills grow → 6 practices → 35% case study → Self-audit',
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
      structure: 'Why pilots fail → Readiness audit → First use case → Build vs buy → 90-day plan',
    },
  ];

  const trendingPosts = blogPosts.slice(0, 3);

  return (
    <div className="blog-premium-redesign" ref={wrapperRef}>
      
      {/* ===== TOP NAVIGATION ===== */}
      <header className="px-6 md:px-12 lg:px-20 py-4 border-b border-[#E5E7EB] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-serif tracking-tight">NSS</span>
            <span className="text-xs font-medium text-[#6B7280] uppercase tracking-widest ml-1">Blog</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link">Product</a>
            <a href="#" className="nav-link">Solutions</a>
            <a href="#" className="nav-link">Resources</a>
            <a href="#" className="nav-link">For Business</a>
            <a href="#" className="nav-link font-semibold text-[#0A0A0A]">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0A] text-white text-sm font-medium hover:bg-[#1A1A1A] transition-colors">
              <Rss size={14} />
              Subscribe
            </button>
            <button className="p-2 rounded-full hover:bg-[#F3F4F6] transition-colors">
              <Search size={18} className="text-[#6B7280]" />
            </button>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-16 pb-12 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]">Insights</span>
                <span className="w-8 h-[1px] bg-[#D1D5DB]" />
                <span className="text-xs font-medium text-[#2563EB]">Launching soon</span>
              </div>
              <h1 className="heading-display text-[#0A0A0A] text-balance">
                Launch article <br /><span className="gradient-text-dark">briefs</span>
              </h1>
              <p className="text-lg text-[#4B5563] mt-4 max-w-2xl leading-relaxed">
                Full drafts follow after page content is approved. Each article targets a specific keyword, 
                includes structured internal linking, and is designed to rank.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3F4F6] text-sm text-[#4B5563]">
                  <Check size={14} className="text-[#059669]" />
                  1,200–1,800 words
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3F4F6] text-sm text-[#4B5563]">
                  <Check size={14} className="text-[#059669]" />
                  Real author byline
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3F4F6] text-sm text-[#4B5563]">
                  <Check size={14} className="text-[#059669]" />
                  Article schema
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#6B7280] bg-white px-5 py-3 rounded-full border border-[#E5E7EB] shadow-sm">
              <span className="flex items-center gap-1.5">
                <Newspaper size={16} className="text-[#2563EB]" />
                5 articles
              </span>
              <span className="w-px h-4 bg-[#E5E7EB]" />
              <span className="flex items-center gap-1.5">
                <Clock size={16} className="text-[#6B7280]" />
                38 min total
              </span>
            </div>
          </div>
        </div>

        {/* Floating decorations */}
        <div className="absolute top-20 right-20 float-slow opacity-30">
          <PenTool size={32} className="text-[#2563EB]" />
        </div>
        <div className="absolute bottom-20 right-40 float-slow opacity-20">
          <BookOpen size={28} className="text-[#7C3AED]" />
        </div>
      </section>

      {/* ===== TRENDING SECTION (Riverside style) ===== */}
      <section className="px-6 md:px-12 lg:px-20 py-8 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={18} className="text-[#0A0A0A]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0A0A0A]">Trending on NSS</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trendingPosts.map((post, i) => {
              const Icon = post.icon;
              return (
                <Link 
                  key={i}
                  to={`/blog/${post.slug}`}
                  className="trending-item flex items-start gap-4 hover:bg-white hover:rounded-xl hover:px-4 hover:py-3 -mx-4 px-4 py-3 transition-all"
                >
                  <span className="text-2xl font-bold text-[#D1D5DB] font-serif min-w-[32px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-1">
                      <span className="category-pill">{post.category}</span>
                      <span>·</span>
                      <span className="read-time">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="trending-title text-sm font-semibold text-[#0A0A0A] leading-snug transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-xs text-[#6B7280] mt-1">{post.date}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED POST (Hero style from Riverside) ===== */}
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="featured-post">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-3">
                  <span className="category-pill bg-[#0A0A0A] text-white">Featured</span>
                  <span className="text-xs text-[#6B7280]">
                    <Clock size={12} className="inline mr-1" />
                    8 min read
                  </span>
                  <span className="text-xs text-[#6B7280]">·</span>
                  <span className="text-xs text-[#6B7280]">October 11, 2024</span>
                </div>
                <h2 className="heading-featured text-[#0A0A0A] text-balance">
                  How to Record A Podcast Remotely | 4 Methods to Try
                </h2>
                <p className="text-[#4B5563] mt-3 text-lg leading-relaxed max-w-xl">
                  Learn how to record a podcast remotely with our full step-by-step guide. 
                  We'll show you 4 top ways to record a long-distance podcast with remote guests!
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center">
                      <User size={18} className="text-[#4B5563]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0A0A0A]">Stephen Robles</div>
                      <div className="text-xs text-[#6B7280]">Video & Podcast Creator</div>
                    </div>
                  </div>
                  <span className="w-px h-8 bg-[#E5E7EB]" />
                  <div className="text-sm text-[#6B7280]">
                    <span className="block">Podcast recording</span>
                  </div>
                </div>
                <Link 
                  to="/blog/how-to-record-podcast-remotely"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#0A0A0A] hover:text-[#2563EB] transition-colors group"
                >
                  Read full article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-[#E5E7EB] rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#7C3AED]/5" />
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center mx-auto">
                      <Mic size={32} className="text-[#0A0A0A]" />
                    </div>
                    <p className="text-sm text-[#6B7280] mt-3">Featured article</p>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <Play size={12} className="text-[#0A0A0A]" />
                    <span className="text-xs font-medium">Listen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG GRID ===== */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="heading-section text-[#0A0A0A]">All article briefs</h2>
              <p className="text-[#6B7280] text-sm mt-1">5 articles planned for launch</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#6B7280] hover:bg-[#F3F4F6]'}`}
              >
                <Grid size={16} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#6B7280] hover:bg-[#F3F4F6]'}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>

          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {blogPosts.map((post, i) => {
              const Icon = post.icon;
              return (
                <div
                  key={i}
                  className={`blog-card-riverside animate-fade-up delay-${(i % 6) + 1}`}
                  style={{ animationFillMode: 'forwards' }}
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="card-image-wrap">
                      <div className="icon-box" style={{ backgroundColor: post.bg }}>
                        <Icon size={28} style={{ color: post.color }} />
                      </div>
                      <span className="absolute top-3 right-3 category-pill">
                        {post.category}
                      </span>
                      <span className="absolute bottom-3 left-3 badge-pending">
                        Coming Soon
                      </span>
                    </div>
                    <div className="card-body">
                      <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-2">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                        <span className="read-time">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="heading-card text-[#0A0A0A] mb-2 leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-[#6B7280] flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: post.color }} />
                          {post.keyword.length > 30 ? post.keyword.substring(0, 30) + '…' : post.keyword}
                        </span>
                        <span className="text-sm font-medium text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors flex items-center gap-1">
                          Read brief
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== DETAILED BRIEFS (Riverside style accordion) ===== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#0A0A0A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]">Article briefs</span>
            </div>
            <h2 className="heading-section text-[#0A0A0A]">
              Each post, <span className="gradient-text-dark">deconstructed</span>
            </h2>
            <p className="text-[#6B7280] mt-1">
              Target keywords, meta titles, structures, and internal links for every launch article.
            </p>
          </div>

          <div className="space-y-3">
            {blogPosts.map((post, i) => {
              const Icon = post.icon;
              const isActive = activeBrief === i;
              return (
                <div
                  key={i}
                  className={`brief-card-riverside animate-fade-up delay-${(i % 6) + 1}`}
                  style={{ animationFillMode: 'forwards' }}
                  onMouseEnter={() => setActiveBrief(i)}
                  onMouseLeave={() => setActiveBrief(null)}
                >
                  <div 
                    className="flex flex-col lg:flex-row lg:items-start gap-4 cursor-pointer"
                    onClick={() => setActiveBrief(isActive ? null : i)}
                  >
                    <div className="lg:w-[180px] flex-shrink-0">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: post.bg }}
                        >
                          <Icon size={18} style={{ color: post.color }} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: post.color }}>
                            {post.category}
                          </div>
                          <div className="text-xs text-[#9CA3AF]">Brief {i + 1}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 space-y-2">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="heading-card text-[#0A0A0A] hover:text-[#2563EB] transition-colors block"
                      >
                        {post.title}
                      </Link>
                      
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">Keyword</span>
                          <p className="text-[#0A0A0A] mt-0.5 text-sm font-medium">{post.keyword}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">Meta Title</span>
                          <p className="text-[#0A0A0A] mt-0.5 text-sm truncate">{post.metaTitle}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">Links:</span>
                        {post.links.map((link, idx) => (
                          <Link 
                            key={idx}
                            to={link}
                            className="text-xs text-[#2563EB] hover:text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full transition-colors"
                          >
                            {link}
                          </Link>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-2 border-t border-[#F3F4F6] text-xs text-[#6B7280]">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                        <span className="w-px h-3 bg-[#E5E7EB]" />
                        <span>1,200–1,800 words</span>
                        <span className="w-px h-3 bg-[#E5E7EB]" />
                        <span>Article schema</span>
                      </div>

                      {/* Expanded structure */}
                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-[#F3F4F6] animate-fade-in">
                          <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                            <span className="font-semibold uppercase tracking-widest">Structure</span>
                            <span className="w-8 h-px bg-[#E5E7EB]" />
                          </div>
                          <p className="text-sm text-[#4B5563] mt-1.5 leading-relaxed">
                            {post.structure}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="badge-pending">Draft pending</span>
                            <span className="text-xs text-[#6B7280]">Author: TBD</span>
                          </div>
                        </div>
                      )}

                      {!isActive && (
                        <div className="text-xs text-[#9CA3AF] flex items-center gap-1 mt-1">
                          <span className="badge-pending">Click for structure</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== AUTHOR NOTE (Riverside style) ===== */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-[#F3F4F6] flex items-center justify-center flex-shrink-0">
                <User size={24} className="text-[#6B7280]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0A0A0A]">Author bylines pending</h3>
                <p className="text-sm text-[#6B7280] mt-1 max-w-lg">
                  Each article will feature a real author byline with bio. Names and credentials 
                  to be confirmed before publication.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-[#6B7280]">
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#059669]" />
                    Real byline
                  </span>
                  <span className="w-px h-3 bg-[#E5E7EB]" />
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#059669]" />
                    Photo optional
                  </span>
                  <span className="w-px h-3 bg-[#E5E7EB]" />
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#059669]" />
                    Article schema included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <PenTool size={14} className="text-[#2563EB]" />
            <span className="text-xs font-bold text-white/80 tracking-widest">BLOG</span>
          </div>
          <h2 className="heading-section text-white">
            Need a custom content <span className="gradient-text-dark" style={{ WebkitTextFillColor: 'transparent', background: 'linear-gradient(135deg, #60A5FA, #A78BFA)' }}>brief</span>?
          </h2>
          <p className="text-lg text-[#9CA3AF] mt-4 max-w-xl mx-auto leading-relaxed">
            We write for your domain — ERP, AI, cloud, or custom software. Let's talk about what you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0A0A0A] font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              Let's Talk Content
              <ArrowRight size={18} />
            </a>
            <a href="/blog" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              View All Posts
            </a>
          </div>
          <p className="text-sm text-[#6B7280] mt-4">Full drafts ready after brief approval.</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-6 md:px-12 lg:px-20 py-8 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span className="font-serif font-bold text-white">NSS</span>
            <span className="w-px h-4 bg-white/20" />
            <span>© 2024 — All rights reserved</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/80 transition-colors">RSS</a>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white/80 transition-colors"><Twitter size={16} /></a>
              <a href="#" className="hover:text-white/80 transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="hover:text-white/80 transition-colors"><MailIcon size={16} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}