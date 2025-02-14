"use client"

import * as React from "react"
import { Menu, PlaneTakeoff } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }
    
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
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all ${
      isScrolled ? "shadow-md" : ""
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <PlaneTakeoff className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">TechEagle</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-4">
            <Link href="/solutions">
              <Button variant="ghost">Solutions</Button>
            </Link>
            <Button variant="ghost" onClick={() => scrollToSection('research')}>Research</Button>
            <Button variant="ghost" onClick={() => scrollToSection('innovation')}>Innovation</Button>
            <Button variant="ghost" onClick={() => scrollToSection('global')}>Global</Button>
            <Button variant="ghost" onClick={() => scrollToSection('partners')}>Partners</Button>
            <Link href="/careers">
              <Button variant="ghost">Careers</Button>
            </Link>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button>
          </nav>
          <ModeToggle />
        </div>
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/solutions">
                  <Button variant="ghost" className="w-full justify-start">Solutions</Button>
                </Link>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('research')}>Research</Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('innovation')}>Innovation</Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('global')}>Global</Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('partners')}>Partners</Button>
                <Link href="/careers">
                  <Button variant="ghost" className="w-full justify-start">Careers</Button>
                </Link>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('contact')}>Contact</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}