import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiCheckCircle, HiPresentationChartLine, HiDatabase, HiAdjustments } from 'react-icons/hi'

import AnimatedSection from '../components/AnimatedSection'

export default function PerformanceModeling() {
    return (
        <div className="overflow-hidden bg-[#0B1121] min-h-screen">
            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="relative min-h-[70vh] flex items-center pt-24 pb-12">
                <div
                    className="absolute inset-0 z-0 bg-gray-900"
                    style={{
                        backgroundImage: `url('/images/ai_hero_img.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B1121] via-[#0B1121]/90 to-[#0B1121]/50" />

                <div className="container-max relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                            >
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                                Semiconductor Engineering
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-display"
                            >
                                Performance <span className="text-blue-500">Modeling</span> & Analysis
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="text-blue-100/70 text-lg leading-relaxed max-w-lg"
                            >
                                Predict, measure, and optimize SoC and system architectures earlier in the design cycle. We help you make data-driven architectural decisions to eliminate bottlenecks.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/contact" className="btn-primary">
                                    Optimize Your Architecture <HiArrowRight />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ CONTENT SECTION 1 ═══════════════════ */}
            <section className="py-20 relative">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                                Shift Left with <span className="text-blue-500">Predictive</span> Architecture
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                In modern complex SoCs, finding performance bottlenecks during RTL or physical design is too late and incredibly costly. GYUSO Technologies offers advanced Performance Modeling services to evaluate system throughput, latency, and power profiles at the transactional level before a single line of RTL is written.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Using tools like SystemC and TLM 2.0, we build highly accurate execution-driven models. This allows your architects to explore "what-if" scenarios, optimize caching topologies, size buffers correctly, and validate interconnect bandwidth.
                            </p>

                            <div className="pt-6 grid sm:grid-cols-2 gap-4">
                                {[
                                    'Throughput & Latency Analysis',
                                    'Memory Subsystem Modelling',
                                    'Interconnect (NoC) Optimization',
                                    'SystemC / C++ TLM 2.0'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-blue-900/10 border border-blue-900/30 p-3 rounded-lg text-gray-300">
                                        <HiCheckCircle className="text-blue-500 w-5 h-5 shrink-0" />
                                        <span className="font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative rounded-2xl overflow-hidden border border-blue-900/30 shadow-2xl">
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10"></div>
                                <img
                                    src="/images/rtl_content_img.png"
                                    alt="Performance Modeling Architecture"
                                    className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6 bg-[#0B1121]/80 backdrop-blur-md p-6 rounded-2xl border border-blue-900/50 shadow-xl z-20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                                            <HiPresentationChartLine className="text-white w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">Data-Driven</p>
                                            <p className="text-indigo-400 text-sm">Design Choices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ CORE CAPABILITIES ═══════════════════ */}
            <section className="py-20 bg-[#0F172A] relative overflow-hidden border-y border-blue-900/30">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

                <div className="container-max relative z-10">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                            Modeling <span className="text-indigo-400">Capabilities</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Comprehensive analysis to ensure your system meets its performance targets securely by design.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: HiDatabase,
                                title: 'Memory Architecture',
                                desc: 'Cache hierarchy optimization, DDR bandwidth saturation analysis, and optimal sizing for LLC (Last Level Cache).',
                            },
                            {
                                icon: HiAdjustments,
                                title: 'Traffic Generation',
                                desc: 'Creation of synthetic and trace-driven traffic profiles to simulate real-world stressful use cases effectively.',
                            },
                            {
                                icon: HiPresentationChartLine,
                                title: 'System Profiling',
                                desc: 'Visualizing QoS (Quality of Service) metrics and deriving quantitative bottlenecks in multi-core designs.',
                            },
                        ].map((cap, i) => (
                            <AnimatedSection key={i} delay={i * 0.15}>
                                <div className="bg-[#0B1121] p-8 rounded-2xl border border-blue-900/30 hover:border-indigo-700 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 h-full">
                                    <div className="w-14 h-14 bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                                        <cap.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{cap.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ CTA BANNER ═══════════════════ */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600/5 mix-blend-overlay"></div>
                <div className="container-max relative z-10 text-center space-y-8">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
                            Validate Performance At The Architectural Level
                        </h2>
                        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                            Ensure your next-generation chip hits its PPA targets. Contact our architects today.
                        </p>
                        <Link to="/contact" className="btn-primary inline-flex mt-8 gap-2 group">
                            Start Modeling <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
