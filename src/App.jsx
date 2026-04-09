import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PopupProvider } from './components/PopupContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Forex from './pages/Forex'
import Commodities from './pages/Commodities'
import Indices from './pages/Indices'
import Crypto from './pages/Crypto'
import MT4 from './pages/MT4'
import MT5 from './pages/MT5'
import WebPlatform from './pages/WebPlatform'
import StandardAccount from './pages/StandardAccount'
import ProAccount from './pages/ProAccount'
import DemoAccount from './pages/DemoAccount'
import AboutUs from './pages/AboutUs'
import WhyTrustEdgeFX from './pages/WhyTrustEdgeFX'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Tutorials from './pages/Tutorials'
import MarketNews from './pages/MarketNews'

function App() {
  return (
    <Router>
      <PopupProvider>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trading/forex" element={<Forex />} />
          <Route path="/trading/commodities" element={<Commodities />} />
          <Route path="/trading/indices" element={<Indices />} />
          <Route path="/trading/crypto" element={<Crypto />} />
          <Route path="/platforms/mt4" element={<MT4 />} />
          <Route path="/platforms/mt5" element={<MT5 />} />
          <Route path="/platforms/web" element={<WebPlatform />} />
          <Route path="/accounts/standard" element={<StandardAccount />} />
          <Route path="/accounts/pro" element={<ProAccount />} />
          <Route path="/accounts/demo" element={<DemoAccount />} />
          <Route path="/company/about" element={<AboutUs />} />
          <Route path="/company/why-trustedge" element={<WhyTrustEdgeFX />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/education/blog" element={<Blog />} />
          <Route path="/education/tutorials" element={<Tutorials />} />
          <Route path="/education/news" element={<MarketNews />} />
        </Routes>
        <Footer />
      </div>
      </PopupProvider>
    </Router>
  )
}

export default App
