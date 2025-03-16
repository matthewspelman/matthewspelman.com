'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <div className="w-48 h-48 mx-auto mb-8 overflow-hidden rounded-full shadow-xl relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full" />
        )}
        <img
          src="/img/headshot.jpg"
          alt="Matthew Spelman's Headshot"
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <div className="flex justify-center gap-6">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:matthewspelman@gmail.com?subject=Pleasure%20to%20meet%20you"
          className="p-4 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Email Matthew Spelman"
        >
          <EnvelopeIcon className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/matthewspelman"
          className="p-4 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit Matthew Spelman's GitHub"
        >
          <CodeBracketIcon className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.div>
  )
} 