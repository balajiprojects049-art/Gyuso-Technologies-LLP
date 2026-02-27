import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheckCircle, HiArrowRight, HiDatabase, HiChartBar } from 'react-icons/hi'

export default function MachineLearning() {
    return (
        <div className="pt-20 bg-[#0B1121] min-h-screen text-slate-100 font-sans">
            {/* Massive Tech Hero */}
            <section className="relative w-full overflow-hidden bg-[#0B1121] pt-12 pb-24 lg:pt-16 lg:pb-32 border-b border-slate-800">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="/images/ml_hero_img.png" alt="Machine Learning Data Visual" className="w-full h-full object-cover mix-blend-screen" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 font-semibold mb-8 text-sm uppercase tracking-widest border border-blue-800/50">
                            Data Science & Analytics
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8 tracking-tight">
                            Advanced <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Machine Learning</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                            Transforming dormant data lakes into active revenue engines. We design, train, and deploy sophisticated predictive algorithms that continuously learn from massive datasets, uncovering hidden correlations and driving hyper-accurate forecasting.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/30 transition-all">
                            Engineer Your Data <HiArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Deep Technical Content */}
            <section className="py-24 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Intro paragraphs */}
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <h2 className="text-3xl font-bold font-display text-white mb-6">The End of Guesswork</h2>
                        <p className="text-lg text-slate-300 leading-relaxed text-left md:text-center">
                            Machine Learning abandons strict deterministic programming rules. Instead, algorithms mathematically iterate across historical data points, adjusting complex internal weights to minimize error functions. Through supervised regression, unsupervised clustering, and deeply layered reinforcement learning, we construct models that actively anticipate customer churn, optimize pricing dynamics in real-time, and catch financial fraud milliseconds before a transaction processes.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {/* Section 1: Data Eng */}
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="bg-[#1E293B] p-10 rounded-[2.5rem] border border-slate-700 relative overflow-hidden h-full shadow-lg">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <HiDatabase className="text-5xl text-blue-500 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">MLOps & Feature Engineering</h3>
                                <div className="prose text-slate-300 leading-relaxed">
                                    <p className="mb-4">
                                        An algorithm is entirely useless if the data feeding it is corrupt. 80% of Machine Learning success relies strictly on robust Data Engineering. We build scalable ETL (Extract, Transform, Load) pipelines traversing Snowflake, AWS Redshift, or Databricks, aggressively cleansing noisy datasets and orchestrating complex feature engineering workflows to isolate the mathematical variables that matter most.
                                    </p>
                                    <p>
                                        Once the model is built, we implement strict MLOps. Tracking model drift is critical; as market behaviors change over time, the model's accuracy decays. Our MLOps pipelines automatically monitor inference accuracy against live targets, triggering massive distributed retraining jobs via Kubernetes scaling when confidence scores drop below acceptable thresholds.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div className="bg-[#1E293B] p-8 rounded-3xl border border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-3"><span className="text-blue-500">01.</span> Neural Networks & Deep Learning</h4>
                                    <p className="text-slate-300 leading-relaxed">Architecting massive multi-layer perceptrons utilizing PyTorch and TensorFlow. These extreme topologies handle deeply unstructured data—raw audio, unformatted text, and granular sensor telemetry—learning abstract, hierarchical representations of the real world entirely autonomously.</p>
                                </div>
                                <div className="bg-[#1E293B] p-8 rounded-3xl border border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-3"><span className="text-blue-500">02.</span> Gradient Boosting & Forests</h4>
                                    <p className="text-slate-300 leading-relaxed">For incredibly rapid, accurate, and explainable predictions on tabular structured databases, we heavily utilize hyper-parameter tuned architectures like XGBoost and Random Forest ensembles, dominating tasks ranging from credit-risk scoring to algorithmic stock trading algorithms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Img Content */}
                        <div className="grid lg:grid-cols-12 gap-12 items-center bg-[#0B1121] border border-slate-800 rounded-[3rem] p-4 lg:p-8 text-white shadow-xl">
                            <div className="lg:col-span-5 h-[400px]">
                                <img src="/images/ml_content_img.png" alt="Deep Learning Architecture" className="w-full h-full rounded-[2.5rem] border border-slate-700 object-cover" />
                            </div>
                            <div className="lg:col-span-7 p-6 lg:p-10">
                                <h3 className="text-3xl font-bold font-display mb-6"><HiChartBar className="inline-block text-blue-500 mr-3 -mt-2" />Prescriptive Analytics Pipeline</h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    We push beyond mere predictive machine learning (forecasting what will happen) and implement Prescriptive Analytics (mathematically determining what you absolutely should do to achieve specific outcomes).
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {['Dynamic A/B Testing & Multi-Armed Bandit optimizations.', 'Time-Series Analysis via ARIMA/Prophet for demand forecasting.', 'Reinforcement Learning agents for inventory logistics.', 'Dimensionality Reduction (PCA) for extreme datasets.'].map(item => (
                                        <li key={item} className="flex gap-3 text-slate-300 font-medium items-start">
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
