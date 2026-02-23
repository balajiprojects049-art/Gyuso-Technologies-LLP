import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    HiArrowRight, HiChip, HiCog, HiBeaker,
    HiClipboardList, HiRefresh, HiDatabase, HiCheck,
    HiLightningBolt, HiShieldCheck,
} from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'

/* ─── Data ─────────────────────────────────────────────────────────────── */

const stats = [
    { value: '10+', label: 'Years Combined Experience' },
    { value: '50+', label: 'VLSI Engineers' },
    { value: '5nm', label: 'Advanced Node Capability' },
    { value: '100%', label: 'Quality Committed' },
]

const services = [
    {
        icon: HiChip,
        title: 'RTL Design & Verification',
        desc: 'Full RTL design services using SystemVerilog and VHDL. Functional verification with UVM/OVM testbench development, code coverage, and formal verification.',
        tags: ['SystemVerilog', 'UVM', 'Formal Verification'],
        color: 'blue',
    },
    {
        icon: HiCog,
        title: 'Physical Design & Implementation',
        desc: 'End-to-end physical design flow including floorplanning, placement, clock tree synthesis, routing, and signoff for advanced sub-5nm process nodes.',
        tags: ['Floorplanning', 'CTS', 'Routing'],
        color: 'indigo',
    },
    {
        icon: HiBeaker,
        title: 'DFT & Test Engineering',
        desc: 'Design for Testability insertion, ATPG pattern generation, JTAG, boundary scan, and memory BIST ensuring optimal test coverage and silicon quality.',
        tags: ['DFT', 'ATPG', 'BIST'],
        color: 'blue',
    },
    {
        icon: HiDatabase,
        title: 'Analog & Mixed-Signal Design',
        desc: 'Custom analog and mixed-signal IP design, characterization, and integration supporting advanced FinFET and sub-7nm process technologies.',
        tags: ['FinFET', 'Mixed-Signal', 'IP Design'],
        color: 'indigo',
    },
    {
        icon: HiClipboardList,
        title: 'Timing Analysis & Signoff',
        desc: 'Static timing analysis, timing closure, and MCMM analysis. Power analysis and IR drop signoff for production-ready chips.',
        tags: ['STA', 'MCMM', 'IR Drop'],
        color: 'blue',
    },
    {
        icon: HiRefresh,
        title: 'Post-Silicon Validation',
        desc: 'Silicon bring-up, debug, and validation services. Board-level testing, lab automation, and production test development for chip-to-system validation.',
        tags: ['Silicon Bring-up', 'Board Test', 'Lab Automation'],
        color: 'indigo',
    },
]

const capabilities = [
    'CMOS / FinFET / FD-SOI Process Nodes',
    'Sub-7nm Advanced Node Experience',
    'LP / HP / ULVT Library Characterization',
    'IEEE 1149.1 JTAG Compliance',
    'LPDDR / DDR4 / PCIe Interface Design',
    'AMS IP Integration',
    'Functional Safety - ISO 26262 Support',
    'Pre and Post-Silicon Correlation',
]

const tools = [
    { name: 'Cadence Virtuoso', cat: 'Analog/Digital' },
    { name: 'Synopsys Design Compiler', cat: 'Synthesis' },
    { name: 'Mentor Calibre', cat: 'DRC/LVS' },
    { name: 'Questasim', cat: 'Simulation' },
    { name: 'Primetime', cat: 'STA' },
    { name: 'Innovus', cat: 'P&R' },
    { name: 'Genus', cat: 'RTL Synthesis' },
    { name: 'SystemVerilog', cat: 'HDL' },
    { name: 'UVM', cat: 'Verification' },
    { name: 'SPICE', cat: 'Simulation' },
    { name: 'MATLAB', cat: 'Algorithm' },
    { name: 'Synopsys VCS', cat: 'Simulation' },
]

