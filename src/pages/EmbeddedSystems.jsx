import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiCheckCircle, HiChip, HiLightningBolt, HiCubeTransparent, HiCode } from 'react-icons/hi'

import AnimatedSection from '../components/AnimatedSection'

export default function EmbeddedSystems() {
    return (
        <div className="overflow-hidden bg-[#0B1121] min-h-screen">
            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="relative min-h-[70vh] flex items-center pt-24 pb-12">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('/images/embedded_hero.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B1121] via-[#0B1121]/90 to-[#0B1121]/60" />

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
                                Embedded <span className="text-blue-500">Systems</span> Engineering
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="text-blue-100/70 text-lg leading-relaxed max-w-lg"
                            >
                                From concept to production, we deliver robust, high-performance embedded systems. Our expertise bridges the gap between hardware architecture and intelligent software.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/contact" className="btn-primary">
                                    Discuss Your Project <HiArrowRight />
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
                                Intelligent Solutions for <span className="text-blue-500">Connected Devices</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                In today's interconnected world, embedded systems are the silent engines powering innovation across industries. GYUSO Technologies provides comprehensive embedded engineering services, combining deep domain knowledge in IoT, automotive, industrial automation, and consumer electronics to build scalable and secure systems.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                We specialize in hardware design, firmware development, RTOS porting, and kernel development, ensuring your product operates with maximum efficiency and reliability under critical conditions.
                            </p>

                            <div className="pt-6 grid sm:grid-cols-2 gap-4">
                                {[
                                    'Firmware & Middleware',
                                    'IoT Endpoint Security',
                                    'Hardware/Software Co-design',
                                    'Board Support Packages (BSP)'
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
                                    src="/images/embedded_content.png"
                                    alt="Embedded Systems Team"
                                    className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-[#0B1121] p-6 rounded-2xl border border-blue-900/50 shadow-xl z-20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                                            <HiCubeTransparent className="text-white w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">End-to-End</p>
                                            <p className="text-blue-400 text-sm">System Integration</p>
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
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

                <div className="container-max relative z-10">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                            Our Embedded <span className="text-blue-500">Expertise</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            We deliver specialized engineering solutions designed to meet stringent technical requirements and accelerate your time-to-market.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: HiChip,
                                title: 'Hardware Design',
                                desc: 'Architecture optimization, PCB layout, prototyping, and verification for custom embedded boards.',
                            },
                            {
                                icon: HiCode,
                                title: 'Firmware Development',
                                desc: 'Low-latency bare-metal programming, custom bootloaders, and OS abstractions for precise control.',
                            },
                            {
                                icon: HiLightningBolt,
                                title: 'Power Optimization',
                                desc: 'Advanced techniques for power profiling, battery management, and designing energy-efficient IoT edge devices.',
                            },
                        ].map((cap, i) => (
                            <AnimatedSection key={i} delay={i * 0.15}>
                                <div className="bg-[#0B1121] p-8 rounded-2xl border border-blue-900/30 hover:border-blue-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 h-full">
                                    <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-500">
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
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
                <div className="container-max relative z-10 text-center space-y-8">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
                            Ready to Build Your Next Embedded Device?
                        </h2>
                        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                            Let our team of seasoned engineers help you navigate the complexities of hardware-software integration.
                        </p>
                        <Link to="/contact" className="btn-primary inline-flex mt-8 gap-2 group">
                            Contact Our Experts <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
