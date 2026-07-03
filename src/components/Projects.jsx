import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, HardHat, Factory } from 'lucide-react'

const CATS = ['Tous', 'Routes', 'Ponts & Ouvrages', 'Mines', 'Centrale à Béton']

const projects = [
  {
    title: 'Route Nationale N°8',
    location: 'Burkina Faso',
    type: 'Routes',
    badge: 'En cours',
    badgeColor: 'emerald',
    image: '/images/route_rn8.jpg',
    fallback: '/images/compacteur_route.jpg',
    desc: "Réhabilitation et revêtement bitumineux de la RN8. Finisseurs BOMAG et compacteurs à pneus pour la pose d'enrobé sur plusieurs dizaines de kilomètres.",
    client: 'État du Burkina Faso',
    resp: 'TCHADOUWA Mohamed Ayouba',
    featured: true,
  },
  {
    title: 'Aéroport de Bobo Dioulasso',
    location: 'Bobo Dioulasso',
    type: 'Routes',
    badge: 'En cours',
    badgeColor: 'emerald',
    image: '/images/compacteur_pneumatique.jpg',
    fallback: '/images/compacteur_route.jpg',
    desc: "Aménagement et revêtement des pistes et voies d'accès de l'aéroport international de Bobo Dioulasso.",
    client: 'Autorité Aéroportuaire',
    resp: 'Mr BA',
  },
  {
    title: 'Ouvrage d\'Art BIELMERA',
    location: 'Burkina Faso',
    type: 'Ponts & Ouvrages',
    badge: 'En cours',
    badgeColor: 'emerald',
    image: '/images/pont_excavateur.jpg',
    fallback: '/images/pont_structure.jpg',
    desc: "Construction d'ouvrages de génie civil. Excavateurs et équipements de levage pour les structures en béton armé.",
    client: 'BIELMERA',
    resp: 'Arouna KABORE',
  },
  {
    title: 'Faso Mebo Stade',
    location: 'Burkina Faso',
    type: 'Ponts & Ouvrages',
    badge: 'En cours',
    badgeColor: 'emerald',
    image: '/images/pont_structure.jpg',
    fallback: '/images/pont_excavateur.jpg',
    desc: "Infrastructure sportive. Équipements de génie civil pour fondations et ouvrages en béton armé.",
    client: 'Faso Mebo',
    resp: 'SAMA MICHEL',
  },
  {
    title: 'Projet BUMIGEB',
    location: 'Burkina Faso',
    type: 'Mines',
    badge: 'En cours',
    badgeColor: 'emerald',
    image: '/images/finisseur_bomag_2.jpg',
    fallback: '/images/compacteur_route.jpg',
    desc: "Appui au Bureau des Mines et Géologie du Burkina Faso. Matériel d'extraction et d'exploration pour les travaux miniers.",
    client: 'BUMIGEB',
    resp: 'Mme LOMPO DELPHINE',
  },
  {
    title: 'Projet SONABY',
    location: 'Burkina Faso',
    type: 'Mines',
    badge: 'En cours',
    badgeColor: 'emerald',
    image: '/images/finisseur_bomag_1.jpg',
    fallback: '/images/finisseur_autoroute.jpg',
    desc: "Fourniture d'équipements lourds et support logistique complet pour les opérations de la SONABY.",
    client: 'SONABY',
    resp: 'SAWADOGO RAZACK',
  },
  {
    title: 'Centrale à Béton — Ouaga & Orodara',
    location: 'Ouagadougou / Orodara',
    type: 'Centrale à Béton',
    badge: 'Permanent',
    badgeColor: 'gold',
    image: '/images/compacteur_route.jpg',
    fallback: '/images/finisseur_bomag_2.jpg',
    desc: "Production de béton prêt à l'emploi. Carrières Koro et Didri pour les agrégats. Livraison sur tous les chantiers du groupe.",
    client: 'Multi-projets AMP Holding',
    resp: 'LANDRY SAWADOGO',
  },
  {
    title: 'Projet LEBDA',
    location: 'Burkina Faso',
    type: 'Routes',
    badge: 'En cours',
    badgeColor: 'emerald',
    image: '/images/finisseur_autoroute.jpg',
    fallback: '/images/finisseur_bomag_1.jpg',
    desc: "Revêtement routier avec finisseurs et compacteurs BOMAG. Mise en oeuvre d'enrobé bitumineux.",
    client: 'LEBDA',
    resp: 'THOMAS YAMEOGO',
  },
]

const badgeClass = {
  emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  gold: 'bg-gold-500/15 text-gold-400 border-gold-500/30',
}

function ProjectCard({ project, index, inView, large }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className={`group relative rounded-2xl overflow-hidden cursor-default ${large ? 'md:col-span-2' : ''}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${large ? 'h-80' : 'h-56'}`}>
        <img
          src={imgError ? project.fallback : project.image}
          alt={project.title}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Badge + type row */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${badgeClass[project.badgeColor]}`}>
            {project.badge}
          </span>
          <span className="text-[11px] text-white/40 font-medium uppercase tracking-wide">{project.type}</span>
        </div>

        {/* Title */}
        <h3 className={`font-display font-bold text-white mb-1 group-hover:text-gold-400 transition-colors ${large ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {project.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-white/40 text-xs mb-3">
          <MapPin size={11} className="text-gold-500 flex-shrink-0" />
          {project.location}
        </div>

        {/* Description — revealed on hover */}
        <div className="overflow-hidden">
          <motion.div
            initial={false}
            className="translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0"
            style={{ transform: 'translateY(8px)' }}
          >
            <p className="text-white/55 text-sm leading-relaxed mb-3 line-clamp-2">{project.desc}</p>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1 text-white/35">
                <HardHat size={11} className="text-gold-500" />
                {project.resp}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-gold-500/0 group-hover:border-gold-500/25 transition-all duration-300 pointer-events-none" />
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [cat, setCat] = useState('Tous')

  const filtered = cat === 'Tous' ? projects : projects.filter(p => p.type === cat)

  return (
    <section id="projets" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="section-label mb-4">Références & Réalisations</p>
              <h2 className="section-title text-navy-900">
                Nos <span className="gold-gradient">Projets</span>
              </h2>
            </div>
            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { v: '8', l: 'Projets actifs' },
                { v: '3', l: 'Carrières propres' },
                { v: '2', l: 'Centrales à béton' },
              ].map(({ v, l }) => (
                <div key={l} className="bg-white border border-orange-100 rounded-xl px-4 py-2 text-center shadow-sm">
                  <p className="font-display font-black text-gold-400 text-xl leading-none">{v}</p>
                  <p className="text-gray-400 text-[11px] mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  cat === c
                    ? 'bg-gold-500 text-white shadow-md shadow-gold-500/20'
                    : 'bg-white border border-orange-100 text-gray-500 hover:text-gold-600 hover:border-orange-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                inView={inView}
                large={i === 0 && cat === 'Tous'}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a href="#contact" className="btn-outline">
            Discuter d'un projet <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
