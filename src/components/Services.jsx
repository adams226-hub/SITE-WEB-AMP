import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Factory, HardHat, Mountain, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Factory,
    title: 'Centrale à Béton',
    desc: "Production et vente de béton prêt à l'emploi. Nos centrales de Ouagadougou et Orodara alimentent vos chantiers avec un béton de qualité, fabriqué à partir des agrégats de nos propres carrières.",
    features: [
      'Béton prêt à l\'emploi sur commande',
      'Livraison directe sur vos chantiers',
      'Agrégats propres — carrières Koro & Didri',
      'Commandes rapides via WhatsApp',
    ],
    color: 'from-gold-500 to-gold-700',
    glow: 'shadow-gold-500/20',
    border: 'hover:border-gold-300',
    badge: 'Ouaga & Orodara',
    badgeColor: 'bg-gold-50 text-gold-700 border-gold-200',
  },
  {
    icon: HardHat,
    title: 'BTP — Génie Civil',
    desc: "Entrepreneur général, nous réalisons nous-mêmes vos projets de construction avec nos propres équipes qualifiées. Routes nationales, ponts, barrages et ouvrages d'art — nous prenons en charge vos chantiers de A à Z.",
    features: [
      'Construction de routes & voiries',
      'Ponts, dalots & ouvrages d\'art',
      'Barrages & aménagements hydrauliques',
      'Terrassement & travaux de fondation',
    ],
    color: 'from-blue-500 to-blue-700',
    glow: 'shadow-blue-500/20',
    border: 'hover:border-blue-200',
    badge: 'Entrepreneur général',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: Mountain,
    title: 'Mines & Carrières',
    desc: "Exploitation de nos deux carrières Koro et Didri. Nous produisons et vendons de la pierre concassée et du gravier de qualité, disponibles pour vos projets BTP ou en vente directe à tous.",
    features: [
      'Pierre concassée tous calibres',
      'Gravier & granulats de qualité',
      'Vente directe — particuliers & entreprises',
      'Utilisation interne pour nos projets',
    ],
    color: 'from-emerald-500 to-emerald-700',
    glow: 'shadow-emerald-500/20',
    border: 'hover:border-emerald-200',
    badge: 'Carrières Koro & Didri',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4 justify-center">Nos domaines d'activité</p>
          <h2 className="section-title text-navy-900 mb-6">
            Nos <span className="gold-gradient">Services</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Du béton à la route, de la carrière au pont — AMP Holding maîtrise l'ensemble de la chaîne de construction en Afrique de l'Ouest.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative bg-white border border-orange-100 rounded-2xl p-8 card-hover cursor-pointer shadow-sm hover:shadow-xl ${service.glow} ${service.border} transition-all duration-300`}
              >
                {/* Badge */}
                <span className={`inline-flex items-center text-xs font-semibold border px-3 py-1 rounded-full mb-6 ${service.badgeColor}`}>
                  {service.badge}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a href="#contact" className="flex items-center gap-2 text-gold-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  Nous contacter <ArrowRight size={16} />
                </a>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-2xl border border-gold-400/0 group-hover:border-gold-400/30 transition-all duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
