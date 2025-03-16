'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AnimatedHeader() {
  return (
    <nav className="flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-gray-900 dark:text-white"
      >
        <Link href="/">MS</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-8"
      >
        <Link
          href="#about"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  )
} 