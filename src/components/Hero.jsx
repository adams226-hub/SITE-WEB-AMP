import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const slides = [
  {
    image: '/images/route_rn8.jpg',
    label: 'Route Nationale N°8',
    title: 'Leader en Travaux',
    highlight: 'Routiers',
    sub: "en Afrique de l'Ouest",
    desc: "Pose d'enrobé bitumineux, compactage et réhabilitation de routes nationales. AMP réalise vos chantiers avec ses propres équipes et son parc matériel.",
    cta: 'Voir nos projets',
    ctaHref: '#projets',
    accent: '#E8B422',
  },
  {
    image: '/images/finisseur_bomag_1.jpg',
    label: 'Génie Civil',
    title: 'Solutions Clé',
    highlight: 'en Main',
    sub: 'pour vos chantiers',
    desc: "Finisseurs, compacteurs, tombereaux — nous déployons la bonne machine au bon endroit pour garantir la qualité d'exécution.",
    cta: 'Nos équipements',
    ctaHref: '#equipements',
    accent: '#60A5FA',
  },
  {
    image: '/images/pont_excavateur.jpg',
    label: 'Ouvrages d\'Art',
    title: 'Ponts &',
    highlight: 'Structures',
    sub: 'depuis plus de 15 ans',
    desc: "Construction d'ouvrages de génie civil, ponts et dalots. AMP met à disposition ses excavateurs et équipements de levage pour vos projets les plus complexes.",
    cta: 'À propos de nous',
    ctaHref: '#apropos',
    accent: '#34D399',
  },
]

const FloatingBadge = ({ children, className }) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    className={`glass rounded-xl p-4 shadow-2xl shadow-black/40 ${className}`}
  >
    {children}
  </motion.div>
)

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!isPlaying || hovered) return
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5500)
    return () => clearInterval(timer)
  }, [isPlaying, hovered])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <section
      id="accueil"
      className="relative h-screen min-h-[640px] max-h-[960px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slides background */}
      <AnimatePresence mode="wait">
        {slides.map((slide, i) =>
          i === current ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <img src={slide.image} alt="" className="w-full h-full object-cover" />
              {/* Layered overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/30" />
              {/* Vignette */}
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(2,8,23,0.6) 100%)' }} />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-center">

          {/* Left: Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                </span>
                <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.2em] border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 rounded-full">
                  {slides[current].label}
                </span>
              </motion.div>

              {/* Title */}
              <div className="overflow-hidden mb-2">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-display font-black text-5xl md:text-6xl xl:text-7xl text-white leading-[0.95]"
                >
                  {slides[current].title}
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-2">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.22, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block font-display font-black text-5xl md:text-6xl xl:text-7xl leading-[0.95] gold-gradient"
                >
                  {slides[current].highlight}
                </motion.span>
              </div>
              <div className="overflow-hidden mb-6">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.28, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block font-display text-2xl md:text-3xl text-white/40 font-semibold"
                >
                  {slides[current].sub}
                </motion.span>
              </div>

              {/* Desc */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/55 text-lg leading-relaxed max-w-lg mb-10"
              >
                {slides[current].desc}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a href={slides[current].ctaHref}
                  className="group relative btn-primary text-base px-8 py-4 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {slides[current].cta}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                </a>
                <a href="#contact" className="btn-outline text-base px-8 py-4">
                  Demander un devis
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Floating cards (desktop only) */}
          <div className="hidden lg:flex flex-col items-end gap-4 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={`cards-${current}`}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4 items-end"
              >
                <FloatingBadge className="w-52">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                      <span className="text-gold-400 font-bold text-lg">120</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Machines</p>
                      <p className="text-white/40 text-xs">En flotte active</p>
                    </div>
                  </div>
                </FloatingBadge>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="glass rounded-xl p-4 shadow-2xl shadow-black/40 w-60"
                >
                  <p className="text-white/40 text-xs mb-2">Disponibilité flotte</p>
                  <div className="flex gap-1.5 mb-2">
                    {[90, 75, 88, 95, 70, 85].map((v, i) => (
                      <div key={i} className="flex-1 bg-white/5 rounded-sm overflow-hidden h-8">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${v}%` }}
                          transition={{ delay: 0.4 + i * 0.05, duration: 0.8 }}
                          className="bg-gradient-to-t from-gold-600 to-gold-400 rounded-sm self-end"
                          style={{ marginTop: 'auto' }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-emerald-400 text-xs font-semibold">↑ 94% ce mois</p>
                </motion.div>

                <FloatingBadge className="w-44" style={{}}>
                  <div className="text-center">
                    <p className="text-gold-400 font-display font-black text-2xl">15+</p>
                    <p className="text-white/50 text-xs">Années d'expertise</p>
                  </div>
                </FloatingBadge>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide indicators — bottom center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        <button onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-gold-500/40 transition-all">
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'bg-gold-400 w-10' : 'bg-white/20 w-4 hover:bg-white/40'}`}
            />
          ))}
        </div>

        <button onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-gold-500/40 transition-all">
          <ChevronRight size={18} />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-gold-500/40 transition-all ml-2"
        >
          {isPlaying
            ? <Pause size={14} className="text-white/60" />
            : <Play size={14} className="text-white/60 ml-0.5" />}
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`text-xs font-mono transition-all duration-300 ${i === current ? 'text-gold-400 font-bold' : 'text-white/20 hover:text-white/40'}`}
          >
            0{i + 1}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:flex flex-col items-center gap-3">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-gold-500/60 to-transparent"
        />
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase rotate-90 translate-y-6">Scroll</span>
      </div>
    </section>
  )
}
