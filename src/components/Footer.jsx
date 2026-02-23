import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

const serviceLinks = [
    { label: 'Semiconductor Services', path: '/semiconductor-services' },
    { label: 'IT Infra & Technology', path: '/it-services' },
]

const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-brand text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg font-display">G</span>
                            </div>
                            <div>
                                <span className="font-bold text-xl tracking-tight font-display text-white">GYUSO</span>
                                <p className="text-xs tracking-widest text-blue-300">TECHNOLOGIES</p>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Powering innovation through cutting-edge Semiconductor Engineering and Enterprise IT Infrastructure solutions.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/company/gyuso/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-sm tracking-widest uppercase">Company</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-sm tracking-widest uppercase">Services</h4>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-sm tracking-widest uppercase">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <HiPhone className="text-blue-400 mt-0.5 flex-shrink-0" size={16} />
                                <a href="tel:+918125472547" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                                    +91-8125472547
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <HiMail className="text-blue-400 mt-0.5 flex-shrink-0" size={16} />
                                <a href="mailto:info@gyuso.com" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                                    info@gyuso.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="text-blue-400 mt-0.5 flex-shrink-0" size={16} />
                                <address className="text-gray-400 text-sm not-italic leading-relaxed">
                                    Office #9, The Head Quarters,<br />
                                    6th Floor, Orbit,<br />
                                    Knowledge City Road,<br />
                                    Raidurg, Hyderabad,<br />
                                    Telangana – 500019
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} GYUSO Technologies LLP. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Semiconductor Engineering · IT Infrastructure · Cloud · AI/ML
                    </p>
                </div>
            </div>
        </footer>
    )
}
