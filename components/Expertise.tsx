'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Zap,
  GitBranch,
  TestTube,
} from 'lucide-react'

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: Code,
      title: 'Backend Development',
      skills: ['Flask', 'Python', 'REST APIs', 'Microservices'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'Computer Vision',
      skills: ['OpenCV', 'Face Recognition', 'Image Processing', 'AI/ML'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'Database Design',
      skills: ['MySQL', 'SQLAlchemy', 'Query Optimization', 'Data Modeling'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: ['Azure', 'Docker', 'CI/CD', 'Container Apps'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Security',
      skills: ['JWT', 'SSL/TLS', 'Input Validation', 'Secrets Management'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      skills: ['pytest', 'Coverage', 'Integration Testing', 'Code Quality'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: GitBranch,
      title: 'Code Quality',
      skills: ['Refactoring', 'SonarQube', 'Best Practices', 'Documentation'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      skills: ['Optimization', 'Scalability', 'Load Testing', 'Monitoring'],
      color: 'from-pink-500 to-rose-500',
    },
  ]

  const achievements = [
    { metric: '118+', label: 'Code Quality Issues Fixed' },
    { metric: '80%', label: 'Complexity Reduction' },
    { metric: '0', label: 'Security Vulnerabilities' },
    { metric: '55%', label: 'Test Coverage' },
  ]

  return (
    <section id="expertise" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Expertise & Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technical expertise across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12,
                rotateY: 8,
                rotateX: -5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="glass-3d p-6 rounded-xl group cursor-pointer smooth-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 icon-3d`}
                whileHover={{ 
                  rotateY: 360,
                  scale: 1.2,
                  transition: { duration: 0.6 }
                }}
              >
                <area.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
              <ul className="space-y-2">
                {area.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex} 
                    className="text-gray-400 text-sm flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ x: 5, color: '#60a5fa' }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
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
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{
                  scale: 1.15,
                  rotateY: 10,
                  rotateX: -5,
                  transition: { duration: 0.3 }
                }}
                className="text-center smooth-3d cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="text-4xl font-bold gradient-text mb-2"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2
                  }}
                >
                  {achievement.metric}
                </motion.div>
                <div className="text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

