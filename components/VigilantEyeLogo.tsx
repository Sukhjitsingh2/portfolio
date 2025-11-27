'use client'

import { motion } from 'framer-motion'

interface VigilantEyeLogoProps {
  className?: string
  showText?: boolean
  size?: 'small' | 'medium' | 'large'
}

export default function VigilantEyeLogo({ 
  className = '', 
  showText = true,
  size = 'medium' 
}: VigilantEyeLogoProps) {
  const sizeMap = {
    small: { eye: 40, text: 14 },
    medium: { eye: 60, text: 18 },
    large: { eye: 120, text: 28 }
  }

  const dimensions = sizeMap[size]

  return (
    <motion.div 
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Eye Graphic */}
      <svg
        width={dimensions.eye}
        height={dimensions.eye * 0.7}
        viewBox="0 0 200 140"
        className="drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 4px 8px rgba(14, 165, 233, 0.3))' }}
      >
        <defs>
          {/* Metallic silver gradient */}
          <linearGradient id="metallicSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8e8e8" stopOpacity="1" />
            <stop offset="50%" stopColor="#c0c0c0" stopOpacity="1" />
            <stop offset="100%" stopColor="#a8a8a8" stopOpacity="1" />
          </linearGradient>
          
          {/* Blue iris gradient */}
          <radialGradient id="irisGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="1" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="1" />
          </radialGradient>
          
          {/* Glow effect */}
          <radialGradient id="glow" cx="20%" cy="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </radialGradient>
          
          {/* 3D shadow */}
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Eye outline (eyelid) - metallic silver */}
        <path
          d="M 20 70 Q 50 20, 100 20 Q 150 20, 180 70 Q 150 120, 100 120 Q 50 120, 20 70 Z"
          fill="url(#metallicSilver)"
          stroke="#888"
          strokeWidth="2"
          filter="url(#shadow)"
        />
        
        {/* Inner eye area */}
        <ellipse
          cx="100"
          cy="70"
          rx="75"
          ry="45"
          fill="#1e293b"
        />
        
        {/* Iris - blue with radial lines */}
        <circle
          cx="100"
          cy="70"
          r="35"
          fill="url(#irisGradient)"
        />
        
        {/* Radial lines in iris */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180)
          const x1 = 100 + Math.cos(angle) * 20
          const y1 = 70 + Math.sin(angle) * 20
          const x2 = 100 + Math.cos(angle) * 35
          const y2 = 70 + Math.sin(angle) * 35
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#1e40af"
              strokeWidth="1"
              opacity="0.6"
            />
          )
        })}
        
        {/* Pupil - black */}
        <circle
          cx="100"
          cy="70"
          r="12"
          fill="#000"
        />
        
        {/* Highlight on pupil */}
        <ellipse
          cx="105"
          cy="65"
          rx="4"
          ry="3"
          fill="#fff"
          opacity="0.8"
        />
        
        {/* Glowing blue accent (tear duct area) */}
        <circle
          cx="30"
          cy="70"
          r="8"
          fill="url(#glow)"
          opacity="0.9"
        />
        <circle
          cx="30"
          cy="70"
          r="5"
          fill="#3b82f6"
          opacity="0.7"
        />
        
        {/* Additional highlights on eyelid for 3D effect */}
        <path
          d="M 20 70 Q 50 20, 100 20"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* VIGILANTEye Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-2"
        >
          <svg
            width={dimensions.eye * 2.5}
            height={dimensions.text * 1.5}
            viewBox="0 0 300 40"
            className="drop-shadow-md"
          >
            <defs>
              {/* Metallic text gradient */}
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c0c0c0" stopOpacity="1" />
                <stop offset="50%" stopColor="#e8e8e8" stopOpacity="1" />
                <stop offset="100%" stopColor="#a8a8a8" stopOpacity="1" />
              </linearGradient>
              
              {/* 3D text shadow */}
              <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
                <feOffset dx="1" dy="1" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.5"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <text
              x="150"
              y="28"
              textAnchor="middle"
              fontSize="24"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
              fill="url(#textGradient)"
              filter="url(#textShadow)"
              letterSpacing="2"
            >
              VIGILANT
              <tspan fill="url(#textGradient)" fontWeight="900" fontSize="26">EYE</tspan>
            </text>
          </svg>
        </motion.div>
      )}
    </motion.div>
  )
}

