'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Shield, Users, BarChart, TestTube, Layout } from 'lucide-react'

const teamMembers = [
  {
    name: 'Tanzima',
    role: 'Team Lead / Back-end Developer',
    contributions: [
      'Team Leadership & Coordination',
      'Backend Architecture Design',
      'API Development',
      'Database Management',
      'Project Planning',
    ],
    skills: ['Flask', 'Python', 'Backend', 'API', 'Leadership'],
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Sameer',
    role: 'Team Lead / Front-end Developer',
    contributions: [
      'Team Leadership & Coordination',
      'Frontend Architecture',
      'UI/UX Design',
      'User Interface Development',
      'Project Management',
    ],
    skills: ['React', 'JavaScript', 'Frontend', 'UI/UX', 'Leadership'],
    icon: Layout,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Om',
    role: 'Data Analyst',
    contributions: [
      'Data Analysis & Insights',
      'Performance Metrics',
      'Analytics Dashboard',
      'Data Visualization',
      'Reporting',
    ],
    skills: ['Data Analysis', 'Python', 'SQL', 'Visualization', 'Analytics'],
    icon: BarChart,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Abdullah',
    role: 'Data Scientist',
    contributions: [
      'Machine Learning Models',
      'Data Processing',
      'Predictive Analytics',
      'Model Training & Optimization',
      'AI Integration',
    ],
    skills: ['Machine Learning', 'Python', 'AI/ML', 'Data Science', 'TensorFlow'],
    icon: Database,
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Sukhjit Singh',
    role: 'Full Stack Developer',
    contributions: [
      'Full Stack Development',
      'Backend API Development',
      'Frontend Implementation',
      'System Architecture Design',
      'Database Management',
    ],
    skills: ['Flask', 'Python', 'React', 'JavaScript', 'Full-Stack', 'Backend', 'Frontend'],
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Riya Shah',
    role: 'Data Scientist',
    contributions: [
      'Face Recognition Algorithms',
      'Computer Vision Models',
      'Data Analysis',
      'Model Development',
      'AI Research',
    ],
    skills: ['Data Science', 'Python', 'OpenCV', 'AI/ML', 'Computer Vision'],
    icon: Database,
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Sri Datta',
    role: 'Back-end Tester',
    contributions: [
      'Backend Testing',
      'API Testing',
      'Quality Assurance',
      'Test Automation',
      'Bug Detection & Reporting',
    ],
    skills: ['Testing', 'pytest', 'QA', 'Automation', 'Backend'],
    icon: TestTube,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    name: 'Varisdeep Singh',
    role: 'Front-end Developer',
    contributions: [
      'Frontend Development',
      'Component Building',
      'User Interface Design',
      'Client-side Logic',
      'Web Development',
    ],
    skills: ['React', 'JavaScript', 'Frontend', 'Web Development', 'UI'],
    icon: Layout,
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the talented developers behind VIGILANTEye
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
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
              <div className="flex items-start space-x-4 mb-6">
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0 icon-3d`}
                  whileHover={{ 
                    rotateY: 360,
                    scale: 1.15,
                    transition: { duration: 0.6 }
                  }}
                >
                  <member.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-400">{member.role}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Contributions</h4>
                <ul className="space-y-2">
                  {member.contributions.map((contribution, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

