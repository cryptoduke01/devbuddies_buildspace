import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import UpcomingEvents from './components/UpcomingEvents'
import FeaturedMentors from "./components/FeaturedMentors"
import Footer from "./components/Footer"
import PartnerShowcase from "./components/PartnerShowcase"

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <UpcomingEvents />
      <FeaturedMentors />
      <PartnerShowcase />
    <Footer />
    </div>
  )
}

export default App