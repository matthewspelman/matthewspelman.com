'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function AnimatedHeader() {
  return (
    <nav className="flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="/" 
          className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          MS
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-8"
      >
        {navItems.map((item) => (
          <motion.div
            key={item.href}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  )
} 