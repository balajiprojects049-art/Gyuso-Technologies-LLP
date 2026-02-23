import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    HiArrowRight, HiChip, HiCog, HiBeaker,
    HiClipboardList, HiRefresh, HiDatabase, HiCheck,
    HiLightningBolt, HiShieldCheck, HiServer, HiCube,
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
        icon: HiShieldCheck,
        title: 'Design Verification',
        color: 'from-blue-500 to-blue-700',
        desc: 'Ensuring semiconductor designs meet specifications and are functionally correct before manufacturing — across IP blocks, subsystems, and complete SoCs.',
        bullets: [
            'IP, subsystem & full SoC verification flows',
            'UVM / OVM constrained-random testbenches',
            'Formal verification & assertion-based testing',
            'Code, functional & toggle coverage closure',
        ],
        tags: ['UVM', 'SystemVerilog', 'Formal Verification'],
    },
    {
        icon: HiDatabase,
        title: 'VIP Verification',
        color: 'from-violet-500 to-purple-700',
        desc: 'Pre-designed Verification IP components to validate complex protocol interfaces — ensuring standards compliance and functional correctness before tape-out.',
        bullets: [
            'Protocol VIPs: PCIe, USB, DDR, AXI, CXL',
            'Active/passive agent development',
            'UVM-based scoreboard & checker integration',
            'Coverage-driven VIP configuration',
        ],
        tags: ['VIP', 'UVM Agents', 'Protocol Compliance'],
    },
    {
        icon: HiCube,
        title: 'FPGA Validation',
        color: 'from-sky-500 to-cyan-600',
        desc: 'Critical FPGA-based validation ensuring hardware design correctness, performance, timing, power, and reliability under real operating conditions.',
        bullets: [
            'Functional validation using ModelSim / Questa',
            'Static timing analysis & timing closure',
            'Performance benchmarking & profiling',
            'Power analysis using Vivado / Quartus Prime',
        ],
        tags: ['Xilinx', 'Intel Altera', 'STA'],
    },
    {
        icon: HiChip,
        title: 'RTL Design',
        color: 'from-indigo-500 to-blue-600',
        desc: 'Full RTL design at register-transfer level — describing chip behaviour using registers, combinational logic, FSMs, and control paths in SystemVerilog / VHDL.',
        bullets: [
            'Registers, FSMs & datapath design',
            'Clock domain crossing (CDC) analysis',
            'RTL lint, synthesis & area optimization',
            'Simulation-based & formal RTL verification',
        ],
        tags: ['SystemVerilog', 'VHDL', 'Synthesis'],
    },
    {
        icon: HiLightningBolt,
        title: 'RF Design',
        color: 'from-orange-500 to-amber-600',
        desc: 'High-frequency RF and microwave circuit design for wireless communication, radar, and 5G/6G applications — from LNA to PA and complete transceiver chains.',
        bullets: [
            'RF transceiver chain design & simulation',
            'LNA, PA, mixer, VCO & PLL circuits',
            '5G NR / mmWave frequency design',
            'EM simulation and layout optimization',
        ],
        tags: ['5G', 'mmWave', 'RF Simulation'],
    },
    {
        icon: HiRefresh,
        title: 'Pre & Post-Silicon Validation',
        color: 'from-teal-500 to-green-600',
        desc: 'Complete validation lifecycle — from FPGA prototyping and hardware emulation pre-tape-out to full silicon bring-up, debug, and characterization post-manufacture.',
        bullets: [
            'FPGA prototype & hardware emulation',
            'HW-SW co-verification & firmware validation',
            'Silicon bring-up, ATE & board-level testing',
            'Reliability, yield & stress testing',
        ],
        tags: ['Silicon Bring-up', 'ATE', 'FPGA Prototype'],
    },
    {
        icon: HiBeaker,
        title: 'DFT & Test Engineering',
        color: 'from-red-500 to-rose-600',
        desc: 'Design-for-Testability solutions ensuring all faults are detectable during manufacturing — from scan insertion to BIST, JTAG, and advanced ATPG compression.',
        bullets: [
            'Scan chain insertion & compression (ATPG)',
            'Memory BIST (MBIST) implementation',
            'Boundary scan — IEEE 1149.1 JTAG',
            'Hierarchical DFT for complex SoCs',
        ],
        tags: ['ATPG', 'BIST', 'JTAG'],
    },
    {
        icon: HiCog,
        title: 'Physical Design',
        color: 'from-blue-600 to-indigo-700',
        desc: 'End-to-end physical implementation including floorplanning, placement, clock tree synthesis, routing, and signoff for advanced sub-5nm process nodes.',
        bullets: [
            'Floorplanning, placement & power planning',
            'Clock tree synthesis (CTS) & routing',
            'DRC / LVS signoff with Calibre / PVS',
            'DFM & manufacturing yield optimization',
        ],
        tags: ['Innovus', 'Calibre', 'CTS'],
    },
    {
        icon: HiClipboardList,
        title: 'Product Validation',
        color: 'from-emerald-500 to-green-700',
        desc: 'End-to-end product validation ensuring the final semiconductor product meets all functional, performance, power, and reliability requirements for production.',
        bullets: [
            'System-level functional validation',
            'Performance characterization & corner analysis',
            'Production test development & ATE correlation',
            'Reliability: MTBF, accelerated life testing',
        ],
        tags: ['System Validation', 'ATE', 'Characterization'],
    },
    {
        icon: HiServer,
        title: 'Embedded Solutions',
        color: 'from-fuchsia-500 to-pink-600',
        desc: 'Embedded firmware, BSP, and driver development for semiconductor SoCs — bridging the hardware and software stack for production-ready embedded systems.',
        bullets: [
            'BSP, device driver & firmware development',
            'RTOS / bare-metal embedded software',
            'Hardware–software co-verification',
            'Embedded security & functional safety (ISO 26262)',
        ],
        tags: ['RTOS', 'BSP', 'Firmware'],
    },
    {
        icon: HiDatabase,
        title: 'Analog & Mixed-Signal Design',
        color: 'from-yellow-500 to-orange-600',
        desc: 'Custom AMS IP design, characterization, and integration — supporting advanced FinFET and sub-7nm nodes with full schematic-to-layout flows.',
        bullets: [
            'ADC, DAC, PLL, LDO, bandgap circuits',
            'Custom cell layout & parasitic extraction',
            'FinFET / FD-SOI mixed-signal design',
            'SPICE simulation & corner validation',
        ],
        tags: ['FinFET', 'AMS', 'SPICE'],
    },
    {
        icon: HiChip,
        title: 'Board Design',
        color: 'from-slate-500 to-gray-700',
        desc: 'High-speed PCB design and validation — from schematic capture to layout, signal integrity analysis, and board-level bring-up and testing.',
        bullets: [
            'High-speed PCB schematic & layout',
            'Signal integrity & power integrity (SI/PI)',
            'EMI/EMC compliance design',
            'Board bring-up, debug & production test',
        ],
        tags: ['PCB Layout', 'SI/PI', 'EMI/EMC'],
    },
]

