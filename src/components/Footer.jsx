import { useState } from 'react'
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
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (!email) return
    const msg = encodeURIComponent(
      `Bonjour AMP 👋\n\n` +
      `*INSCRIPTION NEWSLETTER*\n\n` +
      `📧 Email: ${email}\n\n` +
      `Je souhaite recevoir vos actualités et informations sur les nouvelles machines.`
    )
    window.open(`https://wa.me/22625414980?text=${msg}`, '_blank')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-navy-950 border-t border-white/5 relative">
      {/* Gold line top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="bg-white rounded-xl p-2 inline-block">
                <img src="/images/logo-amp.png" alt="AMP Holding" className="h-12 w-auto object-contain" />
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Leader en BTP, centrale à béton et exploitation de carrières en Afrique de l'Ouest depuis plus de 15 ans.
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
                <a href="tel:+22625414980" className="text-white/40 hover:text-gold-400 text-sm transition-colors">+226 25 41 49 80</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                <a href="mailto:r.bationo@amp-bf.com" className="text-white/40 hover:text-gold-400 text-sm transition-colors">r.bationo@amp-bf.com</a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white/40 text-xs mb-3">Restez informé de nos nouvelles machines</p>
              {subscribed ? (
                <p className="text-gold-400 text-xs font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                  Merci ! Vous serez informé sur WhatsApp.
                </p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder-white/20 outline-none focus:border-gold-500/40 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gold-500 hover:bg-gold-400 text-white rounded-lg px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    S'inscrire
                  </button>
                </form>
              )}
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
