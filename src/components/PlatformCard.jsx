import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PlatformCard = ({ name, description, features, cta, ctaLink, icon: Icon, featured = false }) => {
  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden cursor-pointer"
      style={{
        background: '#FFFFFF',
        border: '1.5px solid #E8ECFF',
        borderRadius: 20,
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: '0 20px 60px rgba(26, 86, 255, 0.18)',
        borderColor: '#1A56FF',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Top content */}
      <div className="p-6 flex-1">
        {/* Name */}
        <h3
          className="text-xl font-extrabold leading-tight mb-3"
          style={{ color: '#0A0E1A' }}
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className="mb-5 leading-relaxed"
          style={{ fontSize: '0.85rem', color: '#6B7280' }}
        >
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-3 mb-5">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2"
              style={{ fontSize: '0.9rem', color: '#4B5563' }}
            >
              <span className="text-[#1A56FF] mt-0.5 font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <Link
          to={ctaLink}
          className="inline-flex items-center gap-2 font-semibold transition-colors duration-300 hover:text-[#7B2FFF]"
          style={{ color: '#1A56FF' }}
        >
          {cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Bottom illustration area */}
      <div
        className="flex items-center justify-center transition-all duration-300 group-hover:brightness-110"
        style={{
          height: 120,
          background: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)',
          borderRadius: '0 0 18px 18px',
        }}
      >
        {Icon && (
          <Icon
            style={{
              width: 56,
              height: 56,
              color: '#1A56FF',
              filter: 'drop-shadow(0 4px 16px rgba(26,86,255,0.25))',
            }}
          />
        )}
      </div>
    </motion.div>
  )
}

export default PlatformCard
