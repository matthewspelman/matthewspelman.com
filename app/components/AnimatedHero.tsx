'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedHero() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-5 dark:opacity-[0.02] w-full">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover w-full"
          sizes="100vw"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-center"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">
                Matthew Spelman
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-all shadow-lg hover:shadow-xl font-medium"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/matthewspelman"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 