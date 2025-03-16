'use client'

import { motion } from 'framer-motion'

export default function AnimatedHeader() {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-bold tracking-tight"
    >
      Matthew Spelman
    </motion.h1>
  )
} 