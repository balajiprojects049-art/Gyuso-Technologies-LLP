import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
        label: 'Services',
        children: [
            {
                label: 'Semiconductor Services',
                path: '/semiconductor-services',
                subChildren: [
                    { label: 'RTL Design', path: '/semiconductor-services/rtl-design' },
                    { label: 'Design Verification', path: '/semiconductor-services/design-verification' },
                    { label: 'Design for Test (DFT)', path: '/semiconductor-services/dft' },
                    { label: 'Physical Design & STA', path: '/semiconductor-services/physical-design' },
                    { label: 'Analog Layout', path: '/semiconductor-services/analog-layout' },
                ]
            },
            {
                label: 'IT Infra & Technology',
                path: '/it-services',
                subChildren: [
                    { label: 'Cloud', path: '/it-services/cloud' },
                    { label: 'Cyber Security', path: '/it-services/cyber-security' },
                    { label: 'Artificial Intelligence', path: '/it-services/ai' },
                    { label: 'Machine Learning', path: '/it-services/ml' },
                ]
            },
        ],
    },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
        setServicesOpen(false)
    }, [location])

    const isActive = (path) => location.pathname === path

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-300">
                                <span className="text-white font-bold text-lg font-display">G</span>
                            </div>
                            <div>
                                <span className={`font-bold text-xl tracking-tight font-display transition-colors duration-300 ${scrolled ? 'text-brand' : 'text-white'}`}>
                                    GYUSO
                                </span>
                                <p className={`text-xs tracking-widest transition-colors duration-300 ${scrolled ? 'text-gray-400' : 'text-blue-200'}`}>
                                    TECHNOLOGIES
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) =>
                                link.children ? (
                                    <div key={link.label} className="relative group">
                                        <button
                                            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${scrolled
                                                ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                                }`}
                                        >
                                            {link.label}
                                            <HiChevronDown className="text-xs group-hover:rotate-180 transition-transform duration-200" />
                                        </button>
                                        {/* Dropdown */}
                                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-card-hover border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                                            <div className="p-2">
                                                {link.children.map((child) => (
                                                    <div key={child.label} className="relative group/sub">
                                                        {child.subChildren ? (
                                                            <>
                                                                <Link
                                                                    to={child.path}
                                                                    className="flex justify-between items-center px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                                        {child.label}
                                                                    </div>
                                                                    <HiChevronDown className="text-sm text-gray-400 group-hover/sub:text-blue-500 -rotate-90 transition-all duration-300" />
                                                                </Link>
                                                                {/* Sub-dropdown */}
                                                                {/* Added pseudo-element to create an invisible bridge preventing hover area loss */}
                                                                <div className="absolute top-0 left-[calc(100%+0.25rem)] w-[260px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 translate-y-2 group-hover/sub:translate-y-0 before:absolute before:-left-4 before:top-0 before:h-full before:w-4 before:bg-transparent">
                                                                    <div className="p-2 flex flex-col gap-1">
                                                                        {child.subChildren.map((subChild) => (
                                                                            <Link
                                                                                key={subChild.label}
                                                                                to={subChild.path}
                                                                                className="group/item relative flex items-center px-4 py-3 rounded-xl text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-300 font-medium overflow-hidden"
                                                                            >
                                                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-md group-hover/item:h-1/2 transition-all duration-300 opacity-0 group-hover/item:opacity-100" />
                                                                                <span className="transform translate-x-0 group-hover/item:translate-x-2 transition-transform duration-300">{subChild.label}</span>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                to={child.path}
                                                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                                                            >
                                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                                {child.label}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path)
                                            ? scrolled
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-white bg-white/15'
                                            : scrolled
                                                ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </nav>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link
                                to="/contact"
                                className="btn-primary text-sm py-2.5 px-6"
                            >
                                Get In Touch
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-brand hover:bg-gray-100' : 'text-white hover:bg-white/10'
                                }`}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-x-0 top-20 z-40 bg-white border-b border-gray-100 shadow-xl lg:hidden"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
                            {navLinks.map((link) =>
                                link.children ? (
                                    <div key={link.label}>
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                            {link.label}
                                            <HiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden pl-4"
                                                >
                                                    {link.children.map((child) => (
                                                        <div key={child.label}>
                                                            <Link
                                                                to={child.path}
                                                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                                            >
                                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                                {child.label}
                                                            </Link>
                                                            {child.subChildren && (
                                                                <div className="pl-6 py-2 ml-4 mt-2 border-l-2 border-gray-100 space-y-1">
                                                                    {child.subChildren.map((subChild) => (
                                                                        <Link
                                                                            key={subChild.label}
                                                                            to={subChild.path}
                                                                            className="group/mob flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium relative overflow-hidden"
                                                                        >
                                                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/mob:bg-blue-500 group-hover/mob:scale-125 transition-all duration-300" />
                                                                            <span className="translate-x-0 group-hover/mob:translate-x-1 transition-transform duration-300">{subChild.label}</span>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`block px-4 py-3 rounded-xl font-medium transition-colors ${isActive(link.path)
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <div className="pt-4">
                                <Link to="/contact" className="btn-primary w-full justify-center">
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
