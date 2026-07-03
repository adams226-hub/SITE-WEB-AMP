import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Tag, Clock } from 'lucide-react'

const categories = ['Tous', 'Terrassement', 'Transport', 'Compactage', 'Levage']

const equipment = [
  {
    id: 1,
    name: 'Bulldozer',
    category: 'Terrassement',
    image: '/images/bulldozer.png',
    desc: 'Puissant et polyvalent, idéal pour le défrichage, le nivellement et le déplacement de grandes masses de terre.',
    tags: ['Location', 'Vente'],
    models: 'D6, D7, D8, D9',
    available: true,
  },
  {
    id: 2,
    name: 'Pelle Hydraulique',
    category: 'Terrassement',
    image: '/images/pont_excavateur.jpg',
    desc: "Excavatrice haute performance pour extraction minière, terrassement et travaux de fondation en terrain difficile.",
    tags: ['Location', 'Vente'],
    models: '200, 300, 400 tonnes',
    available: true,
  },
  {
    id: 3,
    name: 'Tombereau',
    category: 'Transport',
    image: '/images/camion.png',
    desc: "Camion benne pour le transport de matériaux en grande capacité sur les chantiers miniers et de construction.",
    tags: ['Location', 'Vente'],
    models: '30T, 40T, 60T, 100T',
    available: true,
  },
  {
    id: 4,
    name: 'Compacteur',
    category: 'Compactage',
    image: '/images/compacteur_route.jpg',
    desc: "Compacteur à bille ou à pied de mouton pour le compactage de sol, routes et zones de remblai.",
    tags: ['Location'],
    models: 'CA, CS, CP Series',
    available: false,
  },
  {
    id: 5,
    name: 'Niveleuse',
    category: 'Terrassement',
    image: '/images/finisseur_autoroute.jpg',
    desc: "Machine de nivellement précis pour la création et l'entretien de routes, pistes minières et zones de stockage.",
    tags: ['Location', 'Vente'],
    models: '120, 140, 160 AWD',
    available: true,
  },
  {
    id: 6,
    name: 'Chargeur sur Pneus',
    category: 'Terrassement',
    image: '/images/chargeur.png',
    desc: "Chargeur frontal sur roues pour le chargement, le déplacement et le stockage de matériaux en vrac.",
    tags: ['Location', 'Vente'],
    models: '950, 966, 972, 980',
    available: true,
  },
  {
    id: 7,
    name: 'Grue Mobile',
    category: 'Levage',
    image: '/images/grue.png',
    desc: "Grue automotrice pour levage et manutention de charges lourdes sur les sites miniers et industriels.",
    tags: ['Location'],
    models: '50T, 100T, 200T',
    available: true,
  },
  {
    id: 8,
    name: 'Chargeuse-Pelleteuse',
    category: 'Terrassement',
    image: '/images/genie_civil.jpg',
    desc: "Machine polyvalente combinant chargeur frontal et benne rétro, parfaite pour les chantiers à contraintes d'espace.",
    tags: ['Location', 'Vente'],
    models: '410, 430, 444 Series',
    available: true,
  },
]

export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeCategory === 'Tous'
    ? equipment
    : equipment.filter((e) => e.category === activeCategory)

  return (
    <section id="equipements" className="py-24 bg-orange-50 relative overflow-hidden" ref={ref}>
      {/* Decoration */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="section-label mb-4">Notre flotte</p>
            <h2 className="section-title text-navy-900">
              Nos <span className="gold-gradient">Équipements</span>
            </h2>
          </div>
          <a href="#contact" className="btn-primary self-start md:self-auto">
            Demander un devis <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/25'
                  : 'bg-white border border-orange-100 text-gray-600 hover:text-gold-600 hover:border-orange-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((eq, i) => (
            <motion.div
              key={eq.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-white border border-orange-100 rounded-2xl overflow-hidden card-hover shadow-sm hover:shadow-md hover:shadow-orange-100"
            >
              {/* Image */}
              <div className="relative h-44 bg-navy-800 overflow-hidden">
                <img
                  src={eq.image}
                  alt={eq.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML += `<span class="text-white/20 text-4xl font-black">${eq.name[0]}</span>`
                  }}
                />
                {/* Availability badge */}
                <div className={`absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  eq.available
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${eq.available ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
                  {eq.available ? 'Disponible' : 'Sur commande'}
                </div>
                {/* Tags */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {eq.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-navy-900/80 backdrop-blur text-gold-400 border border-gold-500/20 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 font-medium">{eq.category}</span>
                  <span className="text-xs text-gray-300 flex items-center gap-1">
                    <Clock size={10} /> Livraison rapide
                  </span>
                </div>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-2 group-hover:text-gold-600 transition-colors">
                  {eq.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{eq.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gold-600 font-medium">Modèles: {eq.models}</span>
                  <a href="#contact" className="text-gold-500 hover:text-gold-600 transition-colors">
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
