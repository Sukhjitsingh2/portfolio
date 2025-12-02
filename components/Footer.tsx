'use client'

import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold gradient-text">VIGILANTEye</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional video surveillance management system with AI-powered intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#documents" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Documents
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/AIP-F25-2/VigilantEye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VIGILANTEye. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made by vigilanteye team
          </p>
        </div>
      </div>
    </footer>
  )
}

