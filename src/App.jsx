import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import UpcomingEvents from './components/About'
import Footer from "./components/Footer"
import LeadershipSection from "./components/LeadershipSection"
import EventsSection from "./components/EventsSection"
import StoriesSection from "./components/StoriesSection"


const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <UpcomingEvents />
      <LeadershipSection />
      <EventsSection />
      <StoriesSection />
      <Footer />
    </div>
  )
}

export default App