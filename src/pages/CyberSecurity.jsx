import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheckCircle, HiArrowRight, HiShieldExclamation, HiLockClosed, HiEye } from 'react-icons/hi'

export default function CyberSecurity() {
    return (
        <div className="pt-20 bg-[#0B1121] min-h-screen text-slate-100 font-sans">
            {/* IT Infra Hero */}
            <section className="relative overflow-hidden border-b border-slate-800 bg-[#0B1121]">
                <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 lg:pt-16 lg:pb-28 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 font-semibold mb-8 text-sm uppercase tracking-widest border border-blue-800/50">
                            Enterprise Information Security
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
                            Military-Grade <br /><span className="text-blue-500">Cyber Security</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                            In an era of relentless digital adversaries, reactive security is a failure. We implement zero-trust proactive architectures, executing real-time threat detection and neutralizing advanced persistent threats (APTs) before they penetrate your defensive perimeter.
                        </p>
                        <Link to="/contact" className="btn-primary px-8 py-4 text-lg bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-900/20 text-white flex items-center gap-2 max-w-max rounded-xl transition-all">
                            Request Penetration Test <HiArrowRight />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <img src="/images/cyber_hero_img_2.png" alt="Cyber Security Concepts" className="w-full h-auto rounded-3xl shadow-2xl border border-slate-800 max-h-[500px] object-cover" />
                    </motion.div>
                </div>
            </section>

            {/* Deep Technical Content */}
            <section className="py-24 bg-[#0F172A] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">

                        <div className="bg-[#1E293B] p-10 rounded-3xl border border-slate-700 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px]"></div>
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><HiShieldExclamation className="text-blue-500" /> VAPT & Offensive Security</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                The only way to definitively test a defense is to relentlessly attack it. Our certified ethical hackers emulate state-sponsored attacks through Vulnerability Assessment and Penetration Testing (VAPT). We map out every endpoint of your digital footprint, hunt for zero-day vulnerabilities in bespoke applications, and execute highly sophisticated social engineering phishing campaigns targeting your staff.
                            </p>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                We provide executive-level risk reporting alongside deeply technical developer remediation paths, turning identified architectural weaknesses into instantly hardened assets.
                            </p>
                        </div>

                        <div className="bg-[#1E293B] p-10 rounded-3xl border border-slate-700 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><HiEye className="text-blue-500" /> Security Operations Center (SOC)</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                A firewall is a locked door; a SOC is the armed guard watching the perimeter cameras. We provide 24/7/365 active monitoring utilizing Security Information and Event Management (SIEM) tools. We ingest billions of data logs from your routers, servers, and endpoints.
                            </p>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Crucially, we employ advanced behavioral analytics and Machine Learning anomaly detection workflows. When an employee logs in from New York and ten minutes later their credentials are used in Eastern Europe, our automated playbooks instantly quarantine the endpoint, revoke Active Directory access, and notify incident response teams in seconds.
                            </p>
                        </div>

                        <div className="lg:col-span-2 mt-8 bg-[#0B1121] rounded-[3rem] p-4 border border-slate-800 flex flex-col md:flex-row gap-8 items-center shadow-xl">
                            <div className="w-full md:w-5/12 shrink-0">
                                <img src="/images/cyber_content_img.png" alt="Threat Detection Core" className="w-full rounded-[2rem] border border-slate-700 aspect-video object-cover" />
                            </div>
                            <div className="pr-10 py-6">
                                <h3 className="text-2xl font-bold text-white mb-4">Zero-Trust Architecture Paradigm</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    The modern perimeter is dead. With remote work and cloud integration, employees and data are everywhere. We completely redesign networks around the NIST Zero-Trust framework: 'Never Trust, Always Verify'. By implementing Identity and Access Management (IAM), multi-factor authentication, and intense micro-segmentation, we ensure that if an attacker breaches a laptop, they are completely trapped, unable to navigate laterally across the corporate network to the critical databases.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400 font-medium font-mono">
                                    <li className="flex gap-2 items-center"><HiCheckCircle className="text-blue-500 text-lg" /> End-to-End Encryption</li>
                                    <li className="flex gap-2 items-center"><HiCheckCircle className="text-blue-500 text-lg" /> Ransomware Mitigation Teams</li>
                                    <li className="flex gap-2 items-center"><HiCheckCircle className="text-blue-500 text-lg" /> Endpoint Detection & Response (EDR)</li>
                                    <li className="flex gap-2 items-center"><HiCheckCircle className="text-blue-500 text-lg" /> ISO 27001 Compliance Maps</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
