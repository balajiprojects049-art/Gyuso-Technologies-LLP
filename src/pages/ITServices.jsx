import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    HiArrowRight, HiServer, HiShieldCheck, HiRefresh,
    HiCube, HiDatabase, HiChartBar, HiLightningBolt,
    HiCog, HiCurrencyDollar, HiCloud, HiCheck,
    HiGlobe, HiUserGroup, HiBadgeCheck,
} from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'

/* ─── Service Data ───────────────────────────────────────────────────────── */
const itServices = [
    {
        icon: HiCloud,
        title: 'Multi Cloud',
        description: 'Architect, migrate, and optimize workloads across AWS, Azure, and GCP. We design cloud strategies that align with your business goals — hybrid, multi-cloud, or cloud-native.',
        bullets: [
            'Cloud readiness assessment & strategy',
            'Lift-and-shift and re-architecture migrations',
            'Hybrid and multi-cloud design',
            'Cloud cost governance and optimization',
        ],
        tags: ['AWS', 'Azure', 'GCP'],
        color: 'from-blue-500 to-sky-500',
    },
    {
        icon: HiShieldCheck,
        title: 'Cyber Security',
        description: 'Comprehensive security posture assessments, SOC implementation, threat detection, SIEM, zero-trust architecture, and compliance management (ISO 27001, SOC 2, GDPR).',
        bullets: [
            'Vulnerability assessments & penetration testing',
            'SOC setup, SIEM and threat intelligence',
            'Zero-Trust Network Architecture (ZTNA)',
            'Compliance: ISO 27001, SOC 2, GDPR',
        ],
        tags: ['Zero Trust', 'SOC', 'SIEM'],
        color: 'from-red-500 to-orange-500',
    },
    {
        icon: HiRefresh,
        title: 'App Modernisation',
        description: 'Transform legacy applications into cloud-native, microservices-based architectures. We deliver re-platforming, re-architecting, and full application lifecycle modernization.',
        bullets: [
            'Legacy application assessment & roadmap',
            'Microservices decomposition',
            'API-first design and integration',
            'DevSecOps pipeline implementation',
        ],
        tags: ['Microservices', 'Cloud Native', 'API'],
        color: 'from-purple-500 to-indigo-500',
    },
    {
        icon: HiCube,
        title: 'Containerisation',
        description: 'Design and implement Kubernetes, Docker-based container orchestration platforms. CI/CD pipeline integration, Helm chart management, and service mesh implementation.',
        bullets: [
            'Docker containerization of workloads',
            'Kubernetes cluster design & management',
            'CI/CD with Jenkins, GitLab, ArgoCD',
            'Istio service mesh & Helm deployments',
        ],
        tags: ['Kubernetes', 'Docker', 'Helm'],
        color: 'from-cyan-500 to-teal-500',
    },
    {
        icon: HiCog,
        title: 'SAP Modules',
        description: 'SAP S/4HANA implementation, migration, and support across FI/CO, MM, SD, HCM, PP, and PM modules. RISE with SAP and BTP expertise for intelligent enterprise transformation.',
        bullets: [
            'SAP S/4HANA greenfield & brownfield',
            'FI/CO, MM, SD, HCM, PP, PM modules',
            'RISE with SAP and BTP integration',
            'SAP migration, upgrade & AMS support',
        ],
        tags: ['S/4HANA', 'BTP', 'RISE with SAP'],
        color: 'from-amber-500 to-yellow-500',
    },
    {
        icon: HiChartBar,
        title: 'Data & Analytics',
        description: 'End-to-end data platform engineering — data lakes, warehouses, ETL pipelines, BI reporting with Power BI, Tableau, and real-time analytics architectures.',
        bullets: [
            'Data lake & warehouse architecture',
            'ETL/ELT pipeline development',
            'Power BI, Tableau & Looker dashboards',
            'Real-time streaming analytics',
        ],
        tags: ['Power BI', 'Databricks', 'Snowflake'],
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: HiLightningBolt,
        title: 'Artificial Intelligence',
        description: 'Enterprise AI strategy, NLP, computer vision, generative AI, and large language model (LLM) integration. Build intelligent applications that deliver measurable business value.',
        bullets: [
            'Generative AI & LLM integration',
            'NLP, computer vision, OCR solutions',
            'AI-driven process automation',
            'Custom AI model development & fine-tuning',
        ],
        tags: ['LLM', 'NLP', 'Gen AI'],
        color: 'from-violet-500 to-purple-600',
    },
    {
        icon: HiDatabase,
        title: 'Machine Learning',
        description: 'ML model development, MLOps platform engineering, model deployment, monitoring, and retraining pipelines. From experimentation to production-grade ML systems.',
        bullets: [
            'ML model design, training & validation',
            'MLOps platform with CI/CD for models',
            'Feature engineering & data pipelines',
            'Model monitoring, drift detection & retraining',
        ],
        tags: ['TensorFlow', 'PyTorch', 'MLOps'],
        color: 'from-fuchsia-500 to-pink-500',
    },
    {
        icon: HiCurrencyDollar,
        title: 'FinOps',
        description: 'Cloud cost visibility, optimization, and governance. Implement FinOps practices, tagging strategies, reserved instance planning, and cloud spend optimization dashboards.',
        bullets: [
            'Cloud spend visibility & cost allocation',
            'Reserved instance & savings plan strategy',
            'Tagging policies & governance frameworks',
            'Real-time FinOps dashboards & reporting',
        ],
        tags: ['Cost Optimization', 'Governance', 'Cloud Spend'],
        color: 'from-lime-500 to-green-500',
    },
]

