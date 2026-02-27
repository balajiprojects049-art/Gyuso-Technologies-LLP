import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheckCircle, HiBeaker, HiArrowRight, HiCube } from 'react-icons/hi'

export default function DFT() {
    return (
        <div className="pt-20 bg-[#0B1121] min-h-screen text-slate-100 font-sans">
            {/* Massive Tech Hero */}
            <section className="relative w-full overflow-hidden bg-[#0B1121] pt-12 pb-24 lg:pt-16 lg:pb-32 border-b border-slate-800">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="/images/dft_hero.png" alt="DFT Methodology" className="w-full h-full object-cover mix-blend-screen" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 font-semibold mb-8 text-sm uppercase tracking-widest border border-blue-800/50">
                            Manufacturing Test Engineering
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8 tracking-tight">
                            Design for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Testability (DFT)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                            Transforming complex silicon into fundamentally testable architectures. We embed aggressive, highly-compressed scan structures and autonomous BIST controllers into your logic to guarantee that every microscopic manufacturing defect is caught before your chips are packaged and shipped. Yield is not an accident; it is engineered.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/30 transition-all">
                            Optimize Your Yield <HiArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Deep Technical Content */}
            <section className="py-24 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Intro paragraphs */}
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <h2 className="text-3xl font-bold font-display text-white mb-6">The Economics of Zero Defects</h2>
                        <p className="text-lg text-slate-300 leading-relaxed text-left md:text-center">
                            As semiconductor process nodes shrink below 7nm, the probability of manufacturing defects—like shorts, opens, and timing faults—increases exponentially due to lithography limitations. Shipping a defective die costs severely in lost reputation and RMA hardware returns. However, utilizing Automated Test Equipment (ATE) to test every single node manually takes too much time, drastically driving up test costs per chip. Our DFT methodology solves this paradox. We embed specialized test logic that allows the chip to drastically compress test data and thoroughly test itself precisely at-speed, ensuring 99.9% fault coverage while drastically cutting ATE cycle times.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {/* Section 1: Scan & ATPG */}
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="bg-[#1E293B] p-10 rounded-[2.5rem] border border-slate-700 relative overflow-hidden h-full shadow-lg">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <HiBeaker className="text-5xl text-blue-500 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">Scan Chain Insertion & Advanced ATPG</h3>
                                <div className="prose text-slate-300 leading-relaxed">
                                    <p className="mb-4">
                                        The foundation of our logic testing is Scan Design. We run synthesis wrappers to convert standard flip-flops into scan flip-flops, stitching them into extensive scan chains. This transforms the deeply sequential logic of your SoC into a highly controllable and observable combinational state machine during test mode.
                                    </p>
                                    <p>
                                        Once scan chains are inserted and DRC violations (like uncontrolled clocks, resets, or multi-cycle paths) are resolved, we utilize sophisticated Automatic Test Pattern Generation (ATPG). We generate highly aggressive, compressed vector patterns targeting specific fault models: Stuck-At (for static shorts/opens), Transition Delay (for at-speed logic timing failures), and Cell-Aware faults (for defects deep inside standard cell layouts). We routinely achieve upwards of 99.5% test coverage.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div className="bg-[#1E293B] p-8 rounded-3xl border border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-3"><span className="text-blue-500">01.</span> Test Compression Architectures</h4>
                                    <p className="text-slate-300 leading-relaxed">To manage massive SoC gate counts, we implement advanced logic compression networks (like Synopsys DFTMAX or Mentor TestKompress). This reduces the massive volume of ATPG data by margins of 50x to 100x, allowing complex chips to be tested on older, cheaper ATE machines with limited memory depth, directly saving manufacturing costs.</p>
                                </div>
                                <div className="bg-[#1E293B] p-8 rounded-3xl border border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-3"><span className="text-blue-500">02.</span> At-Speed Testing Architectures (OCC)</h4>
                                    <p className="text-slate-300 leading-relaxed">Static stuck-at testing cannot catch slow transistors. To catch transition faults, we implement On-Chip Clock Controllers (OCC). During testing, the OCC switches from the slow, external ATE shift clock to the high-speed internal PLL clock for precisely two launch-and-capture cycles, allowing us to verify the chip's exact operational frequency thresholds under real silicon conditions.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: MBIST */}
                        <div className="grid lg:grid-cols-12 gap-12 items-center bg-[#0B1121] border border-slate-800 rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl">
                            <div className="lg:col-span-7">
                                <h3 className="text-3xl font-bold font-display mb-6">Memory BIST & Built-In Self-Repair</h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    Modern System-on-Chips consist of up to 60-70% embedded static RAM (SRAM). These dense memory arrays are highly susceptible to manufacturing defects. Because routing external ATE access to every internal SRAM is impossible, we embed Memory Built-In Self Test (MBIST) controllers directly into the RTL.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Our MBIST controllers autonomously pump massive algorithmic patterns (like March C, Checkerboard) through the memory arrays to detect address decoding faults, coupling faults, and cell retention failures at full line speeds.
                                </p>
                                <p className="text-green-400 font-bold leading-relaxed">
                                    More importantly, we implement Built-In Self Repair (BISR). We design memories with redundant rows and columns. When the MBIST detects a defect on the wafer, it calculates a repair signature and programs an eFuse (electrical fuse) array. On boot-up, the BISR controller automatically remaps the broken addresses to the redundant rows, salvaging a defective die and actively pushing wafer yield percentages dramatically higher.
                                </p>
                            </div>
                            <div className="lg:col-span-5 bg-[#1E293B] p-8 rounded-3xl border border-slate-700">
                                <h4 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">Supported Standards & Tech</h4>
                                <ul className="space-y-4">
                                    {['Logic BIST (LBIST) for ISO26262 Automotive', 'IEEE 1149.1 & 1149.6 (Boundary Scan)', 'IEEE 1687 (IJTAG) Instrument Network', 'IEEE 1500 Core Wrapper', 'STIL / WGL ATE Pattern Generation'].map(item => (
                                        <li key={item} className="flex gap-3 text-slate-300 font-medium">
                                            <HiCheckCircle className="text-blue-500 shrink-0 mt-1" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
