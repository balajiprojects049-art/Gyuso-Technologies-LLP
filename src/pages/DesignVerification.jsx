import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheckCircle, HiBeaker, HiDocumentText, HiCubeTransparent, HiDesktopComputer } from 'react-icons/hi'

export default function DesignVerification() {
    return (
        <div className="pt-20 bg-[#0B1121] min-h-screen font-sans text-slate-100">
            {/* Elegant Corporate Hero */}
            <section className="relative bg-[#0B1121] pt-12 pb-24 lg:pt-16 lg:pb-32 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 font-semibold mb-8 text-sm uppercase tracking-widest border border-blue-800/50">
                            Pre-Silicon Validation
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-[1.15] mb-8">
                            Uncompromising <br /><span className="text-blue-500">Design Verification</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                            In modern nanometer technology nodes, functional bugs discovered post-silicon lead to catastrophic respin costs and devastating time-to-market delays. Our dedicated verification practice employs extremely aggressive, multi-layered verification strategies to mathematically and empirically prove the exactness of your RTL logic before a single wafer is fabricated. We specialize in transforming opaque, high-risk logic into perfectly validated, tape-out ready designs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-4 bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/50 text-white rounded-xl font-medium transition-all">
                                Request Verification Audit
                            </Link>
                            <a href="#methodology" className="px-8 py-4 bg-[#111827] border-2 border-slate-700 hover:border-blue-600 text-slate-200 hover:text-blue-400 rounded-xl font-medium transition-all">
                                Explore Methodology
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-600 rounded-[2rem] transform translate-x-4 max-md:-translate-y-4 md:translate-y-6 opacity-20"></div>
                        <img src="/images/dv_hero.png" alt="Design Verification Flow" className="relative z-10 w-full rounded-[2rem] shadow-2xl border border-slate-800 object-cover aspect-square md:aspect-[4/3]" />
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive Content Blocks */}
            <section id="methodology" className="py-24 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Comprehensive Sign-Off Methodology</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            A simple directed testbench is no longer sufficient. We build highly intelligent, self-checking environments that automatically generate billions of unique stimulus scenarios, hunting for deep-state corner case bugs that human engineers cannot anticipate.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {/* Feature 1 */}
                        <div className="grid md:grid-cols-12 gap-12 items-center">
                            <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
                                <div className="w-16 h-16 rounded-2xl bg-blue-900/30 text-blue-400 flex items-center justify-center mb-6 shadow-sm border border-blue-800/50">
                                    <HiCubeTransparent className="text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">UVM & Constrained Random Testing</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    The Universal Verification Methodology (UVM) forms the backbone of our dynamic simulation strategy. We abstract the complexity of your IP by building layered testbenches in SystemVerilog. By utilizing powerful constrained-random stimulus generation, we can sweep massive state spaces automatically.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Our Verification IPs (VIPs) are built to be perfectly reusable from block-level verification up to full SoC integration. We integrate highly accurate reference models and complex scoreboards to detect data corruption or protocol violations instantaneously.
                                </p>
                                <ul className="grid grid-cols-2 gap-3">
                                    {['SystemVerilog (IEEE 1800)', 'OVM / UVM Frameworks', 'Automated Scoreboarding', 'Functional Coverage Models'].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                            <HiCheckCircle className="text-blue-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:col-span-6 md:col-start-1 order-2 md:order-1 bg-[#1E293B] p-8 rounded-3xl shadow-lg border border-slate-700 h-full">
                                <h4 className="font-bold text-white mb-6 pb-4 border-b border-slate-700">Testbench Architecture Matrix</h4>
                                <div className="space-y-6">
                                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                        <div className="text-sm font-bold text-blue-400 mb-1">Top Level</div>
                                        <div className="text-slate-200 font-medium">Virtual Sequences & Test Scenario Orchestration</div>
                                        <div className="text-sm text-slate-400 mt-2">Coordinates traffic across multiple interfaces simultaneously to stress the design interconnects.</div>
                                    </div>
                                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                        <div className="text-sm font-bold text-blue-400 mb-1">Environment Level</div>
                                        <div className="text-slate-200 font-medium">Scoreboards, Coverage Collectors & Reference Models</div>
                                        <div className="text-sm text-slate-400 mt-2">The 'brain' of the testbench. Predicts expected behavior and flags mismatches instantly.</div>
                                    </div>
                                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                        <div className="text-sm font-bold text-blue-400 mb-1">Agent Level</div>
                                        <div className="text-slate-200 font-medium">Sequencers, Drivers & Monitors (Bus Functional Models)</div>
                                        <div className="text-sm text-slate-400 mt-2">Translates high-level transactions into cycle-accurate pin wiggles conforming to strict protocols.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="grid md:grid-cols-12 gap-12 items-center">
                            <div className="md:col-span-5 md:col-start-1">
                                <div className="w-16 h-16 rounded-2xl bg-blue-900/30 text-blue-400 flex items-center justify-center mb-6 shadow-sm border border-blue-800/50">
                                    <HiDocumentText className="text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Formal Verification & ABV</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Dynamic simulation is constrained by time; it can only test scenarios that are explicitly run. Formal Verification, however, uses mathematical algorithms to prove or disprove the behavior of logic across all possible time and states simultaneously.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    We extensively utilize Assertion-Based Verification (ABV) using SystemVerilog Assertions (SVA) embedded directly into the RTL. These assertions act as vigilant monitors, trapping illegal state transitions, deadlock conditions, and catastrophic bus contentions the moment they occur, dramatically reducing debug time.
                                </p>
                                <ul className="grid grid-cols-2 gap-3">
                                    {['Property Checking', 'Deadlock & Livelock Analysis', 'Unreachable Code Detection', 'SVA Development'].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                            <HiCheckCircle className="text-blue-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:col-span-6 md:col-start-7 bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-700 text-slate-300">
                                <img src="/images/cyber_content_img.png" alt="Verification Metrics and Security" className="w-full h-48 object-cover rounded-2xl mb-6 shadow-md border border-slate-800" />
                                <h4 className="font-bold text-white mb-6">SVA Assertion Example</h4>
                                <div className="bg-[#0B1121] p-6 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
                                    <span className="text-slate-400">// Checks that an ACK arrives 1 to 3 cycles after REQ</span><br /><br />
                                    <span className="text-blue-400">property</span> p_req_ack;<br />
                                    &nbsp;&nbsp;<span className="text-blue-300">@(posedge</span> clk<span className="text-blue-300">) disable iff</span> (!rst_n)<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;req <span className="text-yellow-400">|-&gt;</span> <span className="text-blue-300">##[1:3]</span> ack;<br />
                                    <span className="text-blue-400">endproperty</span><br /><br />
                                    <span className="text-blue-400">assert property</span> (p_req_ack) <span className="text-blue-400">else</span><br />
                                    &nbsp;&nbsp;<span className="text-orange-400">$error</span>(<span className="text-green-400">"Protocol Violation: ACK timeout."</span>);
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="grid md:grid-cols-12 gap-12 items-center">
                            <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
                                <div className="w-16 h-16 rounded-2xl bg-blue-900/30 text-blue-400 flex items-center justify-center mb-6 shadow-sm border border-blue-800/50">
                                    <HiDesktopComputer className="text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Power-Aware & Gate-Level Simulation</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Modern mobile and IoT SoCs rely heavily on extreme power management—shutting down voltage domains and dropping clock frequencies dynamically. Standard RTL simulation cannot verify these behaviors. We utilize Unified Power Format (UPF) / Common Power Format (CPF) to run power-aware simulations (PAVS) that mathematically model isolation cells, level shifters, and power switches to ensure the chip wakes up correctly from deep sleep modes.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Furthermore, we conduct extensive Gate-Level Simulations (GLS) with Standard Delay Format (SDF) back-annotation. This exhaustive final check confirms that synthesis optimizations, test insertion (Scan/DFT), and physical routing have not introduced race conditions, setup/hold violations, or broken the functional intent.
                                </p>
                            </div>
                            <div className="md:col-span-6 md:col-start-1 order-2 md:order-1 bg-[#1E293B] p-8 rounded-3xl shadow-lg border border-slate-700">
                                <h4 className="font-bold text-white mb-6">Protocol Expertise Library</h4>
                                <p className="text-sm text-slate-400 mb-6">We maintain a massive library of pre-verified knowledge across all major industry standard protocols.</p>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-center text-sm font-bold text-slate-200">
                                            <span>AMBA BUS Architecture</span>
                                            <span className="text-blue-400 text-xs bg-blue-900/30 border border-blue-800/50 px-2 py-1 rounded">Advanced</span>
                                        </div>
                                        <div className="text-xs text-slate-500">AXI3/4/5, AHB, APB, CHI, ACE</div>
                                    </div>
                                    <div className="w-full h-px bg-slate-700"></div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-center text-sm font-bold text-slate-200">
                                            <span>High-Speed Interconnects</span>
                                            <span className="text-blue-400 text-xs bg-blue-900/30 border border-blue-800/50 px-2 py-1 rounded">Expert</span>
                                        </div>
                                        <div className="text-xs text-slate-500">PCIe Gen 3/4/5/6, CXL, NVMe</div>
                                    </div>
                                    <div className="w-full h-px bg-slate-700"></div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-center text-sm font-bold text-slate-200">
                                            <span>Memory Interfaces</span>
                                            <span className="text-blue-400 text-xs bg-blue-900/30 border border-blue-800/50 px-2 py-1 rounded">Master</span>
                                        </div>
                                        <div className="text-xs text-slate-500">DDR4/5, LPDDR4/5, HBM2e/3, ONFI</div>
                                    </div>
                                    <div className="w-full h-px bg-slate-700"></div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-center text-sm font-bold text-slate-200">
                                            <span>Networking & Serial</span>
                                            <span className="text-blue-400 text-xs bg-blue-900/30 border border-blue-800/50 px-2 py-1 rounded">Advanced</span>
                                        </div>
                                        <div className="text-xs text-slate-500">Ethernet, USB 3.x/4, I2C, SPI, UART, MIPI</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
