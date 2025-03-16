'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, I'm Matthew Spelman
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          I'm a software engineer based in New York City, specializing in building exceptional digital experiences.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/matthewspelman"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-square rounded-2xl overflow-hidden"
      >
        <Image
          src="/profile.jpg"
          alt="Matthew Spelman"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  )
} 