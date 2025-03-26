'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-5 dark:opacity-[0.02] w-full">
        <Image
          src="/images/bridge.jpg"
          alt="Brooklyn Bridge"
          fill
          priority
          className="object-cover w-full"
          sizes="100vw"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-32 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
                About
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Matthew Spelman
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                With deep expertise in quantitative finance, technology management, and full-stack software engineering, I bring a unique perspective to delivering innovative digital solutions. My background in quantitative hedge funds and advanced AI including Large Language Models enables me to bridge technical excellence with strategic business goals.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                By leveraging the latest advancements in AI and software engineering, combined with my experience in financial technology, I help businesses implement transformative solutions that are delivered efficiently, on scope, and with outstanding quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-[3/4] max-w-sm lg:max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg hover-card">
              <Image
                src="/images/headshot.jpg"
                alt="Matthew Spelman"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 384px, 448px"
              />
            </div>
            <div className="absolute -inset-2 -z-10 bg-black dark:bg-white rounded-lg opacity-10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 