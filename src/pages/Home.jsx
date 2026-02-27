import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    HiArrowRight,
    HiChip,
    HiServer,
    HiShieldCheck,
    HiGlobe,
    HiLightningBolt,
    HiUserGroup,
    HiAcademicCap,
    HiTrendingUp,
} from 'react-icons/hi'

import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'

// Service overview data
const services = [
    {
        icon: HiChip,
        title: 'Semiconductor Engineering',
        description: 'Transforming ideas into innovative silicon solutions. We provide reliable system design services from concept to chip.',
        href: '/semiconductor-services',
    },
    {
        icon: HiServer,
        title: 'Digital & IT Solutions',
        description: 'Leverage AI-driven automation for seamless cloud migration, cybersecurity, and intelligent enterprise IT transformations.',
        href: '/it-services',
    },
]

// Why Choose Us
const whyUs = [
    { icon: HiLightningBolt, title: 'Deep Technical Expertise', desc: 'Decades of combined experience in VLSI and enterprise IT domains.' },
    { icon: HiShieldCheck, title: 'Enterprise-Grade Reliability', desc: 'Proven delivery frameworks that meet the highest industry standards.' },
    { icon: HiGlobe, title: 'Global Delivery Capability', desc: 'Serving clients across geographies with local domain knowledge.' },
    { icon: HiUserGroup, title: 'Dedicated Resource Models', desc: 'Flexible staffing — project-based, dedicated teams, or managed services.' },
    { icon: HiAcademicCap, title: 'Certified Professionals', desc: 'Our engineers hold leading industry certifications in cloud, SAP, cybersecurity and VLSI.' },
    { icon: HiTrendingUp, title: 'Outcome-Driven Approach', desc: 'We focus on measurable business results, not just technical deliverables.' },
]

// Tech grid
const techStack = [
    'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker',
    'SAP', 'Python', 'TensorFlow', 'Cadence', 'Synopsys',
    'VHDL', 'SystemVerilog', 'Terraform', 'Jenkins', 'Splunk', 'PowerBI',
]

