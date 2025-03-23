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
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-black dark:text-white">
                About
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200">
                Matthew Spelman
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a software engineer based in New York City, specializing in building exceptional digital experiences. With a strong foundation in full-stack development and a passion for creating innovative solutions, I focus on developing scalable applications that make a difference.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                I am knowledgeable in modern AI technologies and techniques, which includes Large Language Models (LLMs) and various AI-driven developer technologies. My expertise in AI allows me to create cutting-edge solutions that leverage the latest advancements in artificial intelligence.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                With extensive experience in Technology Product, Program, and Project Management, I bring a comprehensive approach to delivering successful digital solutions. My background enables me to bridge the gap between technical implementation and business objectives, ensuring projects are delivered on time, within scope, and with exceptional quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-[700px]"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg hover-card">
              <Image
                src="/images/headshot.jpg"
                alt="Matthew Spelman"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-2 -z-10 bg-black dark:bg-white rounded-lg opacity-10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 