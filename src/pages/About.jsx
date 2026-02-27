import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiLightBulb, HiEye, HiGlobe, HiChip, HiServer } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'

const stats = [
    { value: '2021', label: 'Founded' },
    { value: '50+', label: 'Engineers' },
    { value: '2', label: 'Core Verticals' },
    { value: 'IND', label: 'Headquarters' },
]

const missionText = 'To deliver specialized semiconductor and IT technology services with world-class quality, enabling our clients to accelerate innovation, optimize operations, and achieve their strategic technology objectives. We are committed to being a trusted partner at every stage of our clients technology journey.'

const visionText = 'To become a globally recognized technology services leader known for deep domain expertise in VLSI engineering and enterprise IT transformation. We envision building the future of technology by connecting silicon-level innovation with digital enterprise capabilities.'

const focusAreas = [
    {
        icon: HiChip,
        title: 'Semiconductor Engineering',
        desc: 'Full-cycle VLSI services from RTL design, functional and physical verification, timing analysis, to post-silicon validation. Supporting leading EDA tools including Cadence, Synopsys, and Mentor.',
    },
    {
        icon: HiServer,
        title: 'IT Infrastructure and Services',
        desc: 'Enterprise-scale IT solutions spanning multi-cloud architecture, application modernization, cybersecurity, SAP, AI/ML, data analytics, and FinOps governance.',
    },
]

const glanceItems = [
    { key: 'Company Type', val: 'Technology Services LLP' },
    { key: 'Headquarters', val: 'Hyderabad, Telangana, India' },
    { key: 'Core Domains', val: 'Semiconductor and IT Infrastructure' },
    { key: 'Service Model', val: 'Project, Dedicated and Managed' },
    { key: 'LinkedIn', val: 'linkedin.com/company/gyuso' },
    { key: 'Email', val: 'info@gyuso.com' },
]

const missionVision = [
    {
        icon: HiLightBulb,
        label: 'Mission',
        heading: 'Delivering Technical Excellence',
        body: missionText,
        gradient: 'from-blue-600 to-blue-700',
    },
    {
        icon: HiEye,
        label: 'Vision',
        heading: 'Global Technology Leadership',
        body: visionText,
        gradient: 'from-indigo-600 to-blue-700',
    },
]

export default function About() {
    return (
        <div className="overflow-hidden">
            {/* Page Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                {/* Hero Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/About.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand/85 via-brand/80 to-brand/90" />
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="relative max-w-4xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                    >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        About GYUSO
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-white font-display leading-tight"
                    >
                        Shaping Tomorrow's
                        <br />
                        Technology Today
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-blue-100/70 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        GYUSO Technologies is a specialized technology services firm bringing together
                        the depth of semiconductor engineering with the breadth of enterprise IT services.
                    </motion.p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center space-y-1"
                            >
                                <div className="text-4xl font-bold text-brand font-display gradient-text">{stat.value}</div>
                                <div className="text-sm text-gray-500 font-medium tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection className="space-y-6">
                            <span className="section-label">Company Overview</span>
                            <h2 className="section-title">Who We Are</h2>
                            <p className="text-gray-500 text-base leading-relaxed">
                                GYUSO Technologies LLP is headquartered in Knowledge City, Hyderabad, India's premier technology hub.
                                We operate at the intersection of two critical technology domains: semiconductor engineering and enterprise IT,
                                providing our clients with highly specialized, enterprise-grade solutions.
                            </p>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Our team comprises seasoned engineers, architects, and domain experts who have worked with leading
                                semiconductor companies and global technology enterprises. This dual expertise allows us to offer
                                integrated technology services that are rare in the market.
                            </p>
                            <p className="text-gray-500 text-base leading-relaxed">
                                We are committed to building long-term partnerships rooted in technical excellence, transparency,
                                and measurable outcomes. Whether you need a dedicated VLSI engineering team or an enterprise IT
                                transformation partner, GYUSO is equipped to deliver.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} className="space-y-6">
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-5">
                                <h3 className="text-lg font-bold text-brand font-display">At a Glance</h3>
                                {glanceItems.map((item) => (
                                    <div key={item.key} className="flex gap-4 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                                        <span className="text-sm text-gray-400 font-medium w-36 flex-shrink-0">{item.key}</span>
                                        <span className="text-sm text-brand font-semibold">{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Our Purpose</span>
                        <h2 className="section-title">Mission and Vision</h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {missionVision.map((card) => (
                            <AnimatedSection key={card.label}>
                                <div className="group relative overflow-hidden rounded-2xl p-10 bg-white border border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-card hover:shadow-card-hover space-y-6 h-full">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center`}>
                                        <card.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase">{card.label}</p>
                                        <h3 className="text-2xl font-bold text-brand font-display">{card.heading}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Focus Areas */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Domain Expertise</span>
                        <h2 className="section-title">Our Industry Focus</h2>
                        <p className="section-subtitle mx-auto">
                            We operate with precision across two high-demand, high-complexity technology domains.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {focusAreas.map((area, i) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group flex gap-6 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-card transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                                    <area.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-bold text-brand font-display">{area.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-hero-gradient py-20 px-6 text-center">
                <div className="relative container-max space-y-6">
                    <AnimatedSection>
                        <h2 className="section-title-white text-4xl">Ready to Work Together?</h2>
                        <p className="text-blue-100/70 text-lg max-w-xl mx-auto mt-4">
                            Explore our services or contact us to discuss how GYUSO can support your technology goals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                            <Link to="/contact" className="btn-primary">
                                Contact Us <HiArrowRight />
                            </Link>
                            <Link to="/it-services" className="btn-white">
                                Our Semiconductor Services
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
