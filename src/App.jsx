import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Disciplines from './components/Disciplines.jsx'
import Schedule from './components/Schedule.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="overflow-hidden py-10">
          <Marquee />
        </div>
        <Disciplines />
        <Schedule />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
