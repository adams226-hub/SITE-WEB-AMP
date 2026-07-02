import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 18 + 4
      if (p >= 100) {
        p = 100
        clearInterval(interval)
        setTimeout(onDone, 500)
      }
      setProgress(Math.min(p, 100))
    }, 80)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-navy-950 flex flex-col items-center justify-center"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Logo animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        className="relative mb-12"
      >
        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-4 rounded-full border border-dashed border-gold-500/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-8 rounded-full border border-dashed border-gold-500/10"
        />

        {/* Logo box */}
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-2xl shadow-gold-500/30">
          <span className="font-display font-black text-navy-900 text-4xl">A</span>
        </div>
      </motion.div>

      {/* Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-10"
      >
        <p className="font-display font-black text-3xl text-white tracking-tight">AMP</p>
        <p className="text-gold-500 text-xs font-medium tracking-[0.3em] uppercase mt-1">African Mining Partner</p>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-600 to-gold-300 rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>
      <p className="text-white/20 text-xs mt-3 tabular-nums">{Math.round(progress)}%</p>
    </motion.div>
  )
}
