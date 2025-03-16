'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <div className="relative w-48 h-48 mx-auto mb-8">
        <Image
          src="/img/headshot.jpg"
          alt="Matthew Spelman's Headshot"
          fill
          className="rounded-full shadow-xl object-cover"
          sizes="(max-width: 768px) 192px, 192px"
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