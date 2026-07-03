import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Zap, HeartHandshake, ArrowRight } from 'lucide-react'

const values = [
  { icon: Shield, title: 'Expertise terrain', desc: 'Nos équipes réalisent elles-mêmes chaque chantier — routes, ponts, barrages — avec nos propres engins et opérateurs qualifiés.' },
  { icon: Zap, title: 'Intégration verticale', desc: "Nos carrières fournissent nos centrales à béton, qui alimentent nos chantiers BTP. Une chaîne maîtrisée de bout en bout." },
  { icon: HeartHandshake, title: 'Ancrage local', desc: 'Fondée au Burkina Faso en 2014, AMP crée de l\'emploi local et construit les infrastructures qui développent le pays.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="apropos" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-orange-100/80">
              <img
                src="/images/pont_excavateur.jpg"
                alt="Chantier AMP"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
            </div>

            {/* Floating card — top right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-5 -right-5 bg-white border border-orange-100 rounded-xl p-4 w-44 shadow-xl shadow-orange-100/50"
            >
              <p className="text-gold-500 font-display font-black text-3xl">12+</p>
              <p className="text-gray-400 text-xs mt-1 leading-tight">Années d'expertise — en activité depuis 2014</p>
            </motion.div>

            {/* Floating card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white border border-orange-100 rounded-xl p-4 w-52 shadow-xl shadow-orange-100/50"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-emerald-600 text-xs font-semibold">400+ équipements actifs</span>
              </div>
              <p className="text-gray-400 text-xs">Parc matériel propre sur nos chantiers</p>
            </motion.div>

            {/* Small image overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-10 right-4 w-36 h-36 rounded-xl overflow-hidden border-2 border-gold-400/40 shadow-lg"
            >
              <img src="/images/finisseur_bomag_2.jpg" alt="Équipement AMP" className="w-full h-full object-cover" />
            </motion.div>

            {/* Orange border accent */}
            <div className="absolute top-8 left-8 right-8 bottom-8 rounded-2xl border border-gold-400/20 pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="section-label mb-4">Qui sommes-nous</p>
            <h2 className="section-title text-navy-900 mb-6">
              Bâtisseur d'infrastructures <span className="gold-gradient">depuis 2014</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Fondée au Burkina Faso, <strong className="text-navy-900">AMP Holding</strong> est une entreprise de génie civil et d'exploitation de carrières. Nous construisons des routes, des ponts et des barrages avec nos propres équipes et nos propres engins.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Nos deux carrières (Koro et Didri) alimentent notre centrale à béton en agrégats de qualité. Ce béton sert à la fois à nos chantiers BTP et à la vente directe à nos clients. Une chaîne entièrement maîtrisée par AMP Holding, de l'extraction à la livraison.
            </p>

            <div className="space-y-5 mb-10">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                      <Icon size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">{v.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <a href="#contact" className="btn-primary">
              Nous contacter <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
