import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Téléphone', value: '+226 25 41 49 80', href: 'tel:+22625414980' },
  { icon: Mail, label: 'Email', value: 'r.bationo@amp-bf.com', href: 'mailto:r.bationo@amp-bf.com' },
  { icon: MapPin, label: 'Adresse', value: 'Secteur 34, Zagtouli — Ouagadougou', href: null },
  { icon: Clock, label: 'Horaires', value: 'Lun–Ven : 08h–18h', href: null },
]

const serviceOptions = [
  'Béton prêt à l\'emploi', 'Construction de route', 'Construction de pont',
  'Construction de barrage', 'Terrassement', 'Pierre concassée / Gravier', 'Autre',
]

const inputClass = "w-full bg-white border border-orange-100 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 rounded-lg px-4 py-3 text-navy-900 text-sm placeholder-gray-300 outline-none transition-all"

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', type: 'béton', message: '',
  })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Bonjour AMP Holding 👋\n\n` +
      `*NOUVELLE DEMANDE DE DEVIS*\n\n` +
      `👤 Nom: ${form.name}\n` +
      `🏢 Entreprise: ${form.company || 'Non renseigné'}\n` +
      `📧 Email: ${form.email}\n` +
      `📞 Téléphone: ${form.phone || 'Non renseigné'}\n` +
      `🔧 Service: ${form.service || 'Non renseigné'}\n` +
      `📋 Domaine: ${form.type.charAt(0).toUpperCase() + form.type.slice(1)}\n\n` +
      `💬 Message:\n${form.message || 'Aucun message'}`
    )
    window.open(`https://wa.me/22625414980?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-orange-50 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Parlons de votre projet</p>
          <h2 className="section-title text-navy-900 mb-4">
            Contactez <span className="gold-gradient">Nous</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
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
                  className="bg-white border border-orange-100 rounded-xl p-5 flex items-start gap-4 group hover:border-gold-400/50 hover:shadow-md transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                    <Icon size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">{info.label}</p>
                    {info.href
                      ? <a href={info.href} className="text-navy-900 font-medium hover:text-gold-600 transition-colors">{info.value}</a>
                      : <p className="text-navy-900 font-medium">{info.value}</p>
                    }
                  </div>
                </motion.div>
              )
            })}

            {/* Map placeholder */}
            <div className="flex-1 min-h-40 rounded-xl overflow-hidden bg-white border border-orange-100 shadow-sm flex items-center justify-center text-gray-300 text-sm">
              <div className="text-center">
                <MapPin size={32} className="text-gold-400/50 mx-auto mb-2" />
                <p>Secteur 34, Zagtouli</p>
                <p>Ouagadougou, Burkina Faso</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 bg-white border border-orange-100 rounded-2xl p-8 shadow-sm"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-3">Message envoyé !</h3>
                <p className="text-gray-500 max-w-xs">
                  Merci pour votre demande. Notre équipe vous contactera sous 24h ouvrées.
                </p>
                <button onClick={() => setSent(false)} className="mt-8 btn-outline py-2 text-sm">
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-navy-900 mb-6">Demande de devis</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-xs font-medium mb-1.5 block">Nom complet *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Votre nom" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs font-medium mb-1.5 block">Entreprise</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Nom de votre entreprise" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-xs font-medium mb-1.5 block">Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="votre@email.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs font-medium mb-1.5 block">Téléphone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+226 XX XX XX XX" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-xs font-medium mb-1.5 block">Service souhaité</label>
                    <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                      <option value="">Sélectionner...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs font-medium mb-1.5 block">Domaine</label>
                    <div className="flex gap-3 h-[46px] items-center">
                      {[{ v: 'béton', l: 'Béton' }, { v: 'btp', l: 'BTP' }, { v: 'carrières', l: 'Carrières' }].map(({ v, l }) => (
                        <label key={v} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="type" value={v}
                            checked={form.type === v} onChange={handleChange}
                            className="accent-gold-500" />
                          <span className="text-gray-600 text-sm">{l}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-xs font-medium mb-1.5 block">Message / Description du projet</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Décrivez votre projet, la durée souhaitée, le lieu d'intervention..."
                    className={`${inputClass} resize-none`} />
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
