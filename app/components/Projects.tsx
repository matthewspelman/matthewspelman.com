'use client'

import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  status: 'coming-soon' | 'completed'
  technologies?: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Coming Soon',
    description: 'New projects are in the works. Stay tuned for updates!',
    status: 'coming-soon',
  },
  // Add more projects here as they become available
]

export default function Projects() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one represents a unique challenge and learning experience.
        </p>
      </motion.div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover-card"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black dark:text-white">{project.title}</h3>
              {project.status === 'coming-soon' && (
                <span className="px-3 py-1 text-sm font-medium text-black dark:text-white bg-gray-100 dark:bg-gray-700 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {project.technologies && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm font-medium text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {project.link && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black dark:text-white hover:underline"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
} 