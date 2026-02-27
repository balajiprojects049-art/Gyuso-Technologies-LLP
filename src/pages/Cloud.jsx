import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheckCircle, HiArrowRight, HiCloud, HiServer, HiShieldCheck } from 'react-icons/hi'

export default function Cloud() {
    return (
        <div className="pt-20 bg-[#0B1121] min-h-screen text-slate-100 font-sans">
            {/* IT Infra Hero */}
            <section className="relative overflow-hidden border-b border-slate-800 bg-[#0B1121]">
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-900 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 lg:pt-16 lg:pb-28 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 font-semibold mb-8 text-sm uppercase tracking-widest border border-blue-800/50">
                            Enterprise IT Infrastructure
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
                            Next-Generation <span className="text-blue-500">Cloud Architecture</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                            Transform your business operations with highly scalable, resilient, and secure cloud infrastructure. We engineer custom public, private, and hybrid cloud solutions that optimize performance while radically reducing operational overhead and total cost of ownership.
                        </p>
                        <Link to="/contact" className="btn-primary px-8 py-4 text-lg bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-900/20 text-white flex items-center gap-2 max-w-max rounded-xl transition-all">
                            Migrate to the Cloud <HiArrowRight />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-[80px] opacity-20 transform translate-x-5 translate-y-5"></div>
                        <img src="/images/cloud_hero_img_2.png" alt="Cloud Infrastructure Architecture" className="relative z-10 w-full rounded-3xl shadow-2xl border border-slate-700 aspect-video object-cover" />
                    </motion.div>
                </div>
            </section>

            {/* Deep Technical Content */}
            <section className="py-24 bg-[#0F172A] relative">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-20 max-w-4xl text-center mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Building Infinite Scalability</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            A successful cloud migration is not merely lifting and shifting virtual machines to a different data center. True cloud-native transformation requires refactoring monolithic applications into microservices, deploying resilient container orchestration, and automating infrastructure provisioning through code.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-900/30 text-blue-400 flex items-center justify-center shrink-0 border border-blue-800/50">
                                    <HiCloud className="text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Cloud-Native Engineering</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        We specialize in re-architecting legacy payloads into modern, agile microservices. Utilizing Docker containers managed by Kubernetes workloads, we ensure your applications are decoupled, rapidly deployable, and capable of infinite horizontal scaling under unexpected traffic loads.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-900/30 text-blue-400 flex items-center justify-center shrink-0 border border-blue-800/50">
                                    <HiServer className="text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Infrastructure as Code (IaC)</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Manual server provisioning is prone to human error. Our DevOps engineers utilize Terraform, Ansible, and AWS CloudFormation to define your entire datacenter architecture in absolute code. Instantly spin up, tear down, and replicate identical environments across multiple regions across the globe with a single command.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-900/30 text-blue-400 flex items-center justify-center shrink-0 border border-blue-800/50">
                                    <HiShieldCheck className="text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Hybrid & Multi-Cloud Ops</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Avoid vendor lock-in. We build sophisticated multi-cloud environments seamlessly stitching AWS, Microsoft Azure, and Google Cloud Platform together. Retain complete control over data sovereignty by keeping highly sensitive workloads on-premises while bursting public-facing applications to the cloud seamlessly via secure VPN endpoints.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <div className="bg-[#1E293B] p-3 rounded-[2rem] border border-slate-700 shadow-2xl">
                                <img src="/images/cloud_content_img.png" alt="Cloud Network Center" className="w-full rounded-[1.5rem] bg-slate-800 object-cover aspect-square" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'AWS & Azure Experts', desc: 'Certified architects bridging major cloud providers.' },
                            { title: 'Kubernetes Orchestration', desc: 'Enterprise container management and deployment.' },
                            { title: 'CI/CD Pipelines', desc: 'Continuous integration and automated delivery logic.' },
                            { title: 'FinOps Optimization', desc: 'Analyzing billing and shutting down idle instances.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#0B1121] p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
                                <HiCheckCircle className="text-blue-500 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}
