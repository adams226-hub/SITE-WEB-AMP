import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Moussa Kaboré',
    role: 'Directeur des Opérations',
    company: 'SEMAFO Burkina Faso',
    quote: "AMP nous a fourni une flotte de tombereaux parfaitement adaptée à nos besoins. La disponibilité de leurs machines et la réactivité de leur équipe technique ont été déterminantes dans le succès de notre expansion.",
    rating: 5,
    avatar: 'MK',
    color: '#1E6DB5',
  },
  {
    name: 'Ibrahim Traoré',
    role: 'Chef de Projet BTP',
    company: 'Société Africaine de Construction',
    quote: "La qualité des équipements d'AMP et surtout le soutien de leur équipe sur le terrain font la différence. En 3 ans de partenariat, nous n'avons jamais eu d'arrêt imprévu sur nos chantiers.",
    rating: 5,
    avatar: 'IT',
    color: '#2E7D32',
  },
  {
    name: 'Fatou Diallo',
    role: 'Directrice des Achats',
    company: 'Orezone Gold Corporation',
    quote: "Nous avons choisi AMP pour la location de nos pelles hydrauliques et nous n'avons pas été déçus. Leurs prix sont compétitifs et leur service après-vente est exemplaire. Un vrai partenaire stratégique.",
    rating: 5,
    avatar: 'FD',
    color: '#C8922A',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? 'text-gold-400' : 'text-white/10'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Ce que disent nos clients</p>
          <h2 className="section-title">
            Ils nous <span className="gold-gradient">font confiance</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {testimonials.map((t, i) =>
              i === current ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-2xl p-8 md:p-12 relative"
                >
                  {/* Quote icon */}
                  <div className="absolute top-8 right-8 text-gold-500/10">
                    <Quote size={80} fill="currentColor" />
                  </div>

                  {/* Stars */}
                  <StarRating count={t.rating} />

                  {/* Quote text */}
                  <p className="text-white/70 text-lg md:text-xl leading-relaxed my-8 italic relative z-10">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                      style={{ backgroundColor: t.color + '30', border: `2px solid ${t.color}50` }}
                    >
                      <span style={{ color: t.color }}>{t.avatar}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{t.name}</p>
                      <p className="text-white/40 text-sm">{t.role} — <span className="text-gold-500/70">{t.company}</span></p>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 glass rounded-full flex items-center justify-center hover:border-gold-500/40 transition-all">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-gold-400 w-8' : 'bg-white/20 w-4 hover:bg-white/40'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 glass rounded-full flex items-center justify-center hover:border-gold-500/40 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
