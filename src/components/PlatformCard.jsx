import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PlatformCard = ({ name, description, features, cta, ctaLink, icon: Icon, light = false }) => {
  return (
    <div className={`p-8 rounded-2xl border hover:scale-[1.02] transition-all duration-300 border-t-4 border-t-primary-accent ${
      light
        ? 'bg-gray-50 border-gray-200 shadow-lg'
        : 'glass-card'
    }`}>
      <div className="flex items-center gap-4 mb-4">
        {Icon && (
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
        )}
        <h3 className={`text-2xl font-bold ${light ? 'text-primary-bg' : 'text-white'}`}>{name}</h3>
      </div>
      <p className={`mb-6 ${light ? 'text-gray-500' : 'text-text-secondary'}`}>{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-start gap-2 ${light ? 'text-gray-600' : 'text-text-secondary'}`}>
            <span className="text-primary-accent mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={ctaLink}
        className="inline-flex items-center gap-2 text-primary-accent hover:text-primary-purple transition-colors font-semibold"
      >
        {cta}
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  )
}

export default PlatformCard
