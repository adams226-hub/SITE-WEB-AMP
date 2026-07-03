import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import Equipment from './components/Equipment'
import Stats from './components/Stats'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-white overflow-x-hidden">
          <ScrollProgress />
          <Navbar />
          <Hero />
          <Clients />
          <Services />
          <Equipment />
          <Stats />
          <About />
          <Testimonials />
          <Projects />
          <Contact />
          <Footer />
          <WhatsApp />
        </div>
      )}
    </>
  )
}
