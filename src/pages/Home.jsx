import { Link } from 'react-router-dom'
import { BarChart3, Monitor, Smartphone } from 'lucide-react'
import Button from '../components/Button'
import StatsSection from '../components/StatsSection'
import FeaturesSection from '../components/FeaturesSection'
import PlatformCard from '../components/PlatformCard'
import GradientBlinds from '../components/GradientBlinds'
import BlurText from '../components/BlurText'
import ScrollReveal, { ScrollRevealGroup, ScrollRevealItem } from '../components/animations/ScrollReveal'

const Home = () => {
  const platforms = [
    {
      name: 'MetaTrader 4 (MT4)',
      description: "Industry's most popular trading platform",
      features: [
        '30+ built-in indicators, Expert Advisors support',
        'Available on Windows, macOS, iOS, Android',
        'One-click trading and advanced charting'
      ],
      cta: 'Download MT4',
      ctaLink: '/platforms/mt4',
      icon: Monitor
    },
    {
      name: 'MetaTrader 5 (MT5)',
      description: 'Next-gen platform with enhanced tools',
      features: [
        'Multi-asset trading, depth of market view',
        'Advanced algorithmic trading capabilities',
        '38 technical indicators + 21 timeframes'
      ],
      cta: 'Download MT5',
      ctaLink: '/platforms/mt5',
      icon: BarChart3
    },
    {
      name: 'TrustEdgeFX Web Platform',
      description: 'No download needed — trade from any browser',
      features: [
        'Clean UI, real-time charts, one-click trading',
        'Seamlessly synced with your account',
        'Mobile-optimized for trading on the go'
      ],
      cta: 'Launch Web Platform',
      ctaLink: '/platforms/web',
      icon: Smartphone
    }
  ]

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <BlurText
            text="Your Edge in Every Market"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] justify-center"
          />
        </div>
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={0}
          noise={0.1}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* TRUST / STATS SECTION */}
      <StatsSection />

      {/* FEATURES SECTION */}
      <FeaturesSection />

      {/* PLATFORMS SECTION */}
      <section className="section-padding bg-primary-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <ScrollReveal variant="fadeUp">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Platforms. Built for Every Trader.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Choose your preferred platform — from industry-standard MetaTrader to our sleek Web Platform.
              </p>
            </ScrollReveal>
          </div>

          <ScrollRevealGroup className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            {platforms.map((platform, index) => (
              <ScrollRevealItem key={index}>
                <PlatformCard {...platform} featured={index === 1} />
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/20 to-primary-purple/20 blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Trading Journey?
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join over 500,000 traders and access global markets in minutes.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="scaleUp" delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/accounts/demo">
                <Button variant="primary" className="w-full sm:w-auto">
                  Open Account
                </Button>
              </Link>
              <Link to="/accounts/demo">
                <Button variant="ghost" className="w-full sm:w-auto">
                  Try Demo First
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Home