/* ─── Cloud Platforms ────────────────────────────────────────────────────── */
const cloudPlatforms = [
    {
        name: 'Amazon Web Services',
        short: 'AWS',
        color: 'border-orange-400/40 bg-orange-500/10',
        textColor: 'text-orange-300',
        services: ['EC2, S3, RDS', 'Lambda & Serverless', 'EKS & ECS', 'CloudFormation & CDK', 'SageMaker & Bedrock'],
    },
    {
        name: 'Microsoft Azure',
        short: 'Azure',
        color: 'border-blue-400/40 bg-blue-500/10',
        textColor: 'text-blue-300',
        services: ['Azure VMs, AKS, ACI', 'Azure DevOps & Pipelines', 'Azure OpenAI & Cognitive', 'Azure Synapse & Fabric', 'Azure Active Directory'],
    },
    {
        name: 'Google Cloud',
        short: 'GCP',
        color: 'border-sky-400/40 bg-sky-500/10',
        textColor: 'text-sky-300',
        services: ['GKE & Cloud Run', 'BigQuery & Dataflow', 'Vertex AI & AutoML', 'Cloud Spanner & Firestore', 'Apigee API Management'],
    },
]

/* ─── SAP Modules ────────────────────────────────────────────────────────── */
const sapModules = [
    { module: 'FI/CO', name: 'Finance & Controlling' },
    { module: 'MM', name: 'Materials Management' },
    { module: 'SD', name: 'Sales & Distribution' },
    { module: 'HCM', name: 'Human Capital Management' },
    { module: 'PP', name: 'Production Planning' },
    { module: 'PM', name: 'Plant Maintenance' },
    { module: 'BTP', name: 'Business Technology Platform' },
    { module: 'S/4HANA', name: 'Intelligent ERP' },
]

/* ─── Stats ──────────────────────────────────────────────────────────────── */
const stats = [
    { value: '9+', label: 'IT Service Domains' },
    { value: '3', label: 'Major Cloud Platforms' },
    { value: '50+', label: 'Certified IT Experts' },
    { value: '99.9%', label: 'Uptime SLA Target' },
]

