'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedHero() {
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
      <div className="relative w-full aspect-video mb-12">
        <Image
          src="/img/pexels-photo-220824.jpeg"
          alt="Scenic View"
          fill
          className="rounded-lg shadow-2xl object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
    </motion.div>
  )
} 