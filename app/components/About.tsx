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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-sm lg:max-w-xs mx-auto"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl hover-card">
              <Image
                src="/images/headshot.jpg"
                alt="Matthew Spelman"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 384px, 320px"
              />
            </div>
            <div className="absolute -inset-4 -z-10 bg-black dark:bg-white rounded-2xl opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 