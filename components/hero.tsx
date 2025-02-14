"use client"

import { Button } from "@/components/ui/button"
import { Rocket, ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="relative">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 py-16 text-center sm:px-6 sm:py-24 md:py-32 lg:py-40">
          <Rocket className="h-12 w-12 sm:h-16 sm:w-16 animate-pulse text-primary" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Pioneering the Future of
            <span className="block sm:inline bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Aerospace & Space
            </span>
          </h1>
          <p className="max-w-[800px] text-base sm:text-lg text-muted-foreground lg:text-xl">
            From revolutionary drone technology to interplanetary exploration, we're building the next
            generation of aerospace solutions. Join us in shaping the future of flight, defense, and
            space travel.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500"
              onClick={() => scrollToSection('vision')}
            >
              Explore Our Vision
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              Partner With Us
              <Rocket className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
            <div className="rounded-lg bg-primary/10 p-4 sm:p-6 transition-all hover:bg-primary/20">
              <p className="text-2xl sm:text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Global Patents</p>
            </div>
            <div className="rounded-lg bg-primary/10 p-4 sm:p-6 transition-all hover:bg-primary/20">
              <p className="text-2xl sm:text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Research Partners</p>
            </div>
            <div className="rounded-lg bg-primary/10 p-4 sm:p-6 transition-all hover:bg-primary/20">
              <p className="text-2xl sm:text-3xl font-bold text-primary">25+</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}