const tools = [
    { name: 'Cadence Virtuoso', cat: 'Analog/Digital' },
    { name: 'Synopsys VCS', cat: 'Simulation' },
    { name: 'Mentor Calibre', cat: 'DRC/LVS' },
    { name: 'Questasim', cat: 'Simulation' },
    { name: 'Primetime', cat: 'STA' },
    { name: 'Innovus', cat: 'P&R' },
    { name: 'Genus', cat: 'RTL Synthesis' },
    { name: 'Design Compiler', cat: 'Synthesis' },
    { name: 'UVM', cat: 'Verification' },
    { name: 'SPICE / Spectre', cat: 'AMS Sim' },
    { name: 'Vivado / Quartus', cat: 'FPGA' },
    { name: 'MATLAB / Python', cat: 'Algorithm' },
]

const processNodes = [
    { node: '28nm', label: 'CMOS / LP' },
    { node: '16nm', label: 'FinFET' },
    { node: '7nm', label: 'EUV Ready' },
    { node: '5nm', label: 'Advanced' },
    { node: '3nm', label: 'GAA Ready' },
]

const deliveryFlow = [
    { step: '01', title: 'Requirement Analysis', desc: 'Deep technical discovery — understanding design spec, process node, verification goals, and timeline constraints.' },
    { step: '02', title: 'Architecture & Planning', desc: 'Chip architecture definition, design partitioning, toolchain selection, and a phased project delivery plan.' },
    { step: '03', title: 'Design & Implementation', desc: 'RTL design, physical implementation, DFT insertion, and AMS integration by our specialist VLSI engineers.' },
    { step: '04', title: 'Verification & Signoff', desc: 'Exhaustive functional verification, STA, power and IR-drop analysis, DRC/LVS signoff before tape-out.' },
    { step: '05', title: 'Silicon Validation', desc: 'Post-silicon bring-up, characterization, and production test correlation for yield-optimized manufacturing.' },
]

