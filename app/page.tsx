import AnimatedHeader from './components/AnimatedHeader'
import AnimatedHero from './components/AnimatedHero'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <AnimatedHeader />
        </div>
      </header>

      <main>
        <section className="min-h-screen flex items-center justify-center pt-16">
          <div className="container mx-auto px-4">
            <AnimatedHero />
          </div>
        </section>

        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <Contact />
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