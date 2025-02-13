import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Vision } from "@/components/vision"
import { Research } from "@/components/research"
import { Partnerships } from "@/components/partnerships"
import { Timeline } from "@/components/timeline"
import { Contact } from "@/components/contact"
import { Divisions } from "@/components/divisions"
import { Innovation } from "@/components/innovation"
import { GlobalPresence } from "@/components/global-presence"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Vision />
        <Divisions />
        <Research />
        <Innovation />
        <GlobalPresence />
        <Partnerships />
        <Timeline />
        <Contact />
      </main>
    </div>
  )
}