const trends = [
    { title: 'AI/ML in EDA', desc: 'Machine learning now drives placement routing, lithography hotspot detection, and adaptive power optimization in physical design.' },
    { title: 'Generative AI for Verification', desc: 'LLM-assisted testbench generation, coverage goal analysis, and automated bug classification are reshaping verification productivity.' },
    { title: 'Chiplet & 3D-IC Design', desc: 'Die-to-die interfaces (UCIe, BoW), HBM integration, and advanced packaging are driving a new era of heterogeneous integration.' },
    { title: 'RISC-V Ecosystem Growth', desc: 'Open-source ISA adoption is accelerating custom SoC design with RISC-V cores, requiring specialized verification and validation methodologies.' },
]

/* ─── Circuit Background ────────────────────────────────────────────────── */
const CircuitBg = ({ className = '' }) => (
    <svg className={`absolute inset-0 w-full h-full opacity-5 pointer-events-none ${className}`}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <g stroke="#60a5fa" strokeWidth="1" fill="none">
            <line x1="0" y1="100" x2="800" y2="100" /><line x1="0" y1="300" x2="800" y2="300" />
            <line x1="0" y1="500" x2="800" y2="500" /><line x1="100" y1="0" x2="100" y2="600" />
            <line x1="300" y1="0" x2="300" y2="600" /><line x1="500" y1="0" x2="500" y2="600" />
            <line x1="700" y1="0" x2="700" y2="600" />
            <rect x="80" y="80" width="40" height="40" rx="4" /><rect x="280" y="280" width="40" height="40" rx="4" />
            <rect x="480" y="80" width="40" height="40" rx="4" /><rect x="680" y="280" width="40" height="40" rx="4" />
            <circle cx="100" cy="300" r="8" /><circle cx="300" cy="100" r="8" />
            <circle cx="500" cy="300" r="8" /><circle cx="700" cy="100" r="8" />
            <line x1="120" y1="100" x2="280" y2="100" /><line x1="100" y1="120" x2="100" y2="280" />
            <line x1="320" y1="300" x2="480" y2="300" /><line x1="520" y1="100" x2="680" y2="100" />
        </g>
    </svg>
)

