import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .55 }}>
      <div className="loader-brand">
        <img src="/assets/logo.png" alt="Aldhia Infratech" />
      </div>
      <div className="tower-loader" aria-label="Power transmission line loading animation">
        <svg viewBox="0 0 720 230" role="img" aria-hidden="true">
          <defs>
            <linearGradient id="liveLine" x1="0" x2="1">
              <stop offset="0" stopColor="#5FA602" />
              <stop offset=".5" stopColor="#C7F36A" />
              <stop offset="1" stopColor="#5FA602" />
            </linearGradient>
            <filter id="electricGlow">
              <feGaussianBlur stdDeviation="5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <g className="tower tower-left" fill="none" stroke="#DDEAF4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M85 205 L125 32 L165 205 M99 145 H151 M106 113 H144 M114 80 H136 M94 165 L156 165 M104 125 L146 125 M112 92 L138 92 M100 145 L150 80 M150 145 L100 80 M110 112 L140 145 M140 112 L110 145 M125 32 L125 8 M105 55 H145 M92 72 H158 M78 88 H172"/>
            <path d="M80 205 H170 M125 32 L92 88 M125 32 L158 88"/>
          </g>
          <g className="tower tower-right" fill="none" stroke="#DDEAF4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M555 205 L595 32 L635 205 M569 145 H621 M576 113 H614 M584 80 H606 M564 165 H626 M574 125 H616 M582 92 H608 M570 145 L620 80 M620 145 L570 80 M580 112 L610 145 M610 112 L580 145 M595 32 L595 8 M575 55 H615 M562 72 H628 M548 88 H642"/>
            <path d="M550 205 H640 M595 32 L562 88 M595 32 L628 88"/>
          </g>
          <path className="power-wire" d="M125 55 C245 88 475 88 595 55" fill="none" stroke="url(#liveLine)" strokeWidth="2.5"/>
          <path className="power-wire secondary" d="M125 72 C255 104 465 104 595 72" fill="none" stroke="#8CC63E" strokeWidth="1.2" opacity=".65"/>
          <circle className="pulse pulse-one" r="6" fill="#D7FF82" filter="url(#electricGlow)"/>
          <circle className="pulse pulse-two" r="4" fill="#8CC63E" filter="url(#electricGlow)"/>
          <circle className="pulse pulse-three" r="3" fill="#FFFFFF" filter="url(#electricGlow)"/>
        </svg>
      </div>
      <p className="loader-title">POWERING CONNECTIONS</p>
      <p className="loader-caption">ALDHIA INFRATECH · ENGINEERING EXCELLENCE IN POWER TRANSMISSION</p>
      <div className="loader-track"><span /></div>
    </motion.div>
  )
}
