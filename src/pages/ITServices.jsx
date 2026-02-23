import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    HiArrowRight, HiServer, HiShieldCheck, HiRefresh,
    HiCube, HiDatabase, HiChartBar, HiLightningBolt,
    HiCog, HiCurrencyDollar, HiCloud,
} from 'react-icons/hi'

import AnimatedSection from '../components/AnimatedSection'

const itServices = [
    {
        icon: HiCloud,
        title: 'Multi Cloud',
        description: 'Architect, migrate, and optimize workloads across AWS, Azure, and GCP. We design cloud strategies that align with your business goals — hybrid, multi-cloud, or cloud-native.',
        tags: ['AWS', 'Azure', 'GCP'],
    },
    {
        icon: HiShieldCheck,
        title: 'Cyber Security',
        description: 'Comprehensive security posture assessments, SOC implementation, threat detection, SIEM, zero-trust architecture, and compliance management (ISO 27001, SOC 2, GDPR).',
        tags: ['Zero Trust', 'SOC', 'SIEM'],
    },
    {
        icon: HiRefresh,
        title: 'App Modernisation',
        description: 'Transform legacy applications into cloud-native, microservices-based architectures. We deliver re-platforming, re-architecting, and full application lifecycle modernization.',
        tags: ['Microservices', 'Cloud Native', 'API'],
    },
    {
        icon: HiCube,
        title: 'Containerisation',
        description: 'Design and implement Kubernetes, Docker-based container orchestration platforms. CI/CD pipeline integration, Helm chart management, and service mesh implementation.',
        tags: ['Kubernetes', 'Docker', 'Helm'],
    },
    {
        icon: HiCog,
        title: 'SAP Modules',
        description: 'SAP S/4HANA implementation, migration, and support across FI/CO, MM, SD, HCM, PP, and PM modules. RISE with SAP and BTP expertise for intelligent enterprise transformation.',
        tags: ['S/4HANA', 'BTP', 'RISE with SAP'],
    },
    {
        icon: HiChartBar,
        title: 'Data & Analytics',
        description: 'End-to-end data platform engineering — data lakes, warehouses, ETL pipelines, BI reporting with Power BI, Tableau, and real-time analytics architectures.',
        tags: ['Power BI', 'Databricks', 'Snowflake'],
    },
    {
        icon: HiLightningBolt,
        title: 'Artificial Intelligence',
        description: 'Enterprise AI strategy, NLP, computer vision, generative AI, and large language model (LLM) integration. Build intelligent applications that deliver measurable business value.',
        tags: ['LLM', 'NLP', 'Gen AI'],
    },
    {
        icon: HiDatabase,
        title: 'Machine Learning',
        description: 'ML model development, MLOps platform engineering, model deployment, monitoring, and retraining pipelines. From experimentation to production-grade ML systems.',
        tags: ['TensorFlow', 'PyTorch', 'MLOps'],
    },
    {
        icon: HiCurrencyDollar,
        title: 'FinOps',
        description: 'Cloud cost visibility, optimization, and governance. Implement FinOps practices, tagging strategies, reserved instance planning, and cloud spend optimization dashboards.',
        tags: ['Cost Optimization', 'Governance', 'Cloud Spend'],
    },
]

const cloudBadges = [
    { label: 'Amazon Web Services', color: 'bg-orange-50 border-orange-200 text-orange-200' },
    { label: 'Microsoft Azure', color: 'bg-blue-50 border-blue-300 text-blue-200' },
    { label: 'Google Cloud', color: 'bg-sky-50 border-sky-300 text-sky-200' },
]

export default function ITServices() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                {/* Hero Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/IT-Service.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/80 to-brand/60" />
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="relative max-w-4xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                    >
                        <HiServer className="text-blue-400" />
                        IT Infrastructure & Technology
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-white font-display leading-tight"
                    >
                        IT Infra &{' '}
                        <span className="gradient-text">Technology Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-blue-100/70 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Enterprise-grade IT infrastructure and technology services — cloud, security, AI/ML, SAP, and FinOps — engineered for scale.
                    </motion.p>

                    {/* Cloud logos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center items-center gap-10 pt-6"
                    >
                        {cloudBadges.map(({ label, color }) => (
                            <div key={label} className={`px-5 py-2 rounded-lg border text-xs font-semibold ${color} opacity-70 hover:opacity-100 transition-opacity`}>
                                {label}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Intro strip */}
            <section className="bg-white py-14 px-6 border-b border-gray-100">
                <div className="container-max text-center max-w-3xl mx-auto space-y-4">
                    <AnimatedSection>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Our IT practice serves enterprises across BFSI, manufacturing, healthcare, and technology sectors. We bring platform-agnostic expertise and a delivery-oriented approach to every engagement.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* 9 Service Cards */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Service Portfolio</span>
                        <h2 className="section-title">Our IT Technology Services</h2>
                        <p className="section-subtitle mx-auto">
                            Nine specialized practice areas to cover every dimension of your enterprise IT transformation.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {itServices.map((svc, i) => (
                            <motion.div
                                key={svc.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.55, delay: (i % 3) * 0.12 }}
                                whileHover={{ y: -6 }}
                                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-5"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                                    <svc.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                {/* Content */}
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-base font-bold text-brand font-display group-hover:text-blue-600 transition-colors duration-300">
                                        {svc.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
                                </div>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {svc.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full group-hover:bg-blue-100 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 space-y-4">
                        <span className="section-label">Flexible Engagement</span>
                        <h2 className="section-title">How We Work</h2>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Fixed-Price Projects', desc: 'Defined deliverables, timelines, and budgets. Ideal for well-scoped implementations and migrations.' },
                            { title: 'Dedicated Teams', desc: 'Scale your capability with a dedicated GYUSO engineering team — fully aligned to your goals and processes.' },
                            { title: 'Managed Services', desc: 'Ongoing operations, monitoring, optimization and support for your cloud and IT infrastructure.' },
                        ].map((model, i) => (
                            <motion.div
                                key={model.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="text-center p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-card transition-all duration-300 space-y-4"
                            >
                                <div className="text-3xl font-bold text-blue-600 font-display">0{i + 1}</div>
                                <h3 className="text-base font-bold text-brand font-display">{model.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{model.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative bg-hero-gradient py-20 px-6 text-center overflow-hidden">
                <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
                <div className="relative container-max space-y-6">
                    <AnimatedSection>
                        <h2 className="section-title-white">Ready to Transform Your IT?</h2>
                        <p className="text-blue-100/70 text-lg max-w-xl mx-auto mt-4">
                            Let's discuss how GYUSO's IT services can accelerate your digital transformation journey.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                            <Link to="/contact" className="btn-primary">
                                Contact Us <HiArrowRight />
                            </Link>
                            <Link to="/semiconductor-services" className="btn-white">
                                Semiconductor Services
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
