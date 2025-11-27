'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Palette, Zap, Eye, Layout } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const uiuxFeatures = [
  {
    icon: Monitor,
    title: 'Dashboard Design',
    description: 'Comprehensive admin dashboard with real-time monitoring and analytics',
    image: '/images/uiux/dashboard.png',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring seamless experience across all devices',
    image: '/images/uiux/mobile.png',
  },
  {
    icon: Palette,
    title: 'Modern UI',
    description: 'Clean, intuitive interface with dark theme and gradient accents',
    image: '/images/uiux/ui-design.png',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized for speed with smooth animations and transitions',
    image: '/images/uiux/performance.png',
  },
  {
    icon: Eye,
    title: 'User Experience',
    description: 'User-centric design focusing on ease of use and accessibility',
    image: '/images/uiux/ux-design.png',
  },
  {
    icon: Layout,
    title: 'Component Library',
    description: 'Reusable components for consistent design across the application',
    image: '/images/uiux/components.png',
  },
]

export default function UIUXShowcase() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (imagePath: string) => {
    setImageErrors((prev) => new Set(prev).add(imagePath))
  }

  const hasImageError = (imagePath: string) => imageErrors.has(imagePath)

  return (
    <section id="uiux" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">UI/UX Design</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Beautiful, intuitive interfaces designed for optimal user experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {uiuxFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.3 }
              }}
              className="glass-3d p-6 rounded-xl group cursor-pointer depth-shadow"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 icon-3d"
                whileHover={{ 
                  rotateY: 360,
                  scale: 1.15,
                  transition: { duration: 0.6 }
                }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
              <motion.div 
                className="mt-4 h-48 bg-gradient-to-br from-dark-800 to-dark-700 rounded-lg flex items-center justify-center overflow-hidden relative"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {!hasImageError(feature.image) ? (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={() => handleImageError(feature.image)}
                  />
                ) : (
                  <div className="text-gray-500 text-sm flex flex-col items-center">
                    <motion.div
                      animate={{ 
                        rotateY: [0, 360],
                      }}
                      transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <feature.icon className="w-12 h-12 mb-2 opacity-50" />
                    </motion.div>
                    <span>{feature.title}</span>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="glass-3d p-8 rounded-xl depth-shadow"
        >
          <motion.h3 
            className="text-2xl font-bold mb-6 text-center gradient-text"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Design Principles
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'User-Centered',
                description: 'Every design decision prioritizes user needs and experience',
              },
              {
                title: 'Accessibility',
                description: 'Inclusive design ensuring usability for all users',
              },
              {
                title: 'Performance',
                description: 'Optimized designs that load fast and run smoothly',
              },
            ].map((principle, index) => (
              <motion.div 
                key={index} 
                className="text-center smooth-3d p-4 rounded-lg"
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring"
                }}
                whileHover={{
                  rotateY: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <h4 className="text-xl font-semibold mb-2 text-white">{principle.title}</h4>
                <p className="text-gray-400">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

