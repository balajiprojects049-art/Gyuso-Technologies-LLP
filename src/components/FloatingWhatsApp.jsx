import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function FloatingWhatsApp() {
    const [isHovered, setIsHovered] = useState(false)

    // Customize your automatic pre-filled WhatsApp message here
    const prefilledMessage = "Hi GYUSO Technologies, I would like to know more about your services."
    const encodedMessage = encodeURIComponent(prefilledMessage)
    const whatsappUrl = `https://wa.me/918125472547?text=${encodedMessage}`

    return (
        <div
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center gap-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Tooltip Message */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white px-4 py-2.5 rounded-xl shadow-card border border-gray-100 hidden sm:block relative"
                    >
                        {/* Triangle pointer */}
                        <div className="absolute right-0 top-1/2 -mt-1.5 -mr-1.5 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45"></div>
                        <p className="text-sm font-semibold text-brand whitespace-nowrap relative z-10">
                            Get in touch instantly 👋
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The WhatsApp Button */}
            <motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-500/30"
                aria-label="Chat with us on WhatsApp"
            >
                <FaWhatsapp className="w-8 h-8 relative z-10" />

                {/* Ping animation effect */}
                <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping"></span>
            </motion.a>
        </div>
    )
}
