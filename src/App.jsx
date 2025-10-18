import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { ReactLenis } from "lenis/react"
import { useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main className="min-h-[100vh]">
        <Navbar />
        <Hero />
        <Cocktails />
      </main>
    </ReactLenis>
  )
}

export default App
