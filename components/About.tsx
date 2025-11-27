'use client'

import { motion } from 'framer-motion'
import { Target, Users, Code, Rocket } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Mission',
      description:
        'To provide cutting-edge video surveillance solutions that enhance security through AI-powered intelligence and real-time monitoring.',
    },
    {
      icon: Code,
      title: 'Technology',
      description:
        'Built with modern technologies including Flask, Python, OpenCV, and deployed on Azure for scalability and reliability.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'A team of skilled developers working together to deliver enterprise-grade surveillance management systems.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description:
        'Continuously improving with advanced face recognition, real-time alerting, and comprehensive analytics.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About VIGILANTEye</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive video surveillance management system designed for modern security needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 glass p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Project Overview</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            VIGILANTEye is a professional-grade video surveillance management system that combines
            advanced computer vision capabilities with modern web technologies. The system provides
            real-time face detection and recognition, intelligent alerting through Telegram integration,
            and comprehensive video analytics.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Built with a focus on security, scalability, and user experience, VIGILANTEye serves as
            a complete solution for organizations requiring advanced surveillance capabilities with
            AI-powered intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

