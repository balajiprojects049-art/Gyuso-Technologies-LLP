import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

export default function AnimatedSection({ children, className = '', delay = 0 }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}
