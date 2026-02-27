import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheckCircle, HiArrowRight, HiCubeTransparent } from 'react-icons/hi'

export default function PhysicalDesign() {
    return (
        <div className="pt-20 bg-[#0B1121] min-h-screen text-slate-100 font-sans">
            {/* Dark Tech Hero */}
            <section className="relative bg-[#0B1121] border-b border-slate-800 pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 font-semibold mb-8 text-sm uppercase tracking-widest border border-blue-800/50">
                            Silicon Implementation
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
                            The Path to <span className="text-blue-500">Tape-Out</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                            Transforming synthesized gate-level netlists into geometric masks ready for the foundry. Physical Design is a relentless battle against physics—balancing aggressive timing closure, power grid integrity (IR drop), and complex routing congestion across billions of transistors at the 5nm scale and below.
                        </p>
                        <Link to="/contact" className="btn-primary px-8 py-4 bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-900/20 text-white flex items-center gap-2 max-w-max rounded-xl transition-all">
                            Discuss Tape-Out Strategy <HiArrowRight />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-500 rounded-[3rem] blur-[100px] opacity-20 transform translate-x-10 translate-y-10"></div>
                        <img src="/images/pd_hero.png" alt="Physical Design Layout" className="relative z-10 w-full rounded-[3rem] shadow-2xl border border-slate-800 object-cover aspect-video" />
                    </motion.div>
                </div>
            </section>

            {/* Expansive Deep Dive Methodology Text */}
            <section className="py-24 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-x-12 gap-y-24">

                        {/* Section 1 */}
                        <div className="md:col-span-8 md:col-start-3 text-center mb-10">
                            <h2 className="text-4xl font-bold font-display text-white mb-6">Mastering Timing Closure at Advance Nodes</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Getting a massive SoC to operate synchronously is an immense challenge. The physical realities of parasitic resistance (R) and capacitance (C) from nanometer routing traces dominate delays more than the logic gates themselves. We implement aggressive, iterative floorplanning and placement strategies utilizing leading-edge EDA toolchains (Synopsys IC Compiler II, Cadence Innovus).
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="md:col-span-6 pr-0 md:pr-10">
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                                <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl border border-blue-800/50"><HiCubeTransparent /></div>
                                Floorplanning & Clock Tree Synthesis (CTS)
                            </h3>
                            <div className="prose prose-slate max-w-none text-slate-300">
                                <p className="text-lg leading-relaxed mb-4">
                                    Our floorplanning methodology is highly strategic. We pre-plan massive data-flow vectors across the die to minimize wire length and prevent un-routable localized congestion. We architect robust macro placement for enormous SRAM arrays and analog PHYs, strictly controlling halo spacing and channel routing constraints.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                    The Clock Tree Synthesis (CTS) is the most power-hungry and timing-critical net in the system. Millions of flip-flops must receive the clock signal at precisely the same picosecond to avoid catastrophic hold-time violations. We engineer complex H-tree and Multisource CTS structures, actively managing On-Chip Variation (OCV). We insert millions of perfectly sized clock buffers and delay cells to balance skew across extreme PVT (Process, Voltage, Temperature) corners, ensuring setup/hold timing is met under all possible silicon operating conditions.
                                </p>
                            </div>
                        </div>

                        {/* Details grid */}
                        <div className="md:col-span-6 grid grid-cols-1 gap-6">
                            <div className="bg-[#1E293B] p-8 rounded-3xl border border-slate-700 shadow-md">
                                <h4 className="font-bold text-xl text-white mb-3">Power Grid Integrity (IR/EM)</h4>
                                <p className="text-slate-400 leading-relaxed">
                                    An SoC drawing 100 Amps can cause severe localized voltage drops. If the internal logic 'sees' a drop of 50mV, its timing slows drastically, causing immediate functional failures. We meticulously design thick upper-metal power meshes and execute intense dynamic IR-drop simulations (via ANSYS RedHawk) to ensure constant, clean VDD delivery while avoiding Electromigration (EM) melt-downs in the vias.
                                </p>
                            </div>
                            <div className="bg-[#1E293B] p-8 rounded-3xl border border-slate-700 shadow-md">
                                <h4 className="font-bold text-xl text-white mb-3">Sign-Off Methodologies</h4>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex gap-2 items-start"><HiCheckCircle className="text-blue-500 mt-1" /> <span className="text-slate-300 font-medium">Static Timing Analysis (PrimeTime SI) across Multi-Mode Multi-Corner (MMMC).</span></li>
                                    <li className="flex gap-2 items-start"><HiCheckCircle className="text-blue-500 mt-1" /> <span className="text-slate-300 font-medium">Physical Verification (Calibre): DRC, LVS, and ERC (Electrical Rule Checking).</span></li>
                                    <li className="flex gap-2 items-start"><HiCheckCircle className="text-blue-500 mt-1" /> <span className="text-slate-300 font-medium">Design for Manufacturability (DFM) check and yield enhancement logic (via double formatting).</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 - Full Width Tape-Out Banner */}
                        <div className="md:col-span-12 w-full mt-10">
                            <div className="bg-[#0B1121] rounded-[3rem] p-10 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
                                <h3 className="text-3xl font-bold text-white mb-6 relative z-10">The Final Tape-Out GDSII Checklist</h3>
                                <p className="text-lg text-slate-300 leading-relaxed max-w-4xl relative z-10 mb-10">
                                    Tape-out (sending the GDSII file to TSMC, Samsung, or GF) is the point of no return. We maintain an obsessive, hundreds-of-items checklist before delivering the database. We aggressively fix transition violations, analyze cross-talk (SI) noise delta-delays, double-via everything possible to improve yield probability, and fill massive empty spaces with metal/poly strictly to satisfy process density rules.
                                </p>
                                <ul className="text-left w-full max-w-3xl grid md:grid-cols-2 gap-x-12 gap-y-4 relative z-10">
                                    <li className="flex items-center gap-3"><HiCheckCircle className="text-green-500 text-xl" /> <span className="font-mono text-slate-300">0 LVS Violations</span></li>
                                    <li className="flex items-center gap-3"><HiCheckCircle className="text-green-500 text-xl" /> <span className="font-mono text-slate-300">0 DRC Violations</span></li>
                                    <li className="flex items-center gap-3"><HiCheckCircle className="text-green-500 text-xl" /> <span className="font-mono text-slate-300">Clean Antenna Reports</span></li>
                                    <li className="flex items-center gap-3"><HiCheckCircle className="text-green-500 text-xl" /> <span className="font-mono text-slate-300">Setup TNS/WNS = 0.00ps</span></li>
                                    <li className="flex items-center gap-3"><HiCheckCircle className="text-green-500 text-xl" /> <span className="font-mono text-slate-300">Hold TNS/WNS = 0.00ps</span></li>
                                    <li className="flex items-center gap-3"><HiCheckCircle className="text-green-500 text-xl" /> <span className="font-mono text-slate-300">Pass Dynamic IR Drop</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
