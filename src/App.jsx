import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'
import Footer from "./components/Footer"
import LeadershipSection from "./components/LeadershipSection"
import EventsSection from "./components/EventsSection"
import NFTSection from "./components/NFTSection"
import LoadingScreen from "./components/LoadingScreen"
import ScrollToTop from "./components/ScrollToTop"
import BackToTop from "./components/BackToTop"
import Resources from './pages/Resources'
import Testimonies from './pages/Testimonies'
import Regenverse from './pages/Regenverse'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`bg-black text-white min-h-screen flex flex-col ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <Analytics />
        <ScrollToTop />
        <BackToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <NFTSection />
                <LeadershipSection />
                <EventsSection />
              </>
            } />
            <Route path="/regenverse" element={<Regenverse />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App