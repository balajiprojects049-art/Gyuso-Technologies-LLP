import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheckCircle, HiArrowRight, HiLightBulb, HiChip, HiLightningBolt } from 'react-icons/hi'

export default function ArtificialIntelligence() {
    return (
        <div className="pt-20 bg-[#0B1121] min-h-screen text-slate-100 font-sans">
            {/* Dark Tech Hero */}
            <section className="relative bg-[#0B1121] border-b border-slate-800 pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-blue-500 rounded-[3rem] blur-[100px] opacity-20 transform -translate-x-10 translate-y-10"></div>
                        <img src="/images/ai_hero_img.png" alt="Artificial Intelligence Neural Network" className="relative z-10 w-full rounded-[3rem] shadow-2xl border border-slate-800 object-cover aspect-video lg:aspect-square max-h-[500px]" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 font-semibold mb-8 text-sm uppercase tracking-widest border border-blue-800/50">
                            Cognitive Computing Solutions
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
                            Applied <span className="text-blue-500">Artificial Intelligence</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                            Transition from manual workflows to autonomous decision-making. We build customized generative models, natural language processing pipelines, and computer vision systems that unlock previously inaccessible insights from your enterprise data lakes.
                        </p>
                        <Link to="/contact" className="btn-primary px-8 py-4 bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-900/20 text-white flex items-center gap-2 max-w-max rounded-xl transition-all">
                            Explore AI Integration <HiArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Expansive Deep Dive Methodology Text */}
            <section className="py-24 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-x-12 gap-y-24">

                        {/* Section 1 */}
                        <div className="md:col-span-8 md:col-start-3 text-center mb-10">
                            <h2 className="text-4xl font-bold font-display text-white mb-6">Unleashing Enterprise Data</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                True Enterprise AI is not about adopting a chat interface; it is about intrinsically embedding highly contextual intelligence into legacy operations. We deploy advanced Large Language Models (LLMs) via Retrieval-Augmented Generation (RAG) pipelines directly connected to your proprietary, siloed datasets, ensuring entirely secure and hallucination-free reasoning.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="md:col-span-6 pr-0 md:pr-10">
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                                <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl border border-blue-800/50"><HiLightBulb /></div>
                                Generative AI & Automation
                            </h3>
                            <div className="prose prose-slate max-w-none text-slate-300">
                                <p className="text-lg leading-relaxed mb-4">
                                    We architect and fine-tune foundation models tailored precisely to your specific business dictionaries and compliance requirements. By injecting contextual knowledge securely, we build AI agents capable of instantly summarizing massive legal documents, generating complex application code, and autonomously resolving customer support inquiries at a fraction of the cost.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                    Furthermore, we implement sophisticated robotic process automation (RPA) combined with AI cognitive engines. This transition shifts manual data entry and reconciliation from human operators to tireless software agents. Our systems handle document parsing (OCR), semantic search, and structured data extraction with incredibly high accuracy rates.
                                </p>
                            </div>
                        </div>

                        {/* Details grid */}
                        <div className="md:col-span-6 grid grid-cols-1 gap-6">
                            <div className="bg-[#1E293B] p-8 rounded-3xl border border-slate-700 shadow-md">
                                <h4 className="font-bold text-xl text-white mb-3 flex items-center gap-2"><HiChip className="text-blue-500" /> Computer Vision</h4>
                                <p className="text-slate-400 leading-relaxed">
                                    We deploy high-performance convolutional neural networks (CNNs) capable of realtime object detection, facial recognition, and spatial tracking. In manufacturing, our automated optical inspection (AOI) models autonomously flag microscopic defects on production lines 10x faster than human inspectors, radically increasing factory throughput and Quality Assurance levels.
                                </p>
                            </div>
                            <div className="bg-[#1E293B] p-8 rounded-3xl border border-slate-700 shadow-md">
                                <h4 className="font-bold text-xl text-white mb-3 flex items-center gap-2"><HiLightningBolt className="text-blue-500" /> Operational Transformation</h4>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex gap-2 items-start"><HiCheckCircle className="text-blue-500 mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Predictive Maintenance on Heavy Machinery via IoT telemetry analysis.</span></li>
                                    <li className="flex gap-2 items-start"><HiCheckCircle className="text-blue-500 mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Algorithmic Financial Forecasting and Risk Profiling models.</span></li>
                                    <li className="flex gap-2 items-start"><HiCheckCircle className="text-blue-500 mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Autonomous Supply Chain and Logistics routing.</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 - Full Width Tape-Out Banner */}
                        <div className="md:col-span-12 w-full mt-10">
                            <div className="bg-[#0B1121] rounded-[3rem] p-4 lg:p-8 border border-slate-800 shadow-2xl flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-5/12 h-full">
                                    <img src="/images/ai_content_img.png" alt="AI Logic Interaction" className="w-full h-full rounded-[2rem] border border-slate-700 object-cover" />
                                </div>
                                <div className="p-6 md:p-10 w-full md:w-7/12">
                                    <h3 className="text-3xl font-bold text-white mb-6">AI Ethics & Responsible Deployment</h3>
                                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                        As AI ingests critical corporate intelligence, strict model governance is mandatory. We emphasize 'Explainable AI' (XAI), ensuring that deep learning predictions are not black boxes, but rather transparent, auditable decision trees. Additionally, we enforce rigorous bias testing and secure model hosting (air-gapped environments) so your heavily proprietary data is never used to secretly train public commercial models.
                                    </p>
                                    <Link to="/contact" className="inline-block px-8 py-3 bg-blue-900/40 border border-blue-500/50 hover:bg-blue-600 transition-colors text-blue-100 rounded-xl font-bold">
                                        Audit Your Data Readiness
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
