'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AnimatedHero() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-5xl md:text-7xl font-bold hero-gradient mb-8">
        I want to build things.
      </h2>
      <div className="w-full mb-12 overflow-hidden rounded-lg shadow-2xl relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
        <img
          src="/img/pexels-photo-220824.jpeg"
          alt="Scenic View"
          className={`w-full h-auto object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </motion.div>
  )
} 