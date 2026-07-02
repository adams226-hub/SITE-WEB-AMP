import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  { name: 'IAMGOLD Essakane', initials: 'IAG', color: '#C8922A' },
  { name: 'SEMAFO', initials: 'SMF', color: '#1E6DB5' },
  { name: 'Avocet Mining', initials: 'AVC', color: '#2E7D32' },
  { name: 'Amara Mining', initials: 'AMR', color: '#7B1FA2' },
  { name: 'Endeavour Mining', initials: 'EDV', color: '#C62828' },
  { name: 'Orezone Gold', initials: 'ORE', color: '#F57F17' },
  { name: 'Roxgold', initials: 'ROX', color: '#00695C' },
  { name: 'Balaji Mining', initials: 'BAL', color: '#1565C0' },
]

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 bg-navy-950 border-y border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-white/25 text-xs font-semibold uppercase tracking-[0.25em] mb-10"
        >
          Ils nous font confiance
        </motion.p>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 w-max"
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 glass rounded-xl px-6 py-3 hover:border-white/20 transition-all flex-shrink-0 group cursor-pointer"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: client.color + '30', border: `1px solid ${client.color}40` }}
                >
                  <span style={{ color: client.color }}>{client.initials[0]}</span>
                </div>
                <span className="text-white/40 group-hover:text-white/70 transition-colors text-sm font-medium whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
