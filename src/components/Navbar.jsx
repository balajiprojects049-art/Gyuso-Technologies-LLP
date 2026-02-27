import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiArrowRight } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi'

const navLinks = [
    { label: 'Overview', path: '/' },
    { label: 'Who We Are', path: '/about' },
    {
        label: 'What We Do',
        children: [
            {
                label: 'Semiconductor Engineering',
                path: '/semiconductor-services',
                subChildren: [
                    { label: 'RTL Design', path: '/semiconductor-services/rtl-design' },
                    { label: 'Design Verification', path: '/semiconductor-services/design-verification' },
                    { label: 'Design for Test (DFT)', path: '/semiconductor-services/dft' },
                    { label: 'Physical Design & STA', path: '/semiconductor-services/physical-design' },
                    { label: 'Analog Layout', path: '/semiconductor-services/analog-layout' },
                    { label: 'Embedded Systems', path: '/semiconductor-services/embedded-systems' },
                    { label: 'Performance Modeling', path: '/semiconductor-services/performance-modeling' },
                ]
            },
            {
                label: 'Digital & IT Solutions',
                path: '/it-services',
                subChildren: [
                    { label: 'Cloud Services', path: '/it-services/cloud' },
                    { label: 'Cybersecurity', path: '/it-services/cyber-security' },
                    { label: 'Artificial Intelligence', path: '/it-services/ai' },
                    { label: 'Machine Learning', path: '/it-services/ml' },
                ]
            },
        ],
    },
    { label: 'Join Our Team', path: '/careers' },
    { label: 'Connect With Us', path: '/contact' },
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
                                    <div key={link.label} className="relative group/nav h-20 flex items-center">
                                        <button
                                            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${scrolled
                                                ? 'text-brand hover:text-blue-600'
                                                : 'text-white hover:text-blue-300'
                                                }`}
                                        >
                                            {link.label}
                                            <HiChevronDown className="text-[10px] group-hover/nav:-rotate-180 transition-transform duration-300" />
                                        </button>

                                        {/* Enterprise Mega Menu */}
                                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-4 group-hover/nav:translate-y-0 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent overflow-hidden">

                                            {/* Top accent bar */}
                                            <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400"></div>

                                            <div className="grid grid-cols-2 p-10 gap-12 bg-gray-50/50">
                                                {link.children.map((child) => (
                                                    <div key={child.label} className="space-y-6">
                                                        <Link
                                                            to={child.path}
                                                            className="inline-flex items-center gap-2 text-lg font-bold text-brand hover:text-blue-600 transition-colors font-display group/title"
                                                        >
                                                            {child.label}
                                                            <HiArrowRight className="text-sm opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-blue-600" />
                                                        </Link>

                                                        <hr className="border-gray-200" />

                                                        {child.subChildren && (
                                                            <div className="flex flex-col gap-4">
                                                                {child.subChildren.map((subChild) => (
                                                                    <Link
                                                                        key={subChild.label}
                                                                        to={subChild.path}
                                                                        className="group/item flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                                                    >
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-100 group-hover/item:bg-blue-600 group-hover/item:scale-150 transition-all duration-300" />
                                                                        <span className="group-hover/item:translate-x-1 transition-transform duration-300">{subChild.label}</span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="bg-blue-50/50 border-t border-blue-100/50 px-10 py-6 flex justify-between items-center">
                                                <div>
                                                    <p className="text-sm font-bold text-brand mb-1">Need help choosing a service?</p>
                                                    <p className="text-xs text-gray-500">Our experts are ready to guide you.</p>
                                                </div>
                                                <Link to="/contact" className="btn-primary py-2 px-5 text-xs">
                                                    Talk to an expert
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={link.path} className="h-20 flex items-center">
                                        <Link
                                            to={link.path}
                                            className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${isActive(link.path)
                                                ? scrolled
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-white bg-white/20'
                                                : scrolled
                                                    ? 'text-brand hover:text-blue-600 hover:bg-blue-50/50'
                                                    : 'text-white hover:text-blue-300 hover:bg-white/10'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
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
