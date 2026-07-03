import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  { name: 'IAMGOLD Essakane', initials: 'IAG', color: '#EA580C' },
  { name: 'SEMAFO', initials: 'SMF', color: '#1E6DB5' },
  { name: 'Avocet Mining', initials: 'AVC', color: '#2E7D32' },
  { name: 'Amara Mining', initials: 'AMR', color: '#7B1FA2' },
  { name: 'Endeavour Mining', initials: 'EDV', color: '#C62828' },
  { name: 'Orezone Gold', initials: 'ORE', color: '#EA580C' },
  { name: 'Roxgold', initials: 'ROX', color: '#00695C' },
  { name: 'Balaji Mining', initials: 'BAL', color: '#1565C0' },
]

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-14 bg-orange-50 border-y border-orange-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-400 text-xs font-semibold uppercase tracking-[0.25em] mb-10"
        >
          Ils nous font confiance
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-orange-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-orange-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6 w-max"
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-orange-100 rounded-xl px-6 py-3 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex-shrink-0 group cursor-pointer"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: client.color + '18', border: `1px solid ${client.color}30` }}
                >
                  <span style={{ color: client.color }}>{client.initials[0]}</span>
                </div>
                <span className="text-gray-500 group-hover:text-navy-900 transition-colors text-sm font-medium whitespace-nowrap">
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
