import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  {
    label: 'Équipements',
    href: '#equipements',
    sub: [
      { label: 'Bulldozers', href: '#equipements' },
      { label: 'Pelles hydrauliques', href: '#equipements' },
      { label: 'Compacteurs', href: '#equipements' },
      { label: 'Niveleuses', href: '#equipements' },
      { label: 'Tombereaux', href: '#equipements' },
      { label: 'Chargeurs sur pneus', href: '#equipements' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    sub: [
      { label: 'Centrale à Béton', href: '#services' },
      { label: 'BTP — Génie Civil', href: '#services' },
      { label: 'Mines & Carrières', href: '#services' },
    ],
  },
  { label: 'À propos', href: '#apropos' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:flex bg-navy-900 text-sm text-white/60 py-2">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <span className="text-gold-400 font-medium">African Mining Partner – Leader en équipements miniers en Afrique de l'Ouest</span>
          <div className="flex items-center gap-6">
            <a href="tel:+22625414980" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone size={13} /> +226 25 41 49 80
            </a>
            <a href="mailto:r.bationo@amp-bf.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Mail size={13} /> r.bationo@amp-bf.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-orange-100/50 border-b border-orange-100'
            : 'bg-white border-b border-orange-50'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center">
            <img src="/images/logo-amp.png" alt="AMP Holding" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="relative group"
                onMouseEnter={() => item.sub && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy-800 hover:text-gold-600 rounded-lg hover:bg-orange-50 transition-all duration-200"
                >
                  {item.label}
                  {item.sub && <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180 duration-200" />}
                </a>

                {item.sub && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white border border-orange-100 rounded-xl overflow-hidden shadow-xl shadow-orange-100/50"
                  >
                    {item.sub.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 hover:text-gold-600 hover:bg-orange-50 transition-all duration-150 border-b border-orange-50 last:border-0"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                        {s.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="btn-outline text-sm py-2 px-4">
              Demander un devis
            </a>
            <a href="tel:+22625414980" className="btn-primary text-sm py-2 px-4">
              <Phone size={15} /> Appeler
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
          >
            {mobileOpen
              ? <X size={24} className="text-navy-900" />
              : <Menu size={24} className="text-navy-900" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-20 flex flex-col"
          >
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-4 px-4 text-lg font-medium text-navy-900 hover:text-gold-600 border-b border-orange-50 hover:bg-orange-50 rounded-lg transition-all"
                  >
                    {item.label}
                  </a>
                  {item.sub && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.sub.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 py-2 px-4 text-sm text-gray-500 hover:text-gold-600 transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="px-6 py-6 flex flex-col gap-3 border-t border-orange-100">
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary justify-center py-4 text-base">
                Demander un devis
              </a>
              <a href="tel:+22625414980" onClick={() => setMobileOpen(false)} className="btn-outline justify-center py-4 text-base">
                <Phone size={18} /> +226 25 41 49 80
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
