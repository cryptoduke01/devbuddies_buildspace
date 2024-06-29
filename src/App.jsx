import Navbar from "./components/Navbar"
import Hero from './components/Hero'

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <footer className="p-6 text-right">
        <span className="text-sm mt-6">Scan Here</span>
        <div className="inline-block ml-2 w-10 h-10 bg-white"></div>
      </footer>
    </div>
  )
}

export default App