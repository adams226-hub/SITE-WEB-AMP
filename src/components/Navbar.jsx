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
      { label: 'Location de machines', href: '#services' },
      { label: 'Vente de machines', href: '#services' },
      { label: 'Maintenance', href: '#services' },
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
      <div className="hidden lg:flex bg-navy-900 border-b border-white/5 text-sm text-white/60 py-2">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <span className="text-gold-500 font-medium">African Mining Partner – Leader en équipements miniers en Afrique de l'Ouest</span>
          <div className="flex items-center gap-6">
            <a href="tel:+22625000000" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone size={13} /> +226 25 00 00 00
            </a>
            <a href="mailto:contact@amp-bf.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Mail size={13} /> contact@amp-bf.com
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
            ? 'bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-lg flex items-center justify-center font-display font-black text-navy-900 text-xl shadow-lg shadow-gold-500/30">
              A
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-lg tracking-tight">AMP</span>
              <span className="text-gold-500 text-xs font-medium tracking-widest uppercase">Mining Partner</span>
            </div>
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
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {item.label}
                  {item.sub && <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180 duration-200" />}
                </a>

                {item.sub && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-56 glass rounded-xl overflow-hidden shadow-2xl shadow-black/50"
                  >
                    {item.sub.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-white/70 hover:text-gold-400 hover:bg-white/5 transition-all duration-150 border-b border-white/5 last:border-0"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold-500 opacity-60"></span>
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
            <a href="tel:+22625000000" className="btn-primary text-sm py-2 px-4">
              <Phone size={15} /> Appeler
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-xl pt-20 flex flex-col"
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
                    className="flex items-center justify-between py-4 px-4 text-lg font-medium text-white/80 hover:text-gold-400 border-b border-white/5 hover:bg-white/5 rounded-lg transition-all"
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
                          className="flex items-center gap-2 py-2 px-4 text-sm text-white/50 hover:text-gold-400 transition-colors"
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

            <div className="px-6 py-6 flex flex-col gap-3 border-t border-white/10">
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary justify-center py-4 text-base">
                Demander un devis
              </a>
              <a href="tel:+22625000000" onClick={() => setMobileOpen(false)} className="btn-outline justify-center py-4 text-base">
                <Phone size={18} /> +226 25 00 00 00
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
