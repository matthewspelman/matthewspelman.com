import { motion } from 'framer-motion'
import { EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold tracking-tight"
          >
            Matthew Spelman
          </motion.h1>
        </div>
      </header>

      <main>
        <section className="min-h-screen flex items-center justify-center pt-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-5xl md:text-7xl font-bold hero-gradient mb-8">
                I want to build things.
              </h2>
              <Image
                src="/img/pexels-photo-220824.jpeg"
                alt="Scenic View"
                width={1200}
                height={600}
                className="rounded-lg shadow-2xl mb-12"
                priority
              />
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="mb-8">
                <Image
                  src="/img/headshot.jpg"
                  alt="Matthew Spelman's Headshot"
                  width={400}
                  height={240}
                  className="rounded-full mx-auto shadow-xl"
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
                >
                  <CodeBracketIcon className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} matthewspelman.com. Made in NYC.
          </p>
        </div>
      </footer>
    </div>
  )
} 