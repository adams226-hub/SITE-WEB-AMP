import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Users, Truck, Globe, TrendingUp, HardHat, Mountain, Factory } from 'lucide-react'

const stats = [
  {
    icon: Trophy,
    value: 12, suffix: '+',
    label: "Années d'expérience",
    sub: 'En activité depuis 2014',
    gradient: 'from-gold-600/20 to-gold-500/5',
    border: 'border-gold-500/20',
    iconBg: 'bg-gold-500/15',
    iconColor: 'text-gold-400',
  },
  {
    icon: Truck,
    value: 400, suffix: '+',
    label: 'Équipements en flotte',
    sub: 'Entretenues & disponibles',
    gradient: 'from-blue-600/20 to-blue-500/5',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
  },
  {
    icon: Users,
    value: 400, suffix: '+',
    label: 'Employés',
    sub: 'Équipe qualifiée & experte',
    gradient: 'from-emerald-600/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Globe,
    value: 50, suffix: '+',
    label: 'Projets réalisés',
    sub: 'Routes, mines & ouvrages',
    gradient: 'from-purple-600/20 to-purple-500/5',
    border: 'border-purple-500/20',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
  },
]

const opsStats = [
  { icon: HardHat, value: 8, label: 'Projets actifs', sub: 'En cours de réalisation', color: 'text-gold-400', bg: 'bg-gold-500/10', border: 'border-gold-500/20' },
  { icon: Mountain, value: 2, label: 'Carrières propres', sub: 'Koro & Didri', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { icon: Factory, value: 1, label: 'Centrale à béton', sub: 'Ouaga & Orodara', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
]

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let v = 0
    const step = Math.ceil(target / 60)
    const t = setInterval(() => {
      v += step
      if (v >= target) { setCount(target); clearInterval(t) }
      else setCount(v)
    }, 25)
    return () => clearInterval(t)
  }, [inView, target])
  return <>{count}{suffix}</>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 bg-navy-950 relative" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <p className="section-label mb-2">Nos chiffres clés</p>
            <h2 className="font-display text-3xl font-bold text-white">
              AMP en <span className="gold-gradient">chiffres</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 glass-dark rounded-xl px-4 py-2 text-sm text-white/70">
            <TrendingUp size={15} className="text-gold-400" />
            Croissance continue depuis 2014
          </div>
        </motion.div>

        {/* Main stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl border ${stat.border} bg-gradient-to-br ${stat.gradient} p-6 overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                {/* Glow */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30 ${stat.iconBg}`} />

                <div className={`w-11 h-11 rounded-xl ${stat.iconBg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={stat.iconColor} />
                </div>

                <p className={`font-display text-4xl font-black mb-1 ${stat.iconColor}`}>
                  <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
                </p>
                <p className="text-white font-semibold text-sm">{stat.label}</p>
                <p className="text-white/65 text-xs mt-1">{stat.sub}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Operational stats row */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {opsStats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`flex items-center gap-4 rounded-xl border ${s.border} ${s.bg} px-5 py-4`}
              >
                <div className={`w-9 h-9 rounded-lg ${s.bg} border ${s.border} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} className={s.color} />
                </div>
                <div>
                  <p className={`font-display text-2xl font-black ${s.color}`}>
                    <Counter target={s.value} suffix="" inView={inView} />
                  </p>
                  <p className="text-white text-xs font-semibold">{s.label}</p>
                  <p className="text-white/50 text-xs">{s.sub}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
