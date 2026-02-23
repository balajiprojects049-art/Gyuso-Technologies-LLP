import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiBriefcase, HiUserGroup, HiLightningBolt, HiGlobe, HiMail } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'

const perks = [
    { icon: HiLightningBolt, title: 'Innovation-Driven Culture', desc: 'Work on cutting-edge semiconductor and IT projects that shape the future of technology.' },
    { icon: HiUserGroup, title: 'Expert Team', desc: 'Collaborate with seasoned engineers, architects, and domain specialists across global projects.' },
    { icon: HiGlobe, title: 'Global Exposure', desc: 'Work with leading international clients in semiconductor and enterprise IT domains.' },
    { icon: HiBriefcase, title: 'Career Growth', desc: 'Structured career paths, certifications support, and continuous learning opportunities.' },
]

const openings = [
    { title: 'RTL Design Engineer', type: 'Full-Time', location: 'Hyderabad, India', domain: 'Semiconductor' },
    { title: 'Physical Design Engineer', type: 'Full-Time', location: 'Hyderabad, India', domain: 'Semiconductor' },
    { title: 'Cloud Solutions Architect', type: 'Full-Time', location: 'Hyderabad, India', domain: 'IT Services' },
    { title: 'SAP FICO Consultant', type: 'Full-Time', location: 'Hyderabad, India', domain: 'SAP' },
    { title: 'ML Engineer', type: 'Full-Time', location: 'Hyderabad, India', domain: 'AI/ML' },
    { title: 'Cybersecurity Analyst', type: 'Full-Time', location: 'Hyderabad, India', domain: 'Security' },
]

export default function Careers() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                {/* Hero Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/Career.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand/85 via-brand/80 to-brand/90" />
                <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="relative max-w-4xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                    >
                        <HiBriefcase className="text-blue-400" />
                        Careers at GYUSO
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-white font-display leading-tight"
                    >
                        Build the Future<br />
                        <span className="gradient-text">with GYUSO</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-blue-100/70 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Join a growing team of technology experts shaping the future of semiconductor engineering and enterprise IT. We're always looking for talented, passionate professionals.
                    </motion.p>
                </div>
            </section>

            {/* Why GYUSO */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Life at GYUSO</span>
                        <h2 className="section-title">Why Join Us?</h2>
                    </AnimatedSection>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, i) => (
                            <motion.div
                                key={perk.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center space-y-4 p-6 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
                            >
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                                    <perk.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-sm font-bold text-brand font-display">{perk.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Open Roles</span>
                        <h2 className="section-title">Current Openings</h2>
                        <p className="section-subtitle mx-auto">
                            Explore current opportunities — we're growing our team across semiconductor and IT disciplines.
                        </p>
                    </AnimatedSection>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {openings.map((job, i) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-card transition-all duration-300 flex items-center justify-between gap-6"
                            >
                                <div className="space-y-1">
                                    <h3 className="text-base font-bold text-brand font-display group-hover:text-blue-600 transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="text-xs text-gray-400">{job.type}</span>
                                        <span className="text-gray-300">·</span>
                                        <span className="text-xs text-gray-400">{job.location}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 flex-shrink-0">
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                                        {job.domain}
                                    </span>
                                    <Link
                                        to="/contact"
                                        className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        Apply <HiArrowRight />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-white">
                <div className="container-max max-w-3xl mx-auto text-center space-y-6">
                    <AnimatedSection>
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                            <HiMail className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="section-title mt-6">Don't See Your Role?</h2>
                        <p className="text-gray-500 text-lg mt-4 leading-relaxed">
                            We're always open to hearing from talented engineers and consultants. Send us your profile and we'll reach out when the right opportunity arises.
                        </p>
                        <Link to="/contact" className="btn-primary inline-flex mt-6">
                            Send Your Profile <HiArrowRight />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