const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We start with deep technical discovery — understanding your design spec, process node, and timeline constraints.' },
    { step: '02', title: 'Architecture & Planning', desc: 'Definition of chip architecture, design partitioning, and a tailored project delivery plan with key milestones.' },
    { step: '03', title: 'Design & Implementation', desc: 'Rigorous RTL design, physical implementation, and DFT engineering executed by our VLSI specialists.' },
    { step: '04', title: 'Verification & Signoff', desc: 'Exhaustive functional verification, STA, power analysis, and DRC/LVS signoff before tape-out.' },
]

/* ─── Circuit Background SVG ───────────────────────────────────────────── */
const CircuitBg = ({ className = '' }) => (
    <svg
        className={`absolute inset-0 w-full h-full opacity-5 pointer-events-none ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
    >
        <g stroke="#60a5fa" strokeWidth="1" fill="none">
            <line x1="0" y1="100" x2="800" y2="100" />
            <line x1="0" y1="300" x2="800" y2="300" />
            <line x1="0" y1="500" x2="800" y2="500" />
            <line x1="100" y1="0" x2="100" y2="600" />
            <line x1="300" y1="0" x2="300" y2="600" />
            <line x1="500" y1="0" x2="500" y2="600" />
            <line x1="700" y1="0" x2="700" y2="600" />
            <rect x="80" y="80" width="40" height="40" rx="4" />
            <rect x="280" y="280" width="40" height="40" rx="4" />
            <rect x="480" y="80" width="40" height="40" rx="4" />
            <rect x="680" y="280" width="40" height="40" rx="4" />
            <rect x="280" y="480" width="40" height="40" rx="4" />
            <circle cx="100" cy="300" r="8" />
            <circle cx="300" cy="100" r="8" />
            <circle cx="500" cy="300" r="8" />
            <circle cx="700" cy="100" r="8" />
            <circle cx="700" cy="500" r="8" />
            <line x1="120" y1="100" x2="280" y2="100" />
            <line x1="100" y1="120" x2="100" y2="280" />
            <line x1="320" y1="300" x2="480" y2="300" />
            <line x1="500" y1="120" x2="500" y2="280" />
            <line x1="520" y1="100" x2="680" y2="100" />
        </g>
    </svg>
)

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function SemiconductorServices() {
    return (
        <div className="overflow-hidden">

            {/* ══════════════════════════════
          HERO — Dark Navy, circuit bg
      ══════════════════════════════ */}
            <section className="relative bg-hero-gradient min-h-[90vh] flex items-center px-6 overflow-hidden">
                {/* Hero Background Image */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url('/images/semi-chip.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
                {/* Circuit art */}
                <CircuitBg />
                {/* Glow blobs */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />

                <div className="relative max-w-7xl mx-auto w-full py-40">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: copy */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                            >
                                <HiChip className="text-blue-400" />
                                Semiconductor Engineering
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[1.05]"
                            >
                                Empowering Next-Gen<br />
                                <span className="gradient-text">Silicon Solutions</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="text-blue-100/75 text-lg leading-relaxed max-w-lg"
                            >
                                From RTL design to post-silicon validation, GYUSO delivers end-to-end semiconductor engineering services with deep expertise in advanced process nodes.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.45 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link to="/contact" className="btn-primary">
                                    Discuss Your Project <HiArrowRight />
                                </Link>
                                <a href="#services" className="btn-white">
                                    Our Service Areas
                                </a>
                            </motion.div>
                        </div>

                        {/* Right: Premium Hero Image and Stats Overlay */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                <img
                                    src="/images/semi-chip.png"
                                    alt="Advanced Semiconductor VLSI Chip"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute top-6 right-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                    Sub-5nm Mastery
                                </div>
                            </div>

                            {/* Stats Card Overlay */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute -bottom-8 -left-8 md:-left-12 glass-card p-6 border border-white/20 shadow-glow-lg max-w-[280px] hidden sm:block"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.slice(0, 4).map((s) => (
                                        <div key={s.label}>
                                            <div className="text-xl font-bold text-white font-display gradient-text">{s.value}</div>
                                            <div className="text-[10px] text-blue-200/60 uppercase tracking-tighter leading-tight">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <div className="w-px h-10 bg-gradient-to-b from-blue-400/80 to-transparent" />
                    <span className="text-blue-300/50 text-xs tracking-widest uppercase">Scroll</span>
                </motion.div>
            </section>


            {/* ══════════════════════════════
          EXPERTISE BAND — White
      ══════════════════════════════ */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase">Trusted EDA Partners & Platforms</p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                                {['Cadence', 'Synopsys', 'Mentor Graphics', 'Siemens EDA', 'Ansys'].map((b) => (
                                    <span key={b} className="px-5 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-all duration-200 cursor-default">
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>


            {/* ══════════════════════════════
          OVERVIEW — Split Screen, White
      ══════════════════════════════ */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Left copy */}
                        <AnimatedSection className="space-y-7">
                            <span className="section-label">Our Approach</span>
                            <h2 className="section-title">Full-Spectrum VLSI Engineering</h2>
                            <p className="text-gray-500 text-base leading-relaxed">
                                GYUSO's Semiconductor Services practice brings together experienced VLSI engineers proficient in RTL design, functional verification, physical design, DFT, analog design, and post-silicon validation.
                            </p>
                            <p className="text-gray-500 text-base leading-relaxed">
                                We partner with semiconductor companies, fabless design houses, SoC teams, and EDA firms to accelerate chip development timelines while maintaining the highest quality standards.
                            </p>
                            <div className="flex items-center gap-6 pt-2">
                                <Link to="/contact" className="btn-primary inline-flex">
                                    Start a Project <HiArrowRight />
                                </Link>
                                <Link to="/about" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
                                    About GYUSO <HiArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Right: capabilities checklist with image background */}
                        <AnimatedSection delay={0.2}>
                            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl group">
                                <img
                                    src="/images/semi-lab.png"
                                    alt="Semiconductor Fabrication Lab"
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="relative bg-white/90 backdrop-blur-sm p-8 h-full">
                                    <h3 className="text-sm font-bold text-brand font-display mb-6 uppercase tracking-wider">
                                        Key Technical Capabilities
                                    </h3>
                                    <div className="space-y-3.5">
                                        {capabilities.map((cap) => (
                                            <div key={cap} className="flex items-start gap-3 group/item">
                                                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                                                    <HiCheck className="text-white w-3 h-3" />
                                                </div>
                                                <span className="text-sm text-gray-600 leading-snug">{cap}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════
          SERVICE CARDS — Light Gray
      ══════════════════════════════ */}
            <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
                <CircuitBg className="opacity-[0.03]" />
                <div className="container-max relative">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Service Areas</span>
                        <h2 className="section-title">Our VLSI Service Portfolio</h2>
                        <p className="section-subtitle mx-auto">
                            Six specialized engineering disciplines covering the complete semiconductor design and validation flow.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((svc, i) => (
                            <motion.div
                                key={svc.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
                                whileHover={{ y: -6 }}
                                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-5"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                                    <svc.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                {/* Content */}
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-base font-bold text-brand font-display group-hover:text-blue-600 transition-colors duration-300">
                                        {svc.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                                </div>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {svc.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full group-hover:bg-blue-100 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════
          DARK SPLIT — Design Flow
      ══════════════════════════════ */}
            <section className="relative bg-hero-gradient overflow-hidden">
                <img
                    src="/images/semi-logic.png"
                    alt="Digital Logic Flow"
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                />
                <CircuitBg />
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="container-max relative py-24 px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: heading */}
                        <AnimatedSection className="space-y-6">
                            <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase">Delivery Methodology</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                                Our Proven<br />
                                <span className="gradient-text">Design Flow</span>
                            </h2>
                            <p className="text-blue-100/70 text-base leading-relaxed max-w-md">
                                A structured, phased delivery model that brings predictability, transparency, and quality to every semiconductor engagement.
                            </p>
                            <Link to="/contact" className="btn-primary inline-flex">
                                Get Started <HiArrowRight />
                            </Link>
                        </AnimatedSection>

                        {/* Right: process steps */}
                        <AnimatedSection delay={0.2} className="space-y-6">
                            {process.map((p, i) => (
                                <motion.div
                                    key={p.step}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.12 }}
                                    className="flex gap-5 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-300 font-display text-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        {p.step}
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <h4 className="text-white font-bold text-sm font-display">{p.title}</h4>
                                        <p className="text-blue-100/60 text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatedSection>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════
          EDA TOOLS — White
      ══════════════════════════════ */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 space-y-4">
                        <span className="section-label">Toolchain</span>
                        <h2 className="section-title">Industry EDA Tools & Platforms</h2>
                        <p className="section-subtitle mx-auto">
                            We work with the full breadth of professional EDA tooling used by leading semiconductor companies worldwide.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {tools.map((tool, i) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group flex items-center justify-between px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-400 hover:bg-blue-50 hover:shadow-card transition-all duration-200 cursor-default"
                            >
                                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors duration-200">
                                    {tool.name}
                                </span>
                                <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-200 font-medium">
                                    {tool.cat}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════
          WHY GYUSO — Light Gray
      ══════════════════════════════ */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Left: points */}
                        <AnimatedSection className="space-y-8">
                            <span className="section-label">Why GYUSO</span>
                            <h2 className="section-title">Your Trusted Semiconductor Engineering Partner</h2>
                            <div className="space-y-5">
                                {[
                                    { icon: HiLightningBolt, title: 'Speed to Market', desc: 'Dedicated VLSI teams ramp up fast — no lengthy hiring cycles, no ramp-up delays.' },
                                    { icon: HiShieldCheck, title: 'Silicon Quality', desc: 'Strict design review, sign-off checklists, and gated milestones for zero-defect tape-out.' },
                                    { icon: HiChip, title: 'Process Node Depth', desc: 'Hands-on experience with 28nm, 16nm, 7nm, and sub-5nm design flows.' },
                                    { icon: HiCog, title: 'Tool Agnostic', desc: 'Proficient across Cadence, Synopsys, Mentor, Siemens EDA ecosystems.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 group">
                                        <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors duration-300">
                                            <item.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-brand font-display">{item.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Right: engagement models */}
                        <AnimatedSection delay={0.2} className="space-y-5">
                            <h3 className="text-lg font-bold text-brand font-display">Flexible Engagement Models</h3>
                            {[
                                { title: 'Dedicated VLSI Teams', desc: 'A named team of engineers embedded in your project, aligned to your tools, flows, and processes. Monthly or quarterly retainer.' },
                                { title: 'Project-Based Delivery', desc: 'Fixed-scope, fixed-budget engagements for specific chips, IPs, or design blocks. Clear deliverables, no surprises.' },
                                { title: 'Staff Augmentation', desc: 'Individual or small groups of VLSI specialists onboarded quickly into your existing team and flows.' },
                            ].map((m, i) => (
                                <motion.div
                                    key={m.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.12 }}
                                    className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-card transition-all duration-300 space-y-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-bold text-blue-600 font-display">0{i + 1}</span>
                                        <h4 className="text-sm font-bold text-brand font-display group-hover:text-blue-600 transition-colors duration-300">{m.title}</h4>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed pl-10">{m.desc}</p>
                                </motion.div>
                            ))}
                        </AnimatedSection>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════
          CTA BANNER — Dark Navy
      ══════════════════════════════ */}
            <section className="relative bg-hero-gradient py-24 px-6 text-center overflow-hidden">
                <CircuitBg />
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative container-max">
                    <AnimatedSection className="space-y-6 max-w-2xl mx-auto">
                        <span className="inline-block text-blue-300 text-xs font-semibold tracking-widest uppercase">
                            Let's Build Silicon Together
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                            Need VLSI Engineering<br />Experts?
                        </h2>
                        <p className="text-blue-100/70 text-lg leading-relaxed">
                            Let's discuss how our semiconductor engineering team can accelerate your chip development timeline and help you tape-out with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <Link to="/contact" className="btn-primary">
                                Contact Us <HiArrowRight />
                            </Link>
                            <Link to="/it-services" className="btn-white">
                                View IT Services
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

        </div>
    )
}
