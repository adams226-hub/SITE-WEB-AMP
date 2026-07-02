import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const quickLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Équipements', href: '#equipements' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
]

const equipment = [
  'Bulldozers', 'Pelles hydrauliques', 'Tombereaux',
  'Compacteurs', 'Niveleuses', 'Chargeurs sur pneus', 'Grues mobiles',
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 relative">
      {/* Gold line top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-lg flex items-center justify-center font-display font-black text-navy-900 text-xl shadow-lg shadow-gold-500/30">
                A
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg">AMP</span>
                <span className="text-gold-500 text-xs font-medium tracking-widest uppercase">Mining Partner</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Leader en location et vente d'équipements miniers et de génie civil en Afrique de l'Ouest depuis plus de 15 ans.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Équipements</h4>
            <ul className="space-y-3">
              {equipment.map((eq) => (
                <li key={eq}>
                  <a
                    href="#equipements"
                    className="text-white/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-colors"></span>
                    {eq}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">Ouagadougou, Burkina Faso</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                <a href="tel:+22625000000" className="text-white/40 hover:text-gold-400 text-sm transition-colors">+226 25 00 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                <a href="mailto:contact@amp-bf.com" className="text-white/40 hover:text-gold-400 text-sm transition-colors">contact@amp-bf.com</a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white/40 text-xs mb-3">Restez informé de nos nouvelles machines</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder-white/20 outline-none focus:border-gold-500/40 transition-colors"
                />
                <button className="bg-gold-500 hover:bg-gold-400 text-navy-900 rounded-lg px-3 py-2 text-xs font-semibold transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2024 AMP – African Mining Partner. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">Mentions légales</a>
            <a href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <a
        href="#accueil"
        className="fixed bottom-8 right-8 w-11 h-11 bg-gold-500 hover:bg-gold-400 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/30 transition-all hover:-translate-y-1 z-30"
      >
        <ArrowUp size={18} className="text-navy-900" />
      </a>
    </footer>
  )
}
