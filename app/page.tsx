import AnimatedHeader from './components/AnimatedHeader'
import AnimatedHero from './components/AnimatedHero'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container py-4">
          <AnimatedHeader />
        </div>
      </header>

      <main className="flex-grow">
        <section className="min-h-screen flex items-center justify-center pt-16">
          <div className="container">
            <AnimatedHero />
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container py-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} matthewspelman.com. Made in NYC.
          </p>
        </div>
      </footer>
    </div>
  )
} 