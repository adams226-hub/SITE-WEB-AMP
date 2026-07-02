import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Téléphone', value: '+226 25 00 00 00', href: 'tel:+22625000000' },
  { icon: Mail, label: 'Email', value: 'contact@amp-bf.com', href: 'mailto:contact@amp-bf.com' },
  { icon: MapPin, label: 'Adresse', value: 'Ouagadougou, Burkina Faso', href: null },
  { icon: Clock, label: 'Horaires', value: 'Lun–Ven : 08h–18h', href: null },
]

const equipmentOptions = [
  'Bulldozer', 'Pelle hydraulique', 'Tombereau', 'Compacteur',
  'Niveleuse', 'Chargeur sur pneus', 'Grue mobile', 'Autre',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', equipment: '', type: 'location', message: '',
  })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-navy-900 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold-500/30" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Parlons de votre projet</p>
          <h2 className="section-title mb-4">
            Contactez <span className="gold-gradient">Nous</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Décrivez votre projet et nous vous proposerons la solution la plus adaptée à vos besoins et à votre budget.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="glass rounded-xl p-5 flex items-start gap-4 group hover:border-gold-500/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{info.label}</p>
                    {info.href
                      ? <a href={info.href} className="text-white font-medium hover:text-gold-400 transition-colors">{info.value}</a>
                      : <p className="text-white font-medium">{info.value}</p>
                    }
                  </div>
                </motion.div>
              )
            })}

            {/* Map placeholder */}
            <div className="flex-1 min-h-40 rounded-xl overflow-hidden glass flex items-center justify-center text-white/20 text-sm">
              <div className="text-center">
                <MapPin size={32} className="text-gold-500/30 mx-auto mb-2" />
                <p>Ouagadougou, Burkina Faso</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 glass rounded-2xl p-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">Message envoyé !</h3>
                <p className="text-white/50 max-w-xs">
                  Merci pour votre demande. Notre équipe vous contactera sous 24h ouvrées.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 btn-outline py-2 text-sm"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-white mb-6">Demande de devis</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Nom complet *</label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full bg-navy-950/60 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Entreprise</label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                      className="w-full bg-navy-950/60 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Email *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full bg-navy-950/60 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Téléphone</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+226 XX XX XX XX"
                      className="w-full bg-navy-950/60 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Équipement souhaité</label>
                    <select
                      name="equipment" value={form.equipment} onChange={handleChange}
                      className="w-full bg-navy-950/60 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
                    >
                      <option value="">Sélectionner...</option>
                      {equipmentOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Type de demande</label>
                    <div className="flex gap-3 h-[46px] items-center">
                      {['location', 'vente', 'maintenance'].map((t) => (
                        <label key={t} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio" name="type" value={t}
                            checked={form.type === t} onChange={handleChange}
                            className="accent-gold-500"
                          />
                          <span className="text-white/60 text-sm capitalize">{t}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs font-medium mb-1.5 block">Message / Description du projet</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez votre projet, la durée de location souhaitée, le lieu d'intervention..."
                    className="w-full bg-navy-950/60 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                  <Send size={18} /> Envoyer la demande
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
