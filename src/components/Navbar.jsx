import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Shield, Mail, Lock } from 'lucide-react'
import { usePopup } from './PopupContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const { openPopup } = usePopup()

  useEffect(() => {
    document.body.style.overflow = isLoginOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isLoginOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    {
      name: 'Trading',
      items: [
        { name: 'Forex', path: '/trading/forex' },
        { name: 'Commodities', path: '/trading/commodities' },
        { name: 'Indices', path: '/trading/indices' },
        { name: 'Crypto', path: '/trading/crypto' },
      ]
    },
    {
      name: 'Platforms',
      items: [
        { name: 'MT4', path: '/platforms/mt4' },
        { name: 'MT5', path: '/platforms/mt5' },
        { name: 'Web Platform', path: '/platforms/web' },
      ]
    },
    {
      name: 'Accounts',
      items: [
        { name: 'Standard', path: '/accounts/standard' },
        { name: 'Pro', path: '/accounts/pro' },
        { name: 'Demo', path: '/accounts/demo' },
      ]
    },
    {
      name: 'Company',
      items: [
        { name: 'About Us', path: '/company/about' },
        { name: 'Why TrustEdgeFX', path: '/company/why-trustedge' },
        { name: 'Contact', path: '/company/contact' },
      ]
    },
    {
      name: 'Education',
      items: [
        { name: 'Blog', path: '/education/blog' },
        { name: 'Tutorials', path: '/education/tutorials' },
        { name: 'Market News', path: '/education/news' },
      ]
    },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-bg/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img src="/images/logo1.png" alt="TrustEdgeFX" className="h-10 w-auto group-hover:scale-110 transition-transform" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-text-secondary hover:text-white transition-colors py-2">
                  <span>{link.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <div className={`absolute top-full left-0 mt-2 w-48 glass-card p-2 transition-all duration-200 ${
                  activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {link.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-text-secondary hover:text-white transition-colors px-6 py-2"
            >
              Login
            </button>
            <button onClick={openPopup} className="btn-primary">
              Open Account
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden glass-card my-4 p-4 animate-fade-in">
            {navLinks.map((link) => (
              <div key={link.name} className="mb-4">
                <div className="text-white font-semibold mb-2">{link.name}</div>
                {link.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-white/10">
              <button
                className="btn-ghost w-full"
                onClick={() => { setIsMobileMenuOpen(false); setIsLoginOpen(true) }}
              >
                Login
              </button>
              <button className="btn-primary w-full text-center" onClick={() => { setIsMobileMenuOpen(false); openPopup() }}>
                Open Account
              </button>
            </div>
          </div>
        )}
      </div>

      {isLoginOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsLoginOpen(false)}
        >
          <div
            className="relative w-full max-w-md glass-card p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Welcome back</h2>
                <p className="text-text-secondary text-sm">Login to your TrustEdgeFX account</p>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => { e.preventDefault(); setIsLoginOpen(false) }}
            >
              <div>
                <label className="block text-sm text-text-secondary mb-2">Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-text-secondary absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-primary-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-text-secondary absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-primary-accent transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
                  <input type="checkbox" className="accent-primary-accent" />
                  Remember me
                </label>
                <a href="#" className="text-primary-accent hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn-primary w-full">
                Login
              </button>

              <p className="text-center text-sm text-text-secondary">
                Don't have an account?{' '}
                <Link
                  to="/accounts/demo"
                  onClick={() => setIsLoginOpen(false)}
                  className="text-primary-accent hover:text-white transition-colors font-semibold"
                >
                  Open Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
