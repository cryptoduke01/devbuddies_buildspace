import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import UpcomingEvents from './components/About'
import PartnerShowcase from "./components/PartnerShowcase"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import FAQ from "./components/FAQ"
import GallerySection from "./components/GallerySection"
import LeadershipSection from "./components/LeadershipSection"


const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <UpcomingEvents />
      <LeadershipSection />
      <Testimonials />
      <FAQ />
      <PartnerShowcase />
      <GallerySection />
    <Footer />
    </div>
  )
}

export default App