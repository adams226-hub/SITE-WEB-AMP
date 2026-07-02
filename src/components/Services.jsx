import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Truck, ShoppingCart, Wrench, Factory, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Location de Machines',
    desc: "Louez nos machines minières et de génie civil pour la durée de votre projet. Flotte entretenue, livraison sur site, assistance technique incluse.",
    features: [
      'Contrats à court et long terme',
      'Livraison et récupération sur site',
      'Maintenance préventive incluse',
      'Opérateurs qualifiés disponibles',
    ],
    color: 'from-blue-600 to-blue-800',
    badge: 'Flexible',
  },
  {
    icon: ShoppingCart,
    title: 'Vente de Machines',
    desc: "Achetez vos équipements neufs ou reconditionnés. Nous sélectionnons les meilleures marques mondiales pour garantir performance et fiabilité.",
    features: [
      'Machines neuves et reconditionnées',
      'Grandes marques mondiales',
      'Garantie fabricant',
      'Financement sur mesure',
    ],
    color: 'from-gold-600 to-gold-700',
    badge: 'Populaire',
  },
  {
    icon: Wrench,
    title: 'Maintenance & SAV',
    desc: "Notre équipe technique assure l'entretien, la réparation et la disponibilité maximale de vos machines pour éviter tout arrêt de production.",
    features: [
      "Contrats d'entretien préventif",
      "Interventions d'urgence 24h/7j",
      'Pièces de rechange en stock',
      "Techniciens certifiés constructeurs",
    ],
    color: 'from-emerald-600 to-emerald-800',
    badge: 'Réactif',
  },
  {
    icon: Factory,
    title: 'Centrale à Béton',
    desc: "Production et livraison de béton prêt à l'emploi. Nos carrières Koro et Didri fournissent des agrégats de qualité pour tous vos chantiers.",
    features: [
      'Béton prêt à emploi sur commande',
      'Carrières propres (Koro & Didri)',
      'Livraison rapide sur chantier',
      'Commandes via canal WhatsApp dédié',
    ],
    color: 'from-orange-600 to-orange-800',
    badge: 'Exclusif',
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
    <section id="services" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Ce que nous faisons</p>
          <h2 className="section-title mb-6">
            Nos <span className="gold-gradient">Services</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            AMP vous propose une gamme complète de services pour répondre à tous vos besoins en équipements miniers et de génie civil.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative glass rounded-2xl p-8 card-hover cursor-pointer"
              >
                {/* Badge */}
                <span className="absolute top-6 right-6 text-xs font-semibold bg-gold-500/15 text-gold-400 border border-gold-500/30 px-3 py-1 rounded-full">
                  {service.badge}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <CheckCircle2 size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-gold-400 text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  En savoir plus <ArrowRight size={16} />
                </a>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl border border-gold-500/0 group-hover:border-gold-500/30 transition-all duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
