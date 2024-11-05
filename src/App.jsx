import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import UpcomingEvents from './components/About'
import FeaturedMentors from "./components/FeaturedMentors"
import PartnerShowcase from "./components/PartnerShowcase"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import FAQ from "./components/FAQ"
import GallerySection from "./components/GallerySection"


const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <UpcomingEvents />
      <FeaturedMentors />
      <Testimonials />
      <FAQ />
      <PartnerShowcase />
      <GallerySection />
    <Footer />
    </div>
  )
}

export default App