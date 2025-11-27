'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/AIP-F25-2/VigilantEye',
      color: 'hover:text-gray-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contact@vigilanteye.com',
      color: 'hover:text-red-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-400',
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      href: '#',
      color: 'hover:text-cyan-400',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center space-x-4 p-4 bg-dark-800 rounded-lg transition-all duration-300 ${link.color}`}
                  >
                    <link.icon className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-300">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Project Repository</h3>
              <p className="text-gray-400 mb-4">
                Check out our open-source project on GitHub
              </p>
              <a
                href="https://github.com/AIP-F25-2/VigilantEye"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5 text-gray-400" />
                <span className="text-white">View Repository</span>
              </a>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                    About the Project
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Project Details
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#expertise" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Our Expertise
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

