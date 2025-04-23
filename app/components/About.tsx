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
        <div className="flex items-center justify-center py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-[3/4] max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg hover-card">
              <Image
                src="/images/headshot.jpg"
                alt="Matthew Spelman"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, 448px"
              />
            </div>
            <div className="absolute -inset-2 -z-10 bg-black dark:bg-white rounded-lg opacity-10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 