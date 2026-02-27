import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi'

export default function RTLDesign() {
    return (
        <div className="pt-20 bg-[#0B1121] min-h-screen text-slate-100 font-sans">
            {/* Clean Enterprise Hero */}
            <section className="relative overflow-hidden border-b border-slate-800 bg-[#0B1121]">
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-900 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 lg:pt-16 lg:pb-28 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
                            Flawless <span className="text-blue-500">RTL</span><br />Architecture.
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                            Translating high-level algorithmic requirements into concrete, perfectly optimized Register-Transfer Level logic. We engineer the indestructible microarchitectural foundations for complex next-generation SoCs.
                        </p>
                        <Link to="/contact" className="btn-primary px-8 py-4 text-lg bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-900/20 text-white flex items-center gap-2 max-w-max rounded-xl transition-all">
                            Discuss RTL Architecture <HiArrowRight />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <img src="/images/rtl_hero.png" alt="RTL Design" className="w-full h-auto rounded-3xl shadow-2xl border border-slate-800 max-h-[500px] object-cover" />
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive Content Container */}
            <section className="py-24 bg-[#0F172A] relative">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-20 max-w-4xl">
                        <h2 className="text-4xl font-bold font-display text-white mb-8 border-l-4 border-blue-500 pl-6">The Microarchitectural Phase</h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            RTL (Register-Transfer Level) design is the crucial bridge connecting abstract architectural intent (like a massive AI networking stack) to the physical gates that will eventually be printed on a silicon wafer. Poorly architected RTL results in severe routing congestion, bloated power consumption, and missed timing targets.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Our design engineers do not just write Verilog; they meticulously engineer pipelines. We analyze datapath bottlenecks, formulate precisely timed state-machine transitions, and establish robust bus interconnect fabrics before a single line of logic code is written. Our core directive is to strike the perfect equilibrium between Power, Performance, and Area (PPA) while rigidly adhering to linting and design-for-testability standards.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Domain 1 */}
                        <div className="bg-[#1E293B] p-10 rounded-3xl border border-slate-700 shadow-lg">
                            <h3 className="text-3xl font-bold text-white mb-6">Asynchronous Boundaries (CDC)</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Modern Systems on a Chip span dozens of completely decoupled clock domains. When data traverses from a fast clock to a slow clock domain, setup and hold time violations occur inherently, leading to unpredictable metastability in the flip-flops.
                            </p>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                We are experts in Clock Domain Crossing (CDC). We precisely implement Multi-Flop Synchronizers for single bit control signals, Handshake Protocols, and Gray-code Asynchronous FIFOs for massive data buses. We utilize stringent CDC analysis tools (like Questa CDC or SpyGlass) to mathematically prove the absence of structural defects, ensuring data is never sampled incorrectly or lost into metastability black holes.
                            </p>
                        </div>

                        {/* Domain 2 */}
                        <div className="bg-[#1E293B] p-10 rounded-3xl border border-slate-700 shadow-lg">
                            <h3 className="text-3xl font-bold text-white mb-6">Low Power Architectures</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Heat dissipation and battery life govern silicon design today. Our RTL logic is written with a power-first mentality. We implement aggressive, multi-layered power reduction techniques directly inside the logic structures before synthesis even begins.
                            </p>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                We utilize extensive architectural <strong>Clock Gating</strong> to freeze registers during idle states, eliminating parasitic dynamic power. For deeper savings, we develop logic conforming to IEEE 1801 Unified Power Format (UPF). Through UPF, we define intricate power domains that can be completely powered down, introducing isolation cells and state retention registers to allow the chip to wake from deep sleep states instantaneously without rebooting.
                            </p>
                        </div>

                        {/* Domain 3 - Full Width */}
                        <div className="lg:col-span-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-white p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

                            <img src="/images/rtl_content_img.png" alt="RTL Logic Microarchitecture Diagram" className="w-full h-80 object-cover rounded-[2rem] border border-blue-500/30 shadow-xl mb-12 relative z-10" />

                            <h3 className="text-3xl font-bold mb-8 relative z-10 text-white">Advanced Synthesis & Iteration</h3>

                            <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                <div>
                                    <p className="text-blue-100 leading-relaxed mb-6 text-lg">
                                        Writing logic is easy; writing logic that can be synthesized into physical gates running at 3 Gigahertz on a TSMC 5nm node is exceptionally difficult. We deploy iterative synthesis flows right alongside our RTL coding.
                                    </p>
                                    <p className="text-blue-100 leading-relaxed text-lg">
                                        We push preliminary RTL through synthesis compilers (like Design Compiler or Genus) constantly to extract preliminary Static Timing Analysis (STA). If an ALU pipeline is failing setup timing because a combinatorial path has too many layers of logic, we physically unroll loops, re-time logic by shifting registers, or push combinatorial clouds across flip-flop boundaries to balance the pipeline perfectly.
                                    </p>
                                </div>
                                <div className="bg-[#0f172a] p-8 rounded-3xl border border-blue-900/50">
                                    <h4 className="font-bold text-xl text-white mb-6 border-b border-slate-800 pb-4">Architectural Expertise</h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <HiCheckCircle className="text-blue-400 text-2xl shrink-0" />
                                            <span className="text-slate-300">Artificial Intelligence MAC arrays & Tensor Processing Units.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <HiCheckCircle className="text-blue-400 text-2xl shrink-0" />
                                            <span className="text-slate-300">PCIe, Compute Express Link (CXL), and Non-Volatile Memory Express (NVMe) cores.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <HiCheckCircle className="text-blue-400 text-2xl shrink-0" />
                                            <span className="text-slate-300">High Bandwidth Memory (HBM) and DDR Memory Controllers.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <HiCheckCircle className="text-blue-400 text-2xl shrink-0" />
                                            <span className="text-slate-300">Highly pipelined superscalar RISC-V Custom Instructions.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
