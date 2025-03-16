'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedHero() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              Hi, I'm Matthew Spelman
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I'm a software engineer based in New York City, specializing in building exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-primary"
            >
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/matthewspelman"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl hover-card">
            <Image
              src="/images/headshot.jpg"
              alt="Matthew Spelman"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-2xl opacity-20 blur-2xl" />
        </motion.div>
      </div>
    </div>
  )
} 