import { Link } from 'react-router-dom'
import { Shield, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    trading: [
      { name: 'Forex', path: '/trading/forex' },
      { name: 'Commodities', path: '/trading/commodities' },
      { name: 'Indices', path: '/trading/indices' },
      { name: 'Crypto', path: '/trading/crypto' },
    ],
    company: [
      { name: 'About Us', path: '/company/about' },
      { name: 'Why TrustEdgeFX', path: '/company/why-trustedge' },
      { name: 'Contact', path: '/company/contact' },
      { name: 'Careers', path: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms & Conditions', path: '#' },
      { name: 'Risk Disclosure', path: '#' },
      { name: 'Cookie Policy', path: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-[#070B15] border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">TrustEdgeFX</span>
            </Link>
            <p className="text-text-secondary mb-6">
              Trade with confidence. Trade with TrustEdgeFX.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-text-secondary" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Trading</h3>
            <ul className="space-y-2">
              {footerLinks.trading.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="text-text-secondary text-sm text-center">
            © 2025 TrustEdgeFX Ltd. All rights reserved. | Risk Warning: Trading involves significant risk of loss.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
