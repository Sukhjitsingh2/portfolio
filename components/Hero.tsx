'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Shield, Eye, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotateX: -90 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-3d mb-8 cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Shield className="w-5 h-5 text-primary-400" />
            </motion.div>
            <span className="text-sm text-gray-300">AI-Powered Surveillance</span>
          </motion.div>

          {/* Title - Hidden if logo shows, shown if logo not found */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              VIGILANTEye
            </motion.span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Professional Video Surveillance Management System
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Advanced AI-powered face recognition, real-time alerting, and comprehensive
            video analytics for modern security needs
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Eye, text: 'Face Recognition' },
              { icon: Zap, text: 'Real-time Alerts' },
              { icon: Shield, text: 'Secure & Scalable' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ 
                  y: -8,
                  rotateY: 10,
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                className="flex items-center space-x-2 px-6 py-3 glass-3d rounded-full cursor-pointer smooth-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  whileHover={{
                    rotateY: 360,
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <item.icon className="w-5 h-5 text-primary-400" />
                </motion.div>
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <a
              href="#about"
              className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
            >
              <span>Explore More</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

