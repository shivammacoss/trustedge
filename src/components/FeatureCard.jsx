const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  )
}

export default FeatureCard
