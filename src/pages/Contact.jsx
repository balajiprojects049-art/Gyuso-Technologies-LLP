import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiArrowRight, HiCheck } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const contactInfo = [
    {
        icon: HiPhone,
        label: 'Phone',
        value: '+91-8125472547',
        href: 'tel:+918125472547',
    },
    {
        icon: HiMail,
        label: 'Email',
        value: 'info@gyuso.com',
        href: 'mailto:info@gyuso.com',
    },
    {
        icon: HiLocationMarker,
        label: 'Address',
        value: 'Office #9, The Head Quarters, 6th Floor, Orbit, Knowledge City Road, Raidurg, Hyderabad, Telangana – 500019',
        href: null,
    },
    {
        icon: HiClock,
        label: 'Business Hours',
        value: 'Mon–Fri: 9:00 AM – 5:00 PM\nSaturday & Sunday: Holiday',
        href: null,
    },
]

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, email, subject, message } = formState
        const text = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`
        const whatsappUrl = `https://wa.me/918125472547?text=${text}`

        window.open(whatsappUrl, '_blank')

        setSubmitted(true)
    }

    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                {/* Hero Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/Contact us.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand/85 via-brand/80 to-brand/90" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="relative max-w-4xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                    >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        Get In Touch
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-white font-display leading-tight"
                    >
                        Let's Start a<br />
                        <span className="gradient-text">Conversation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-blue-100/70 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Whether you have a project in mind or want to explore how GYUSO can help your organization, we'd love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <AnimatedSection className="space-y-8">
                            <div className="space-y-4">
                                <span className="section-label">Contact Details</span>
                                <h2 className="section-title text-3xl">Reach Out to Us</h2>
                                <p className="text-gray-500 leading-relaxed">
                                    Our team is ready to discuss your technology requirements. Contact us through any of the channels below.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="flex gap-5">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <info.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">{info.label}</p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="text-brand font-semibold text-sm hover:text-blue-600 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-brand font-semibold text-sm whitespace-pre-line leading-relaxed">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* LinkedIn */}
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaLinkedin className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">LinkedIn</p>
                                        <a
                                            href="https://www.linkedin.com/company/gyuso/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-brand font-semibold text-sm hover:text-blue-600 transition-colors"
                                        >
                                            linkedin.com/company/gyuso
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-card">
                                <div className="bg-gray-50 h-60 flex flex-col items-center justify-center gap-3 text-gray-400">
                                    <HiLocationMarker size={36} className="text-blue-300" />
                                    <div className="text-center space-y-1">
                                        <p className="text-sm font-semibold text-gray-500">Knowledge City, Raidurg</p>
                                        <p className="text-xs text-gray-400">Hyderabad, Telangana – 500019</p>
                                        <a
                                            href="https://maps.google.com/?q=Knowledge+City+Raidurg+Hyderabad"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold hover:underline mt-2"
                                        >
                                            Open in Google Maps <HiArrowRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Contact Form */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-card">
                                <h3 className="text-xl font-bold text-brand font-display mb-6">Send Us a Message</h3>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12 space-y-4"
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                            <HiCheck className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h4 className="text-lg font-bold text-brand font-display">Message Sent!</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                                            Thank you for reaching out. Our team will get back to you within 1 business day.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="btn-outline text-sm py-2 px-6 mt-2"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    placeholder="John Smith"
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    placeholder="john@company.com"
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                value={formState.subject}
                                                onChange={handleChange}
                                                placeholder="How can we help you?"
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                required
                                                value={formState.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your project, requirements, or any questions you have..."
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all resize-none"
                                            />
                                        </div>

                                        <button type="submit" className="btn-primary w-full justify-center">
                                            Send Message <HiArrowRight />
                                        </button>

                                        <p className="text-xs text-gray-400 text-center leading-relaxed">
                                            We respect your privacy. Your information will never be shared.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Bottom Contact Strip */}
            <section className="bg-gray-50 border-t border-gray-100 py-12 px-6">
                <div className="container-max">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: HiPhone, label: 'Call Us', value: '+91-8125472547', href: 'tel:+918125472547' },
                            { icon: HiMail, label: 'Email Us', value: 'info@gyuso.com', href: 'mailto:info@gyuso.com' },
                            { icon: FaLinkedin, label: 'Connect', value: 'linkedin.com/company/gyuso', href: 'https://www.linkedin.com/company/gyuso/' },
                        ].map((item) => (
                            <AnimatedSection key={item.label} className="space-y-3">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                                    <item.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">{item.label}</p>
                                <a
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-brand hover:text-blue-600 transition-colors"
                                >
                                    {item.value}
                                </a>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
