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
        title: 'Semiconductor Services',
        description: 'Expert VLSI design, verification, and semiconductor engineering solutions for chip-to-system development.',
        href: '/semiconductor-services',
    },
    {
        icon: HiServer,
        title: 'IT Infra & Technology',
        description: 'End-to-end enterprise IT infrastructure, cloud, cybersecurity, AI/ML, and SAP solutions.',
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
                                Semiconductor & IT Technology Leader
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] font-display"
                            >
                                Powering the{' '}
                                <span className="gradient-text">Future</span>
                                {' '}of Technology
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="text-blue-100/80 text-lg leading-relaxed max-w-lg"
                            >
                                GYUSO Technologies delivers world-class VLSI & Semiconductor Engineering with enterprise IT Infrastructure solutions — from chip design to cloud transformation.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.45 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link to="/it-services" className="btn-primary">
                                    Explore Services <HiArrowRight />
                                </Link>
                                <Link to="/about" className="btn-white">
                                    About GYUSO
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
                                    Bridging Silicon Innovation<br />with Digital Transformation
                                </h2>
                                <p className="text-gray-500 text-base leading-relaxed">
                                    GYUSO Technologies LLP is a specialized technology services company headquartered in Hyderabad, India. We combine deep semiconductor engineering expertise with enterprise-grade IT infrastructure capabilities to deliver comprehensive technology solutions.
                                </p>
                                <p className="text-gray-500 text-base leading-relaxed">
                                    From VLSI chip design and verification to multi-cloud architecture, AI/ML implementations, and SAP enterprise solutions — we partner with organizations to accelerate their technology journey.
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
                        <span className="section-label">Our Core Offerings</span>
                        <h2 className="section-title">Industry-Leading Technology Services</h2>
                        <p className="section-subtitle mx-auto">
                            Specialized solutions across two critical technology domains — from silicon to software.
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
