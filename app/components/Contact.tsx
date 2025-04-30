'use client'

import { motion } from 'framer-motion'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left space-y-8 w-full lg:w-1/2 lg:pr-6"
        >
          <div>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Send me a message on LinkedIn at my profile below and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-black dark:bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white dark:text-black mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/matthewspelman/"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white dark:bg-black/10 dark:hover:bg-black/20 dark:text-black"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/matthewspelman"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white dark:bg-black/10 dark:hover:bg-black/20 dark:text-black"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CodeBracketIcon className="w-6 h-6" />
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-[250px] h-[333px] sm:w-[300px] sm:h-[400px] mx-auto mt-8 lg:mt-0 lg:w-1/2 lg:pl-6 flex justify-center"
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/headshot.jpg"
              alt="Matthew Spelman"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, 400px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/2wBDAR0dHR4eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eHR0eLz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          <div className="absolute -inset-2 -z-10 bg-black dark:bg-white rounded-lg opacity-10 blur-xl" />
        </motion.div>
      </div>
    </div>
  )
} 