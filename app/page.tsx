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
        <div id="solutions">
          <Features />
        </div>
        <div id="vision">
          <Vision />
        </div>
        <Divisions />
        <div id="research">
          <Research />
        </div>
        <div id="innovation">
          <Innovation />
        </div>
        <div id="global">
          <GlobalPresence />
        </div>
        <div id="partners">
          <Partnerships />
        </div>
        <Timeline />
        <Contact />
      </main>
    </div>
  )
}