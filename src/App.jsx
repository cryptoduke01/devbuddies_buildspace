import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'
import Footer from "./components/Footer"
import LeadershipSection from "./components/LeadershipSection"
import EventsSection from "./components/EventsSection"
import StoriesSection from "./components/TestimonySection"
import AnnouncementBar from "./components/AnnouncementBar"
import Resources from './pages/Resources'
import { Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Analytics />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <LeadershipSection />
              <EventsSection />
              <StoriesSection />
            </>
          } />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<div className="pt-24 px-6">page not found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App