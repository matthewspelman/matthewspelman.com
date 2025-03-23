'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedHero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Hi, I'm Matthew Spelman
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
        >
          I'm a software engineer based in New York City, specializing in building exceptional digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/matthewspelman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </div>
  )
} 