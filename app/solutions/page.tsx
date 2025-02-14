"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bone as Drone, Plane, Shield, Rocket } from "lucide-react"

const solutions = {
  drones: {
    title: "Advanced Drone Systems",
    description: "Revolutionary drone solutions for various industries",
    features: [
      {
        title: "Autonomous Delivery",
        description: "AI-powered delivery drones for e-commerce and logistics",
        specs: ["5kg payload capacity", "30km range", "Autonomous navigation"]
      },
      {
        title: "Emergency Response",
        description: "Rapid deployment drones for disaster management",
        specs: ["4K thermal imaging", "All-weather operation", "Medical payload delivery"]
      },
      {
        title: "Industrial Inspection",
        description: "Specialized drones for infrastructure monitoring",
        specs: ["High-res cameras", "LiDAR scanning", "Real-time analysis"]
      }
    ]
  },
  aerospace: {
    title: "Aerospace Solutions",
    description: "Next-generation aviation technology",
    features: [
      {
        title: "Electric Aircraft",
        description: "Sustainable aviation solutions",
        specs: ["Zero emissions", "Advanced propulsion", "Urban air mobility"]
      },
      {
        title: "Aircraft Systems",
        description: "Modern avionics and control systems",
        specs: ["Smart cockpit", "Enhanced safety", "Fuel efficiency"]
      },
      {
        title: "MRO Services",
        description: "Maintenance, repair, and overhaul solutions",
        specs: ["Predictive maintenance", "Digital twin", "Remote diagnostics"]
      }
    ]
  },
  defense: {
    title: "Defense Systems",
    description: "Advanced military technology solutions",
    features: [
      {
        title: "Combat Aircraft",
        description: "Next-generation fighter jet technology",
        specs: ["Stealth capabilities", "Advanced radar", "Smart weapons"]
      },
      {
        title: "UAV Systems",
        description: "Military-grade unmanned aerial vehicles",
        specs: ["Long endurance", "Secure communications", "Multi-mission"]
      },
      {
        title: "Defense Electronics",
        description: "Advanced electronic warfare systems",
        specs: ["Signal intelligence", "Cyber defense", "Tactical communications"]
      }
    ]
  },
  space: {
    title: "Space Technology",
    description: "Innovative space exploration solutions",
    features: [
      {
        title: "Satellite Systems",
        description: "Advanced satellite technology",
        specs: ["Earth observation", "Communications", "Navigation"]
      },
      {
        title: "Space Vehicles",
        description: "Next-generation spacecraft",
        specs: ["Reusable design", "Deep space capability", "Advanced propulsion"]
      },
      {
        title: "Ground Systems",
        description: "Space mission control and support",
        specs: ["Real-time tracking", "Data processing", "Mission control"]
      }
    ]
  }
}

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Solutions</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive aerospace and defense solutions for the modern world
          </p>
        </div>

        <Tabs defaultValue="drones" className="mt-16">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="drones" className="flex items-center gap-2">
              <Drone className="h-4 w-4" />
              Drones
            </TabsTrigger>
            <TabsTrigger value="aerospace" className="flex items-center gap-2">
              <Plane className="h-4 w-4" />
              Aerospace
            </TabsTrigger>
            <TabsTrigger value="defense" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Defense
            </TabsTrigger>
            <TabsTrigger value="space" className="flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Space
            </TabsTrigger>
          </TabsList>
          {Object.entries(solutions).map(([key, solution]) => (
            <TabsContent key={key} value={key}>
              <div className="mt-8">
                <h2 className="text-2xl font-bold">{solution.title}</h2>
                <p className="mt-2 text-muted-foreground">{solution.description}</p>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {solution.features.map((feature, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                          {feature.specs.map((spec, i) => (
                            <li key={i} className="text-sm text-muted-foreground">{spec}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
}