/* ─── Why Choose Us ─────────────────────────────────────────────────────── */
const whyUs = [
    { icon: HiGlobe, title: 'Platform Agnostic', desc: 'We work across all major cloud providers — AWS, Azure, and GCP — without vendor bias, always recommending what is best for your needs.' },
    { icon: HiBadgeCheck, title: 'Certified Experts', desc: 'Our teams hold leading certifications in cloud architecture, cybersecurity, SAP, AI/ML and DevOps across multiple platforms.' },
    { icon: HiUserGroup, title: 'Flexible Engagement', desc: 'Choose from fixed projects, dedicated teams, or fully managed services — we adapt to your preferred model and budget.' },
    { icon: HiShieldCheck, title: 'Security-First Approach', desc: 'Security is embedded into every engagement from day one — not bolted on at the end. Zero-trust is our default posture.' },
]

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function ITServices() {
    return (
        <div className="overflow-hidden">

            {/* ══ HERO ══ */}
            <section className="relative pt-40 pb-28 px-6 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/IT-Service.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/85 to-brand/60" />
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />

                <div className="relative max-w-5xl mx-auto text-center space-y-6">
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
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-tight"
                    >
                        Enterprise IT{' '}
                        <span className="gradient-text">Infra & Technology</span>
                        <br />Services
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-blue-100/75 text-lg leading-relaxed max-w-3xl mx-auto"
                    >
                        From multi-cloud architecture and cybersecurity to SAP transformation, AI/ML, and FinOps — GYUSO delivers enterprise-grade IT infrastructure and technology services engineered for scale, security, and speed.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 pt-2"
                    >
                        <Link to="/contact" className="btn-primary">
                            Start a Conversation <HiArrowRight />
                        </Link>
                        <a href="#services" className="btn-white">
                            Explore Our Services
                        </a>
                    </motion.div>

                    {/* Cloud logos row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center items-center gap-4 pt-4 flex-wrap"
                    >
                        {['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'SAP S/4HANA', 'Kubernetes'].map((label) => (
                            <span key={label} className="px-4 py-1.5 rounded-full border border-white/20 text-white/60 text-xs font-semibold bg-white/5 hover:bg-white/10 transition-colors">
                                {label}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══ STATS RIBBON ══ */}
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
                                <div className="text-4xl font-bold font-display gradient-text">{stat.value}</div>
                                <div className="text-sm text-gray-500 font-medium tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ INTRO SPLIT — Cloud Datacenter Image ══ */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection className="space-y-6">
                            <span className="section-label">Our IT Practice</span>
                            <h2 className="section-title">End-to-End Enterprise IT Solutions</h2>
                            <p className="text-gray-500 text-base leading-relaxed">
                                GYUSO's IT practice serves enterprises across BFSI, manufacturing, healthcare, and technology sectors. We bring platform-agnostic expertise and a delivery-oriented approach to every engagement.
                            </p>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Whether you're migrating to the cloud, modernizing legacy applications, securing your infrastructure, or transforming your enterprise with SAP and AI — our certified architects and engineers are equipped to deliver outstanding outcomes.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                {['Cloud Architecture', 'Enterprise Security', 'SAP Transformation', 'AI & ML Engineering'].map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                            <HiCheck className="text-white w-3 h-3" />
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact" className="btn-primary inline-flex mt-4">
                                Talk to an Expert <HiArrowRight />
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <img
                                    src="/images/it_cloud_datacenter_1771838169540.png"
                                    alt="Modern Cloud Data Center"
                                    className="w-full h-80 lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                                        <p className="text-white font-bold text-sm">Multi-Cloud Infrastructure</p>
                                        <p className="text-blue-200 text-xs mt-1">AWS · Azure · GCP · Hybrid Cloud</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ══ 9 SERVICE CARDS ══ */}
            <section id="services" className="section-padding bg-gray-50">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Service Portfolio</span>
                        <h2 className="section-title">Our IT Technology Services</h2>
                        <p className="section-subtitle mx-auto">
                            Nine specialized practice areas covering every dimension of enterprise IT — from cloud to AI, security to SAP.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {itServices.map((svc, i) => (
                            <motion.div
                                key={svc.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-5"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${svc.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    <svc.icon className="w-7 h-7 text-white" />
                                </div>
                                {/* Title + Description */}
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-base font-bold text-brand font-display group-hover:text-blue-600 transition-colors duration-300">
                                        {svc.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
                                </div>
                                {/* Bullet Points */}
                                <ul className="space-y-1.5">
                                    {svc.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2">
                                            <HiCheck className="text-blue-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                                            <span className="text-xs text-gray-500">{b}</span>
                                        </li>
                                    ))}
                                </ul>
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

            {/* ══ CLOUD DEEP-DIVE (Dark) ══ */}
            <section className="relative bg-hero-gradient py-24 px-6 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: `url('/images/it_cloud_datacenter_1771838169540.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand/95 to-brand/80" />
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />

                <div className="relative container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase">Multi-Cloud Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                            Deep Expertise Across <br />
                            <span className="gradient-text">All Major Cloud Platforms</span>
                        </h2>
                        <p className="text-blue-100/70 text-lg leading-relaxed">
                            We architect, migrate, and manage enterprise workloads across AWS, Azure, and GCP — always recommending what's right for your business, not what's convenient for us.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        {cloudPlatforms.map((platform, i) => (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className={`rounded-2xl border ${platform.color} p-8 space-y-5 hover:scale-105 transition-transform duration-300`}
                            >
                                <div>
                                    <div className={`text-3xl font-bold font-display ${platform.textColor}`}>{platform.short}</div>
                                    <div className="text-white/70 text-sm font-medium mt-1">{platform.name}</div>
                                </div>
                                <ul className="space-y-2">
                                    {platform.services.map((s) => (
                                        <li key={s} className="flex items-center gap-2">
                                            <HiCheck className={`w-4 h-4 flex-shrink-0 ${platform.textColor}`} />
                                            <span className="text-white/70 text-sm">{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ CYBERSECURITY SECTION ══ */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection delay={0.15}>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <img
                                    src="/images/it_security_ops_1771838194682.png"
                                    alt="Cybersecurity Operations Center"
                                    className="w-full h-80 lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                                        <p className="text-white font-bold text-sm">Security Operations Center</p>
                                        <p className="text-blue-200 text-xs mt-1">24×7 Threat Monitoring · SOC · SIEM · Zero-Trust</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="space-y-6">
                            <span className="section-label">Cyber Security</span>
                            <h2 className="section-title">Enterprise Security, <br />Built to Last</h2>
                            <p className="text-gray-500 text-base leading-relaxed">
                                In today's threat landscape, security cannot be an afterthought. GYUSO embeds security into every layer of your infrastructure — from identity management and network segmentation to real-time threat response.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: 'Threat Detection & Response', desc: 'AI-driven SIEM with real-time alerting, automated playbooks, and 24×7 SOC monitoring.' },
                                    { title: 'Zero-Trust Architecture', desc: 'Identity-first, never-trust-always-verify model applied across users, devices, and applications.' },
                                    { title: 'Compliance & Governance', desc: 'Achieve and maintain ISO 27001, SOC 2 Type II, GDPR, HIPAA, and PCI-DSS compliance.' },
                                    { title: 'Penetration Testing', desc: 'Regular red-team exercises, vulnerability assessments, and cloud security posture reviews.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-colors group">
                                        <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                                            <HiShieldCheck className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-brand">{item.title}</h4>
                                            <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ══ SAP MODULES ══ */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">SAP Practice</span>
                        <h2 className="section-title">SAP Expertise Across All Key Modules</h2>
                        <p className="section-subtitle mx-auto">
                            From FI/CO and MM to S/4HANA and BTP — our certified SAP consultants handle implementation, migration, customization, and ongoing support.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                        {sapModules.map((m, i) => (
                            <motion.div
                                key={m.module}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-300 hover:shadow-card text-center transition-all duration-300 cursor-default"
                            >
                                <div className="text-2xl font-bold gradient-text font-display group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {m.module}
                                </div>
                                <p className="text-gray-400 text-xs mt-2 leading-snug">{m.name}</p>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatedSection>
                        <div className="bg-white rounded-3xl border border-gray-100 p-10 grid md:grid-cols-3 gap-8 shadow-card">
                            {[
                                { title: 'SAP S/4HANA Migration', desc: 'Full greenfield and brownfield migration services from ECC to S/4HANA with zero data loss and thorough cutover planning.' },
                                { title: 'RISE with SAP', desc: 'End-to-end RISE with SAP implementation — from business case to go-live — with hyperscaler cloud integration on AWS, Azure, or GCP.' },
                                { title: 'SAP BTP Integration', desc: 'Connect your SAP landscape with third-party applications using SAP BTP Integration Suite, API Management, and Extension Suite.' },
                            ].map((item, i) => (
                                <div key={item.title} className="space-y-3">
                                    <div className="text-2xl font-bold text-blue-600 font-display">0{i + 1}</div>
                                    <h4 className="font-bold text-brand font-display">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ══ AI / ML — Dark Section ══ */}
            <section className="relative bg-hero-gradient py-24 px-6 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url('/images/it_ai_neural_1771838224362.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-brand/95 to-brand/80" />

                <div className="relative container-max">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection className="space-y-6">
                            <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase">AI · ML · Data</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                                Intelligent Technology <br />
                                <span className="gradient-text">for the Modern Enterprise</span>
                            </h2>
                            <p className="text-blue-100/70 text-base leading-relaxed">
                                We help enterprises harness the power of Artificial Intelligence, Machine Learning, and advanced Data Analytics to automate operations, uncover insights, and build intelligent products.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    'Generative AI & LLMs', 'NLP & Computer Vision',
                                    'MLOps & Model Pipelines', 'Data Lakes & Warehouses',
                                    'Real-time Analytics', 'AI Strategy & Governance',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <HiCheck className="text-blue-400 w-4 h-4 flex-shrink-0" />
                                        <span className="text-blue-100/80 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact" className="btn-primary inline-flex mt-2">
                                Discuss AI Strategy <HiArrowRight />
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} className="space-y-4">
                            {[
                                { icon: HiLightningBolt, title: 'Generative AI Integration', desc: 'Integrate LLMs like GPT-4, Claude, Gemini, and open-source models into your enterprise workflows for automation, Q&A, document processing, and content generation.', color: 'from-violet-600 to-purple-700' },
                                { icon: HiDatabase, title: 'MLOps & Model Lifecycle', desc: 'Build production-ready ML pipelines with experiment tracking, model registry, automated retraining, canary deployments, and drift monitoring.', color: 'from-fuchsia-600 to-pink-700' },
                                { icon: HiChartBar, title: 'Data Platform Engineering', desc: 'Design and implement scalable data lakes, warehouses, and real-time streaming architectures using Databricks, Snowflake, BigQuery, and Apache Kafka.', color: 'from-green-600 to-emerald-700' },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm font-display">{item.title}</h4>
                                        <p className="text-blue-100/60 text-sm mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ══ WHY CHOOSE US ══ */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="section-label">Why GYUSO IT</span>
                        <h2 className="section-title">The GYUSO IT Advantage</h2>
                        <p className="section-subtitle mx-auto">
                            We bring the right mix of technology depth, business understanding, and engineering discipline to every IT engagement.
                        </p>
                    </AnimatedSection>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyUs.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-card transition-all duration-300 text-center space-y-4"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                                    <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="font-bold text-brand font-display text-sm">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ ENGAGEMENT MODELS ══ */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 space-y-4">
                        <span className="section-label">Flexible Engagement</span>
                        <h2 className="section-title">How We Work With You</h2>
                        <p className="section-subtitle mx-auto">
                            We adapt to your project scope, team size, and budget — no rigid delivery models.
                        </p>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Fixed-Price Projects', icon: '📋', desc: 'Ideal for well-scoped implementations. Defined deliverables, timelines, and budgets — predictable and transparent from day one.', features: ['Clear scope & deliverables', 'Fixed timeline & budget', 'Regular milestone reporting', 'Post-go-live support'] },
                            { title: 'Dedicated Teams', icon: '👥', desc: 'Scale your capability with a dedicated GYUSO engineering team — fully aligned to your goals, tools, and processes.', features: ['Named engineers on your project', 'Flexible ramp-up & ramp-down', 'Full transparency and oversight', 'Monthly or quarterly retainer'] },
                            { title: 'Managed Services', icon: '⚙️', desc: 'Ongoing operations, monitoring, optimization, and support for your cloud and IT infrastructure under a managed SLA.', features: ['24×7 monitoring & alerting', 'Defined SLAs & response times', 'Monthly reporting & reviews', 'Continuous optimization'] },
                        ].map((model, i) => (
                            <motion.div
                                key={model.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-card transition-all duration-300 space-y-5"
                            >
                                <div className="text-4xl">{model.icon}</div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600 font-display">0{i + 1}</div>
                                    <h3 className="text-base font-bold text-brand font-display mt-1">{model.title}</h3>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">{model.desc}</p>
                                <ul className="space-y-2">
                                    {model.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2">
                                            <HiCheck className="text-blue-500 w-4 h-4 flex-shrink-0" />
                                            <span className="text-xs text-gray-500">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="relative bg-hero-gradient py-24 px-6 text-center overflow-hidden">
                <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
                <div className="relative container-max space-y-6">
                    <AnimatedSection>
                        <span className="inline-block text-blue-300 text-xs font-semibold tracking-widest uppercase mb-4">Let's Build Together</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                            Ready to Transform<br />Your IT Landscape?
                        </h2>
                        <p className="text-blue-100/70 text-lg max-w-xl mx-auto mt-6 leading-relaxed">
                            Let's discuss how GYUSO's IT services can accelerate your digital transformation, improve security posture, and drive measurable business outcomes.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
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