export default function Home() {
    return (
        <div className="overflow-hidden">
            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="relative min-h-screen flex items-center hero-noise" style={{ background: 'transparent' }}>
                {/* Hero Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/Home.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/75 to-brand/50" />
                {/* Glow circles */}
                <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/5 w-60 h-60 bg-blue-400/10 rounded-full blur-2xl" />

                <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 lg:py-0">
                    <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen lg:min-h-0 lg:py-40">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                            >
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                                AI-led, Digital & Systems Engineering
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] font-display"
                            >
                                Owning <br />
                                <span className="gradient-text">End-to-End</span>
                                {' '}Solutions
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="text-blue-100/80 text-lg leading-relaxed max-w-lg"
                            >
                                GYUSO Technologies is a trusted engineering partner driving innovation by designing and building intelligent systems across the full technology stack — from chip to cloud.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.45 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link to="/it-services" className="btn-primary">
                                    Discover What We Do <HiArrowRight />
                                </Link>
                                <Link to="/about" className="btn-white">
                                    Who We Are
                                </Link>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex gap-10 pt-4"
                            >
                                {[
                                    { value: '50+', label: 'Expert Engineers' },
                                    { value: '2+', label: 'Industries Served' },
                                    { value: '100%', label: 'Client Focus' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-3xl font-bold text-white font-display">{stat.value}</div>
                                        <div className="text-blue-300/70 text-xs tracking-wide mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right: Floating card visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.35 }}
                            className="hidden lg:block relative"
                        >
                            <div className="glass-card p-10 space-y-6 border border-white/10 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl" />
                                {[
                                    { label: 'VLSI & RTL Design', pct: 95 },
                                    { label: 'Multi-Cloud Infrastructure', pct: 92 },
                                    { label: 'AI / Machine Learning', pct: 88 },
                                    { label: 'Cybersecurity', pct: 90 },
                                    { label: 'SAP Solutions', pct: 85 },
                                ].map((item, i) => (
                                    <div key={item.label} className="relative space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-blue-100 font-medium">{item.label}</span>
                                            <span className="text-blue-400">{item.pct}%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.pct}%` }}
                                                transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                                                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-6 -right-6 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-glow-lg"
                            >
                                ✦ Hyderabad, India
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                {/* Bottom scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <div className="w-px h-10 bg-gradient-to-b from-blue-400/80 to-transparent" />
                    <span className="text-blue-300/50 text-xs tracking-widest uppercase">Scroll</span>
                </motion.div>
            </section>

            {/* ═══════════════════ COMPANY INTRO ═══════════════════ */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div className="space-y-6">
                                <span className="section-label">Who We Are</span>
                                <h2 className="section-title">
                                    Committed to Transforming<br />Businesses
                                </h2>
                                <p className="text-gray-500 text-base leading-relaxed">
                                    GYUSO Technologies is a trusted AI-led, Digital & Systems Engineering Partner driving innovation by designing and building intelligent systems. By integrating deep semiconductor engineering with data-powered cloud solutions, we help enterprises accelerate their digital transformation.
                                </p>
                                <p className="text-gray-500 text-base leading-relaxed">
                                    Partner with us to optimize operations, achieve scalable business outcomes, turn complexity into clarity, and shape the future of your organization from chip to cloud.
                                </p>
                                <Link to="/about" className="btn-outline inline-flex mt-4">
                                    Learn More About Us <HiArrowRight />
                                </Link>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: HiChip, label: 'VLSI & Semiconductor', color: 'blue' },
                                    { icon: HiServer, label: 'Cloud & IT Infra', color: 'indigo' },
                                    { icon: HiShieldCheck, label: 'Cybersecurity', color: 'sky' },
                                    { icon: HiGlobe, label: 'Global Delivery', color: 'blue' },
                                ].map((item) => (
                                    <div key={item.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-3 hover:border-blue-200 hover:shadow-card transition-all duration-300">
                                        <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                                            <item.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <p className="text-sm font-semibold text-brand">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ SERVICES OVERVIEW ═══════════════════ */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">What We Do</span>
                        <h2 className="section-title">Chart Your Future Course With Confidence</h2>
                        <p className="section-subtitle mx-auto">
                            Our comprehensive suite of Digital Transformation and Engineering solutions empower you to be future-ready.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((svc, i) => (
                            <ServiceCard key={svc.title} {...svc} delay={i * 0.15} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ WHY CHOOSE US ═══════════════════ */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Why GYUSO</span>
                        <h2 className="section-title">The GYUSO Advantage</h2>
                        <p className="section-subtitle mx-auto">
                            Built on a foundation of technical depth, industry expertise, and unwavering commitment to client success.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyUs.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-card transition-all duration-300 space-y-4"
                            >
                                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-base font-bold text-brand font-display">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ TECH EXPERTISE ═══════════════════ */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Technology Expertise</span>
                        <h2 className="section-title">Built on Industry-Leading Tools</h2>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="flex flex-wrap justify-center gap-3">
                            {techStack.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.04 }}
                                    className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-card transition-all duration-200 cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>

                        <div className="mt-16 flex justify-center items-center gap-6 flex-wrap">
                            {[
                                { label: 'Amazon Web Services', short: 'AWS', color: 'bg-orange-50 border-orange-200 text-orange-700' },
                                { label: 'Microsoft Azure', short: 'Azure', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                                { label: 'Google Cloud', short: 'GCP', color: 'bg-sky-50 border-sky-200 text-sky-700' },
                            ].map(({ label, short, color }) => (
                                <div key={short} className={`px-6 py-3 rounded-xl border font-semibold text-sm ${color} hover:opacity-80 transition-opacity duration-300`}>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════ CASE STUDIES ═══════════════════ */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <AnimatedSection className="space-y-4">
                            <span className="section-label">Success Stories</span>
                            <h2 className="section-title">Case Studies</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <Link to="/about" className="text-sm font-semibold text-brand hover:text-blue-600 transition-colors flex items-center gap-2">
                                View All <HiArrowRight />
                            </Link>
                        </AnimatedSection>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'AI-Driven Security Ops for US Healthcare', img: '/images/cyber_content_img.png', link: '#' },
                            { title: '7nm FinFET Tape-Out for Global Semiconductor Leader', img: '/images/analog_hero.png', link: '#' },
                            { title: 'Seamless AWS to Azure Migration for Fortune 500', img: '/images/cloud_hero_img_2.png', link: '#' }
                        ].map((caseStudy, i) => (
                            <AnimatedSection key={i} delay={i * 0.15}>
                                <div className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 h-full flex flex-col">
                                    <div className="h-48 overflow-hidden relative shrink-0">
                                        <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors z-10" />
                                        <img src={caseStudy.img} alt={caseStudy.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6 bg-white flex flex-col items-start gap-4 flex-1 justify-between">
                                        <h3 className="text-lg font-bold text-brand leading-snug">{caseStudy.title}</h3>
                                        <Link to={caseStudy.link} className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group-hover:gap-2 transition-all mt-4">
                                            Know more <HiArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ WHAT WE THINK ═══════════════════ */}
            <section className="section-padding bg-gray-50 border-t border-gray-100">
                <div className="container-max">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <AnimatedSection className="space-y-4">
                            <span className="section-label">Insights & Resources</span>
                            <h2 className="section-title">What We Think</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <Link to="/about" className="text-sm font-semibold text-brand hover:text-blue-600 transition-colors flex items-center gap-2">
                                View All Insights <HiArrowRight />
                            </Link>
                        </AnimatedSection>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <AnimatedSection>
                            <div className="relative rounded-3xl overflow-hidden group h-full min-h-[400px]">
                                <img src="/images/ai_hero_img.png" alt="AI Agentic Telecom" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 space-y-4">
                                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Whitepaper</span>
                                    <h3 className="text-2xl font-bold text-white leading-tight">Beyond Migration: How AI-powered FinOps is Redefining Cloud Transformation</h3>
                                </div>
                            </div>
                        </AnimatedSection>
                        <div className="flex flex-col gap-6">
                            {[
                                { type: 'E-Book', title: 'Zero Trust Architecture for Modern 5G Networks', img: '/images/cyber_hero_img_2.png' },
                                { type: 'Blogs', title: 'Why 2026 Will Be a Breakthrough Year for Custom AI Chips and Semiconductors', img: '/images/ml_content_img.png' },
                                { type: 'Whitepaper', title: 'Transforming Telecom with Agentic AI: Use Cases and Frameworks', img: '/images/cloud_content_img.png' }
                            ].map((insight, i) => (
                                <AnimatedSection key={i} delay={0.2 + (i * 0.1)}>
                                    <div className="flex sm:flex-row flex-col gap-6 group cursor-pointer bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all">
                                        <div className="w-full sm:w-1/3 h-40 sm:h-32 rounded-xl overflow-hidden shrink-0 relative">
                                            <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors z-10" />
                                            <img src={insight.img} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 pr-4 py-2">
                                            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{insight.type}</span>
                                            <h3 className="text-lg font-bold text-brand leading-snug group-hover:text-blue-600 transition-colors">{insight.title}</h3>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ JOIN OUR TEAM ═══════════════════ */}
            <section className="py-24 px-6 bg-white overflow-hidden relative">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-32 hidden lg:block border-l border-blue-100 pointer-events-none" />
                <div className="container-max relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection className="space-y-6">
                            <span className="section-label">Join Our Team</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand leading-tight">
                                Craft your legacy.<br />
                                <span className="text-blue-600">Unleash your potential</span><br />
                                at GYUSO Technologies.
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                                Are you ready to write your career's next chapter? Explore our open positions and discover how your skills can propel the future of semiconductor engineering and cloud technology.
                            </p>
                            <Link to="/careers" className="btn-primary inline-flex mt-4 group">
                                Your Dream Career Awaits <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} className="relative hidden md:block">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 aspect-square lg:aspect-[4/3]">
                                <img src="/images/Contact us.png" alt="Join Our Team" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                                        50+
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand">Deep Tech Experts</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Join the Elite</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ CTA BANNER ═══════════════════ */}
            <section className="relative overflow-hidden bg-hero-gradient py-24 px-6">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

                <div className="relative container-max text-center space-y-8">
                    <AnimatedSection>
                        <span className="inline-block text-blue-300 text-xs font-semibold tracking-widest uppercase mb-6">
                            Let's Build Together
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                            Ready to Transform<br />Your Technology Landscape?
                        </h2>
                        <p className="text-blue-100/70 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
                            Partner with GYUSO Technologies for expert semiconductor and IT solutions that drive real business outcomes.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                            <Link to="/contact" className="btn-primary">
                                Start a Conversation <HiArrowRight />
                            </Link>
                            <Link to="/semiconductor-services" className="btn-white">
                                View Our Services
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
