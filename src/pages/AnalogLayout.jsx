import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiLightningBolt, HiCheckCircle, HiArrowRight } from 'react-icons/hi'

export default function AnalogLayout() {
    return (
        <div className="pt-20 bg-[#0B1121] min-h-screen font-sans text-slate-100">
            {/* Elegant Modern Hero */}
            <section className="relative overflow-hidden border-b border-slate-800 bg-[#0B1121]">
                <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 lg:pt-16 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] -z-10 translate-x-12 translate-y-12"></div>
                        <img src="/images/analog_hero.png" alt="Analog Layout Art" className="w-full rounded-[2rem] shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-700 border border-slate-800" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold font-display text-white mb-6 leading-[1.1]">
                            The True Artistry of <span className="text-blue-500 block mt-2">Analog Layout</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            While digital design scales through automated synthesis, analog layout remains a deeply human, artisanal discipline. It requires an intuitive mastery of silicon physics, electromagnetics, and geometry. We craft high-precision, robust layouts that protect sensitive analog signals from the harsh noise of modern digital integration.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/30 transition-all flex items-center gap-2 group">
                                Consult our Layout Artists <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Expansive Deep Dive Methodology Text */}
            <section className="py-24 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-x-12 gap-y-24">

                        {/* Section 1 */}
                        <div className="md:col-span-8 md:col-start-3 text-center mb-10">
                            <h2 className="text-4xl font-bold font-display text-white mb-6">Navigating Nanometer Physics Constraints</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Creating a functional schematic is only half the battle. When circuits are physically drawn onto silicon, especially at advanced nodes (28nm down to 5nm FinFET), entirely new sets of physical constraints manifest. Parasitic capacitances, resistances, and electromigration can destroy circuit performance if the layout is not meticulously crafted. Our analog layout engineers act as translators between theoretical electrical intent and physical reality.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="md:col-span-6">
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                                <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl border border-blue-800/50"><HiLightningBolt /></div>
                                Device Matching & Symmetries
                            </h3>
                            <div className="prose prose-slate max-w-none text-slate-300">
                                <p className="text-lg leading-relaxed mb-4">
                                    Analog circuits like differential amplifiers, current mirrors, and digital-to-analog converters (DACs) rely entirely on identical transistor behavior. However, manufacturing gradients mean that no two transistors on a wafer are identically fabricated.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                    We mitigate these silicon realities using advanced geometry. Our engineers utilize <strong>Common Centroid</strong> and <strong>Interdigitated</strong> layout topologies. By crossing and interleaving fingers of paired transistors symmetrically around a central axis, we mathematically cancel out linear and radial process gradients across the die. We meticulously calculate dummy devices (resistors, poly, transistors) to ensure edge devices experience the identical optical lithography environment as internal devices, preventing Width/Length of Device (WPE/LOD) mismatches.
                                </p>
                            </div>
                        </div>

                        {/* Image break */}
                        <div className="md:col-span-6 bg-[#1E293B] rounded-3xl p-8 border border-slate-700 shadow-lg flex flex-col justify-center">
                            <img src="/images/ai_content_img.png" alt="Circuit Architecture Layout" className="w-full h-48 object-cover rounded-2xl mb-6 shadow-md border border-slate-800" />
                            <h4 className="font-bold text-xl text-white mb-2">Cross-Coupled Common Centroid</h4>
                            <p className="text-slate-400 leading-relaxed">A standard layout pattern demonstrating the interleaving of transistor components 'A' and 'B' to perfectly distribute thermal and processing gradients across both devices.</p>
                        </div>

                        {/* Section 3 */}
                        <div className="md:col-span-12 w-full h-px bg-slate-800"></div>

                        {/* Section 4 */}
                        <div className="md:col-span-5 bg-[#0B1121] border border-slate-800 text-slate-300 rounded-3xl p-10 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8">Domains of Expertise</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <HiCheckCircle className="text-blue-500 text-2xl shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block text-lg mb-1">High-Speed SerDes & PHYs</strong>
                                        <span className="text-sm leading-relaxed block text-slate-400">Layout of incredibly sensitive 112G PAM4 transceivers, PLLs, and CDRs where every femto-farad of parasitic capacitance destroys jitter margins.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <HiCheckCircle className="text-blue-500 text-2xl shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block text-lg mb-1">Data Converters & RF</strong>
                                        <span className="text-sm leading-relaxed block text-slate-400">High-resolution Pipeline ADCs, SAR ADCs, and RF inductor routing demanding extreme isolation techniques and guarding.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <HiCheckCircle className="text-blue-500 text-2xl shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block text-lg mb-1">Power Management (PMIC)</strong>
                                        <span className="text-sm leading-relaxed block text-slate-400">Handling massive current densities. Careful planning of power meshes for LDOs and DC-DC converters to pass strict Electromigration (EM) and IR Drop rules.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="md:col-span-7 pl-0 md:pl-10">
                            <h3 className="text-3xl font-bold text-white mb-6 mt-4">
                                Shielding, Parasitics & Latch-Up Safety
                            </h3>
                            <div className="prose prose-slate max-w-none text-slate-300">
                                <p className="text-lg leading-relaxed mb-6">
                                    When integrating sensitive analog components alongside noisy, high-frequency digital logic on a single SoC (System on Chip), substrate noise coupling is a critical threat. The digital switching injects minority carriers deep into the silicon substrate, which travel and disrupt the quiet analog references.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                    Our layout artists employ robust shielding strategies. We implement deep N-well (DNW) isolation, heavy guard rings, and dedicated analog ground domains to physically and electrically quarantine the analog blocks. We manually route critical differential pairs shielding them with VDD/VSS lines on adjacent metal layers to immunize them against cross-talk.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    We also ensure absolute structural safety. Every layout undergoes rigorous review to prevent parasitic thyristor formations that cause catastrophic Latch-Up. We enforce strict antenna rules during routing to prevent gate oxide breakdown during plasma etching processes in the fab. Our final layout is a pristine, DRC-clean, LVS-matched work of engineering art ready for tape-out.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
