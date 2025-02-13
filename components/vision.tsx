import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Globe2, Shield, Microscope } from "lucide-react"

const visionItems = [
  {
    title: "Global Leader in Drones",
    description: "Revolutionizing logistics and emergency services with cutting-edge drone technology.",
    icon: Globe2,
  },
  {
    title: "Aerospace Innovation",
    description: "Building multiple air-related solutions to transform the aerospace industry.",
    icon: Rocket,
  },
  {
    title: "Defence Excellence",
    description: "Supporting armed forces with next-generation fighter jet technology.",
    icon: Shield,
  },
  {
    title: "Research & Development",
    description: "Continuous innovation through dedicated research teams and global hackathons.",
    icon: Microscope,
  },
]

export function Vision() {
  return (
    <section className="container py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Our Vision</h2>
        <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
          Building the Future of Flight
        </p>
        <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
          We're on a mission to become a universal leader in aerospace technology, space exploration, and defence systems.
        </p>
      </div>
      <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visionItems.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-x-3 text-lg sm:text-xl">
                <item.icon className="h-5 w-5 text-primary" />
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm sm:text-base">{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}