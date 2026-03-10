import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import Token from './components/Token'
import About from './components/About'
import Community from './components/Community'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Token />
      <About />
      <Community />
      <Footer />
    </div>
  )
}

export default App