/* ─── Hero Slider ───────────────────────────────────────────────────────── */
const sliderImages = [
    { src: '/images/semi-chip.png', alt: 'Semiconductor Chip', label: 'Sub-5nm Mastery' },
    { src: '/images/semi-lab.png', alt: 'Fabrication Lab', label: 'Fabrication Lab' },
    { src: '/images/semi-logic.png', alt: 'Logic Design', label: 'Logic Design' },
    { src: '/images/semi-testing.png', alt: 'Silicon Testing', label: 'Silicon Testing' },
]
function HeroSlider() {
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setCurrent(p => (p + 1) % sliderImages.length), 2500)
        return () => clearInterval(t)
    }, [])
    return (
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <AnimatePresence mode="wait">
                <motion.div key={current} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.8, ease: 'easeInOut' }} className="absolute inset-0">
                    <img src={sliderImages[current].src} alt={sliderImages[current].alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent" />
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="absolute top-5 right-5 bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                        {sliderImages[current].label}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {sliderImages.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-blue-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`} />
                ))}
            </div>
        </div>
    )
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function SemiconductorServices() {
    return (
        <div className="overflow-hidden">

            {/* HERO */}
            <section className="relative bg-hero-gradient min-h-[90vh] flex items-center px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url('/images/semi-chip.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                <CircuitBg />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />

                <div className="relative max-w-7xl mx-auto w-full py-40">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
                                <HiChip className="text-blue-400" /> Semiconductor Engineering
                            </motion.div>
                            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[1.05]">
                                Full-Spectrum<br /><span className="gradient-text">VLSI & Silicon</span><br />Engineering
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                                className="text-blue-100/75 text-lg leading-relaxed max-w-lg">
                                From RTL design and design verification to physical design, DFT, FPGA validation, embedded solutions, and post-silicon validation — GYUSO covers the complete semiconductor engineering lifecycle.
                            </motion.p>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                                className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="btn-primary">Discuss Your Project <HiArrowRight /></Link>
                                <a href="#services" className="btn-white">View All 12 Services</a>
                            </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
                            className="relative hidden lg:block">
                            <HeroSlider />
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                                className="absolute -bottom-8 -left-12 glass-card p-6 border border-white/20 shadow-glow-lg max-w-[280px] hidden sm:block">
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map(s => (
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
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="w-px h-10 bg-gradient-to-b from-blue-400/80 to-transparent" />
                    <span className="text-blue-300/50 text-xs tracking-widest uppercase">Scroll</span>
                </motion.div>
            </section>

            {/* EDA PARTNERS */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase">Trusted EDA Partners & Platforms</p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                                {['Cadence', 'Synopsys', 'Mentor Graphics', 'Siemens EDA', 'Ansys', 'Xilinx / AMD', 'Intel Altera'].map(b => (
                                    <span key={b} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-all cursor-default">{b}</span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <AnimatedSection className="space-y-6">
                            <span className="section-label">Who We Are</span>
                            <h2 className="section-title">Your End-to-End VLSI Engineering Partner</h2>
                            <p className="text-gray-500 text-base leading-relaxed">
                                GYUSO's Semiconductor Services practice brings together experienced VLSI engineers covering the complete chip design and verification lifecycle — from initial RTL and verification planning all the way through physical signoff and post-silicon validation.
                            </p>
                            <p className="text-gray-500 text-base leading-relaxed">
                                We partner with fabless semiconductor companies, SoC teams, EDA firms, and systems companies — accelerating chip timelines while maintaining rigorous quality standards at every phase.
                            </p>
                            <div className="grid grid-cols-2 gap-3 pt-2">
                                {['12 Service Areas', 'Sub-5nm Expertise', 'ISO 26262 Support', 'UVM Methodology', 'FPGA Prototyping', 'Zero-Defect Tape-out'].map(c => (
                                    <div key={c} className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                            <HiCheck className="text-white w-3 h-3" />
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">{c}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact" className="btn-primary inline-flex mt-2">Start a Project <HiArrowRight /></Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl group">
                                <img src="/images/semi-lab.png" alt="Semiconductor Fabrication Lab"
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
                                <div className="relative bg-white/90 backdrop-blur-sm p-8">
                                    <h3 className="text-sm font-bold text-brand font-display mb-6 uppercase tracking-wider">Process Node Expertise</h3>
                                    <div className="grid grid-cols-5 gap-3 mb-8">
                                        {processNodes.map(n => (
                                            <div key={n.node} className="text-center p-3 bg-blue-50 rounded-xl hover:bg-blue-600 group/n transition-colors cursor-default">
                                                <div className="text-blue-600 font-bold text-sm font-display group-hover/n:text-white transition-colors">{n.node}</div>
                                                <div className="text-gray-400 text-[10px] mt-0.5 group-hover/n:text-blue-200 transition-colors">{n.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className="text-sm font-bold text-brand font-display mb-4 uppercase tracking-wider">Key Technical Capabilities</h3>
                                    <div className="space-y-2.5">
                                        {['CMOS / FinFET / FD-SOI / GAA Nodes', 'IEEE 1149.1 JTAG & Boundary Scan', 'LPDDR / DDR4 / PCIe / CXL Interfaces', 'Functional Safety — ISO 26262 Support', 'Pre & Post-Silicon Correlation', 'AMS IP Design & Integration'].map(cap => (
                                            <div key={cap} className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <HiCheck className="text-white w-3 h-3" />
                                                </div>
                                                <span className="text-sm text-gray-600">{cap}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* 12 SERVICE CARDS */}
            <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
                <CircuitBg className="opacity-[0.03]" />
                <div className="container-max relative">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Service Portfolio</span>
                        <h2 className="section-title">12 Semiconductor Engineering Services</h2>
                        <p className="section-subtitle mx-auto">
                            Comprehensive VLSI and silicon engineering disciplines — from design verification and RTL through physical design, FPGA validation, embedded solutions, and board design.
                        </p>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((svc, i) => (
                            <motion.div key={svc.title}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-5">
                                <div className={`w-14 h-14 bg-gradient-to-br ${svc.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    <svc.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-base font-bold text-brand font-display group-hover:text-blue-600 transition-colors">{svc.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                                </div>
                                <ul className="space-y-1.5">
                                    {svc.bullets.map(b => (
                                        <li key={b} className="flex items-start gap-2">
                                            <HiCheck className="text-blue-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                                            <span className="text-xs text-gray-500">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {svc.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full group-hover:bg-blue-100 transition-colors">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DELIVERY FLOW — Dark */}
            <section className="relative bg-hero-gradient overflow-hidden">
                <img src="/images/semi-logic.png" alt="Logic Flow" className="absolute inset-0 w-full h-full object-cover opacity-10" />
                <CircuitBg />
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="container-max relative py-24 px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection className="space-y-6">
                            <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase">Delivery Methodology</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                                Our Proven<br /><span className="gradient-text">5-Phase Design Flow</span>
                            </h2>
                            <p className="text-blue-100/70 text-base leading-relaxed max-w-md">
                                A structured, phased delivery model bringing predictability, transparency, and quality to every semiconductor engagement — from spec to tape-out.
                            </p>
                            <Link to="/contact" className="btn-primary inline-flex">Get Started <HiArrowRight /></Link>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2} className="space-y-5">
                            {deliveryFlow.map((p, i) => (
                                <motion.div key={p.step} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-5 group">
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

            {/* EDA TOOLS */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 space-y-4">
                        <span className="section-label">Toolchain</span>
                        <h2 className="section-title">Industry EDA Tools & Platforms</h2>
                        <p className="section-subtitle mx-auto">We are proficient across the full breadth of professional EDA tooling used by leading semiconductor companies worldwide.</p>
                    </AnimatedSection>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {tools.map((tool, i) => (
                            <motion.div key={tool.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group flex items-center justify-between px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-400 hover:bg-blue-50 hover:shadow-card transition-all duration-200 cursor-default">
                                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">{tool.name}</span>
                                <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors font-medium">{tool.cat}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRY TRENDS — Dark */}
            <section className="relative bg-hero-gradient py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url('/images/semi-testing.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 bg-brand/85" />
                <CircuitBg />
                <div className="relative container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 space-y-4">
                        <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase">Emerging Trends</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                            Latest Trends in <span className="gradient-text">Semiconductor</span>
                        </h2>
                        <p className="text-blue-100/70 text-lg leading-relaxed">We stay ahead of advancing technology so your projects benefit from the latest methodologies and innovations.</p>
                    </AnimatedSection>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trends.map((t, i) => (
                            <motion.div key={t.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 space-y-3">
                                <div className="text-3xl font-bold text-blue-400 font-display">0{i + 1}</div>
                                <h4 className="text-white font-bold text-sm font-display">{t.title}</h4>
                                <p className="text-blue-100/60 text-sm leading-relaxed">{t.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY GYUSO */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <AnimatedSection className="space-y-7">
                            <span className="section-label">Why GYUSO</span>
                            <h2 className="section-title">Your Trusted Semiconductor Engineering Partner</h2>
                            <div className="space-y-5">
                                {[
                                    { icon: HiLightningBolt, title: 'Speed to Market', desc: 'Dedicated VLSI teams ramp up fast — no lengthy hiring cycles, no ramp-up delays. Ready to engage within days.' },
                                    { icon: HiShieldCheck, title: 'Silicon Quality', desc: 'Strict design review, sign-off checklists, and gated milestones ensure zero-defect tape-out every time.' },
                                    { icon: HiChip, title: 'Process Node Depth', desc: 'Hands-on engineering experience with 28nm through sub-5nm and GAA-ready design flows.' },
                                    { icon: HiCog, title: 'Tool Agnostic', desc: 'Proficient across Cadence, Synopsys, Mentor / Siemens EDA, and Xilinx / Intel FPGA ecosystems.' },
                                ].map(item => (
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

                        <AnimatedSection delay={0.2} className="space-y-5">
                            <h3 className="text-lg font-bold text-brand font-display">Flexible Engagement Models</h3>
                            {[
                                { title: 'Dedicated VLSI Teams', desc: 'Named engineers embedded in your project, aligned to your tools, flows, and delivery processes on a monthly retainer.' },
                                { title: 'Project-Based Delivery', desc: 'Fixed-scope, fixed-budget engagements for specific chips, IP blocks, or design phases. Clear deliverables, no surprises.' },
                                { title: 'Staff Augmentation', desc: 'Individual or small groups of VLSI specialists onboarded quickly into your existing team, tools, and flows.' },
                            ].map((m, i) => (
                                <motion.div key={m.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                                    className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-card transition-all duration-300 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-bold text-blue-600 font-display">0{i + 1}</span>
                                        <h4 className="text-sm font-bold text-brand font-display group-hover:text-blue-600 transition-colors">{m.title}</h4>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed pl-10">{m.desc}</p>
                                </motion.div>
                            ))}
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative bg-hero-gradient py-24 px-6 text-center overflow-hidden">
                <CircuitBg />
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative container-max">
                    <AnimatedSection className="space-y-6 max-w-2xl mx-auto">
                        <span className="inline-block text-blue-300 text-xs font-semibold tracking-widest uppercase">Let's Build Silicon Together</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                            Need VLSI Engineering<br />Experts?
                        </h2>
                        <p className="text-blue-100/70 text-lg leading-relaxed">
                            Let's discuss how our semiconductor engineering team can accelerate your chip development timeline and help you tape-out with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <Link to="/contact" className="btn-primary">Contact Us <HiArrowRight /></Link>
                            <Link to="/it-services" className="btn-white">View IT Services</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

        </div>
    )
}
