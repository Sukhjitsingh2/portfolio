'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, FileCheck, FileText } from 'lucide-react'

const documents = [
  {
    title: 'VIGILANTEye Project Specification',
    description: 'Complete project specification document detailing requirements, features, and implementation details',
    file: '/docs/VigilantEye_Project_Specification (1).pdf',
    icon: FileCheck,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'VIGILANTEye Tech Gradient Charter',
    description: 'Technical charter document outlining the technology stack, architecture, and development guidelines',
    file: '/docs/VigilantEye_Tech_Gradient_Charter.pdf',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Final Report',
    description: 'Comprehensive final project report covering implementation, results, challenges, and future recommendations',
    file: '/docs/final report.pdf',
    icon: FileText,
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Documents() {
  const handleOpenPDF = (file: string) => {
    if (typeof window !== 'undefined') {
      try {
        // Encode the file path to handle spaces and special characters
        const encodedPath = encodeURI(file)
        const newWindow = window.open(encodedPath, '_blank')
        if (newWindow) {
          newWindow.opener = null
        }
      } catch (error) {
        console.error('Error opening PDF:', error)
      }
    }
  }

  return (
    <section id="documents" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Project Documents</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access project documentation, specifications, and technical charters
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.7,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                rotateY: 8,
                rotateX: -5,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="glass-3d p-8 rounded-xl smooth-3d cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-start space-x-6 mb-6">
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${doc.color} flex items-center justify-center flex-shrink-0 icon-3d`}
                  whileHover={{ 
                    rotateY: 360,
                    scale: 1.15,
                    transition: { duration: 0.6 }
                  }}
                >
                  <doc.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{doc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{doc.description}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-dark-700">
                <motion.button
                  onClick={() => handleOpenPDF(doc.file)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Open PDF</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

