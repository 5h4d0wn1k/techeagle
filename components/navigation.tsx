"use client"

import * as React from "react"
import { Menu, PlaneTakeoff } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all ${
      isScrolled ? "shadow-md" : ""
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <PlaneTakeoff className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">TechEagle</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-4">
            <Button variant="ghost">Solutions</Button>
            <Button variant="ghost">Research</Button>
            <Button variant="ghost">Innovation</Button>
            <Button variant="ghost">Global</Button>
            <Button variant="ghost">Partners</Button>
            <Button variant="ghost">Contact</Button>
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
                <Button variant="ghost" className="justify-start">Solutions</Button>
                <Button variant="ghost" className="justify-start">Research</Button>
                <Button variant="ghost" className="justify-start">Innovation</Button>
                <Button variant="ghost" className="justify-start">Global</Button>
                <Button variant="ghost" className="justify-start">Partners</Button>
                <Button variant="ghost" className="justify-start">Contact</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}