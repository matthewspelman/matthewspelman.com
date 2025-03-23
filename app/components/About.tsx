'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5 w-full">
        <Image
          src="/images/bridge.jpg"
          alt="Brooklyn Bridge"
          fill
          priority
          className="object-cover w-full"
          sizes="100vw"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">
                About
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                Matthew Spelman
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                I'm a software engineer based in New York City, specializing in building exceptional digital experiences. With a strong foundation in full-stack development and a passion for creating innovative solutions, I focus on developing scalable applications that make a difference.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                My expertise spans across modern web technologies, including React, Next.js, TypeScript, and cloud platforms. I'm particularly passionate about creating performant, accessible, and user-friendly applications that solve real-world problems.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                When I'm not coding, I'm constantly exploring new technologies and contributing to the developer community. I believe in continuous learning and sharing knowledge to help others grow in their technical journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[3/4] max-w-md mx-auto"
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
            <div className="absolute -inset-4 -z-10 bg-black dark:bg-white rounded-2xl opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 