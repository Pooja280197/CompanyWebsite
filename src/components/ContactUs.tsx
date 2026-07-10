// Contact.tsx - Contact Us Page
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Clock,
  MessageSquare,
  Users,
  Sparkles,
  Shield,
  TrendingUp,
  Globe,
  Building2,
  ChevronRight,
  Quote,
  X,
  Briefcase,
  Database,
  Server,
  Rocket,
  Calendar,
  MapPin as MapPinIcon,
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
  UserCheck,
  Activity,
  Scan,
  Brain,
  Ambulance,
  Syringe,
  Bandage,
  Eye,
  RefreshCw,
  DollarSign,
  FileCheck,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Mic,
  Video,
  Smartphone,
  Zap,
  Crown,
  Heart,
  Footprints,
  Dumbbell,
  Medal,
  Target,
  Flag,
  Timer,
} from 'lucide-react';

const injectStyles = () => {
  const id = 'contact-premium';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .contact-premium {
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

    .text-reveal-line {
      overflow: hidden;
      display: block;
    }
    .text-reveal-line > span {
      display: inline-block;
      transform: translateY(110%);
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .text-reveal-line.visible > span {
      transform: translateY(0);
    }

    .gradient-text {
      background: linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
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

    .contact-card {
      background: white;
      border-radius: 16px;
      padding: 20px 24px;
      border: 1px solid #f1f5f9;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .contact-card:hover {
      border-color: #2563EB;
      box-shadow: 0 8px 24px rgba(37,99,235,0.08);
      transform: translateY(-2px);
    }

    .form-input {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      font-size: 15px;
      transition: all 0.3s ease;
      background: white;
      font-family: 'Inter', sans-serif;
    }
    .form-input:focus {
      outline: none;
      border-color: #2563EB;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
    }
    .form-input::placeholder {
      color: #94a3b8;
    }
    .form-label {
      font-size: 13px;
      font-weight: 600;
      color: #0F172A;
      display: block;
      margin-bottom: 6px;
    }
    .form-select {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      font-size: 15px;
      transition: all 0.3s ease;
      background: white;
      font-family: 'Inter', sans-serif;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23475569' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 16px center;
    }
    .form-select:focus {
      outline: none;
      border-color: #2563EB;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
    }
    textarea.form-input {
      resize: vertical;
      min-height: 120px;
    }

    .step-circle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 18px;
      background: #EFF6FF;
      color: #2563EB;
      flex-shrink: 0;
    }

    .social-icon-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      color: #475569;
      background: white;
    }
    .social-icon-btn:hover {
      border-color: #2563EB;
      color: #2563EB;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(37,99,235,0.1);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .success-message {
      animation: slideDown 0.5s ease forwards;
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

export default function Contact() {
  const wrapperRef = useReveal();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    need: '',
    description: '',
    budget: '',
    consent: false,
  });

  useEffect(() => {
    injectStyles();
    document.title = 'Contact Us — NSS';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In production, send to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const needs = [
    'Custom software',
    'AI & Data',
    'Cloud & DevOps',
    'Staff augmentation',
    'Rexo ERP demo',
    'CleanPlan demo',
    'Education ERP demo',
    'Something else',
  ];

  const budgets = [
    'Under ₹5L',
    '₹5L – ₹15L',
    '₹15L – ₹35L',
    '₹35L – ₹75L',
    'Above ₹75L',
    'Not sure yet',
  ];

  const steps = [
    { icon: Mail, label: 'You write to us' },
    { icon: Users, label: '30-min call to understand' },
    { icon: Check, label: 'Fixed quote or honest alternative' },
  ];

  return (
    <div className="contact-premium" ref={wrapperRef}>
      
      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F5F3FF]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
          <Mail className="float-el top-[15%] right-[8%] text-[#2563EB]/10 w-20 h-20" />
          <MessageSquare className="float-el bottom-[25%] right-[12%] text-[#7C3AED]/10 w-16 h-16" />
          <Phone className="float-el top-[35%] left-[85%] text-[#06B6D4]/10 w-14 h-14" />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-8 reveal-up">
            <span className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
              <MessageSquare size={16} className="text-[#2563EB]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</span>
            <span className="text-xs text-slate-300">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">Let's Talk</span>
          </div>

          <h1 className="heading-xl text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
            Tell us what's
            <br />
            <span className="gradient-text">slowing you down</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mt-6 leading-relaxed reveal-up" style={{ transitionDelay: '200ms' }}>
            A 30-minute call. An honest assessment. A fixed quote if we're the right fit — a straight answer if we're not. Replies within 24 business hours.
          </p>

          <div className="grid grid-cols-3 gap-3 mt-10 reveal-up" style={{ transitionDelay: '300ms' }}>
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                  <step.icon size={14} className="text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#2563EB]">Step {i + 1}</div>
                  <div className="text-xs font-medium text-slate-700">{step.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM + CONTACT INFO ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="mb-8 reveal-up">
                <h2 className="heading-lg text-[#0F172A]">
                  Let's start a <span className="gradient-text">conversation</span>
                </h2>
                <p className="text-slate-500 mt-2">Fill in the details and we'll get back to you within 24 business hours.</p>
              </div>

              {formSubmitted ? (
                <div className="success-message p-8 rounded-2xl bg-[#ECFDF5] border border-[#059669]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#059669]/20 flex items-center justify-center flex-shrink-0">
                      <Check size={24} className="text-[#059669]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A]">Got it.</h3>
                      <p className="text-slate-600 mt-2 leading-relaxed">
                        A real person reads this — expect a reply within 24 business hours.
                      </p>
                      <p className="text-slate-600 mt-2 text-sm">
                        If it's urgent, call <a href="tel:+918878003344" className="font-semibold text-[#059669] hover:underline">+91 88780 03344</a>.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="form-label">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="form-label">What do you need? *</label>
                    <select
                      name="need"
                      value={formData.need}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Select an option</option>
                      {needs.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Tell us about it *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="What's the challenge? What are you trying to achieve? The more detail, the better we can help."
                    />
                  </div>

                  <div>
                    <label className="form-label">Budget Range (Optional)</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select a range</option>
                      {budgets.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <p className="text-xs text-slate-400 mt-1">Filters expectations kindly — helps us scope appropriately.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
                    />
                    <label className="text-sm text-slate-500">
                      I consent to NSS storing my information to respond to my inquiry. 
                      <span className="text-[#DC2626]">*</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                  >
                    Send Message
                    <Send size={18} />
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    * Required fields. We'll never share your information.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="reveal-up">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB] mb-4">Reach us directly</h3>
                
                <div className="space-y-3">
                  <a href="tel:+918878003344" className="contact-card hover:border-[#059669]">
                    <Phone size={20} className="text-[#059669]" />
                    <div>
                      <div className="text-xs text-slate-400">Phone</div>
                      <div className="font-semibold text-[#0F172A]">+91 88780 03344</div>
                    </div>
                  </a>

                  <a href="mailto:info@nagarsoftwaresolution.com" className="contact-card hover:border-[#2563EB]">
                    <Mail size={20} className="text-[#2563EB]" />
                    <div>
                      <div className="text-xs text-slate-400">Email</div>
                      <div className="font-semibold text-[#0F172A]">info@nagarsoftwaresolution.com</div>
                    </div>
                  </a>

                  <a href="#" className="contact-card hover:border-[#25D366]">
                    <MessageSquare size={20} className="text-[#25D366]" />
                    <div>
                      <div className="text-xs text-slate-400">WhatsApp</div>
                      <div className="font-semibold text-[#0F172A]">Click to chat</div>
                    </div>
                  </a>

                  <div className="contact-card hover:border-[#7C3AED]">
                    <MapPinIcon size={20} className="text-[#7C3AED]" />
                    <div>
                      <div className="text-xs text-slate-400">Office</div>
                      <div className="font-semibold text-[#0F172A] text-sm">
                        308 Shagun Arcade, Plot No. 8, PU-4,<br />
                        Scheme No. 54, AB Road, Vijay Nagar,<br />
                        Indore (M.P.) 452010, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="reveal-up" style={{ transitionDelay: '100ms' }}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Follow us</h4>
                <div className="flex gap-2">
                  {[
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Twitter, label: 'X' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Youtube, label: 'YouTube' },
                  ].map((social, i) => (
                    <a key={i} href="#" className="social-icon-btn" aria-label={social.label}>
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="reveal-up" style={{ transitionDelay: '150ms' }}>
                <div className="rounded-2xl overflow-hidden border border-slate-200 h-[200px] bg-slate-100 flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <MapPinIcon size={32} className="mx-auto mb-2 text-[#2563EB]" />
                    <p className="text-sm">Google Map</p>
                    <p className="text-xs">308 Shagun Arcade, Indore</p>
                    <p className="text-xs text-slate-300 mt-2">(Embedded map placeholder)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT HAPPENS AFTER ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAFBFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] mb-4 reveal-up">
              <span className="w-1 h-5 rounded-full bg-[#2563EB]" />
              The Process
            </span>
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              What happens <span className="gradient-text">after you write</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                icon: Mail,
                title: 'We read it',
                description: 'A person, not an autoresponder. We take the time to understand what you\'re telling us.'
              },
              {
                number: '02',
                icon: Users,
                title: '30-minute call',
                description: 'We talk about the problem before proposing anything — no assumptions.'
              },
              {
                number: '03',
                icon: Check,
                title: 'Quote or honesty',
                description: 'A fixed, itemized quote — or an honest \'here\'s a better way\' that might not involve us.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 text-center hover:border-[#2563EB]/20 hover:shadow-lg transition-all duration-300"
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.6s ease ${i * 0.1 + 0.2}s forwards`,
                }}
              >
                <div className="w-14 h-14 rounded-full bg-[#EFF6FF] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#2563EB]">{item.number}</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#F0F9FF] flex items-center justify-center mx-auto mb-4">
                  <item.icon size={20} className="text-[#2563EB]" />
                </div>
                <h4 className="font-bold text-[#0F172A]">{item.title}</h4>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#F5F3FF] border border-[#7C3AED]/10 text-center reveal-up">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-[#7C3AED]">Both answers are free.</span> We don't charge for discovery — and we don't sell you something you don't need.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA - Return to top? ===== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 text-sm">Ready to start?</p>
          <a href="#" className="inline-flex items-center gap-2 mt-3 text-white font-semibold hover:text-[#2563EB] transition-colors group">
            Back to top
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}