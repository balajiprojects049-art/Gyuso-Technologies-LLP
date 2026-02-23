import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

export default function ServiceCard({ icon: Icon, title, description, href, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay }}
            whileHover={{ y: -6 }}
            className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:border-blue-100 transition-all duration-300 cursor-pointer flex flex-col gap-5"
        >
            {/* Icon */}
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
                <h3 className="text-lg font-bold text-brand font-display group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Link */}
            {href && (
                <Link
                    to={href}
                    className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Learn More <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            )}
        </motion.div>
    )
}
