'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Zap, Shield, Database } from 'lucide-react'

export default function Projects() {
  const projectFeatures = [
    {
      icon: Eye,
      title: 'Face Detection & Recognition',
      description: 'Advanced AI-powered face detection and recognition using OpenCV and face_recognition libraries',
    },
    {
      icon: Zap,
      title: 'Real-time Alerting',
      description: 'Telegram bot integration for instant notifications and alert escalation',
    },
    {
      icon: Shield,
      title: 'Secure Architecture',
      description: 'JWT authentication, SSL/TLS encryption, and comprehensive security measures',
    },
    {
      icon: Database,
      title: 'Video Management',
      description: 'Complete video upload, storage, and metadata management system',
    },
  ]

  const techStack = [
    'Flask 2.3.3',
    'Python 3.11',
    'OpenCV',
    'MySQL',
    'Docker',
    'Azure Container Apps',
    'Telegram Bot API',
    'JWT Authentication',
  ]

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">VIGILANTEye Project</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive video surveillance management system with AI-powered intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Project Overview</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              VIGILANTEye is a professional-grade video surveillance management system that
              combines advanced computer vision capabilities with modern web technologies.
              The system provides real-time face detection, intelligent alerting, and
              comprehensive video analytics.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/AIP-F25-2/VigilantEye"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
              <a
                href="https://vigilanteye-app.politepond-67bfac4f.eastus.azurecontainerapps.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit Website</span>
              </a>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {projectFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">
            Project Statistics
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">200+</div>
              <div className="text-gray-400">Commits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">150+</div>
              <div className="text-gray-400">Files Changed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">45+</div>
              <div className="text-gray-400">Test Cases</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

