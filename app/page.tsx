import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import Projects from '@/components/Projects'
import Expertise from '@/components/Expertise'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}

