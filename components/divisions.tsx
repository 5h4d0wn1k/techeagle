import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bone as Drone, Plane, Shield, Rocket, Globe2 } from "lucide-react"

const divisions = [
  {
    title: "Advanced Drone Systems",
    description: "Leading the global drone revolution with autonomous delivery systems, emergency response drones, and industrial solutions. Our automated factories and continuous R&D ensure we stay at the forefront of drone technology.",
    icon: Drone,
    achievements: ["Global Drone Hackathon", "Automated Manufacturing", "AI Navigation"],
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "Aerospace Solutions",
    description: "Developing next-generation air mobility solutions, from commercial aviation innovations to urban air taxis. Our multi-disciplinary teams work on advanced propulsion, eco-friendly fuels, and cutting-edge aerodynamics.",
    icon: Plane,
    achievements: ["Propulsion Systems", "Air Mobility", "Green Aviation"],
    gradient: "from-indigo-600 to-blue-500"
  },
  {
    title: "Defense Excellence",
    description: "Supporting the Indian Air Force and global defense partners with advanced fighter jet technology, stealth systems, and integrated defense solutions. Our military-grade R&D ensures superior performance and reliability.",
    icon: Shield,
    achievements: ["Stealth Tech", "Combat Systems", "Defense R&D"],
    gradient: "from-purple-600 to-indigo-500"
  },
  {
    title: "Space Technology",
    description: "Collaborating with ISRO and international space agencies on mission-critical technologies, from satellite systems to space exploration vehicles. We're shaping the future of space travel and planetary defense.",
    icon: Rocket,
    achievements: ["Satellite Tech", "Space Missions", "Propulsion"],
    gradient: "from-rose-600 to-purple-500"
  },
  {
    title: "Global Integration",
    description: "Unifying our technologies across earth and space, creating comprehensive solutions for global challenges. Our integrated approach ensures seamless operation from ground to orbit.",
    icon: Globe2,
    achievements: ["Earth Defense", "Space Systems", "Global Network"],
    gradient: "from-orange-600 to-rose-500"
  },
]

export function Divisions() {
  return (
    <section className="container px-4 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Strategic Divisions</h2>
        <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
          Comprehensive Aerospace Leadership
        </p>
        <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
          Our integrated divisions work together to push the boundaries of what's possible in aerospace,
          defense, and space technology.
        </p>
      </div>
      <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
        {divisions.map((division) => (
          <Card key={division.title} className="relative overflow-hidden transition-all hover:shadow-lg">
            <div className={`absolute top-0 h-1 w-full bg-gradient-to-r ${division.gradient}`} />
            <CardHeader>
              <div className="flex items-center gap-x-3">
                <division.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                <CardTitle className="text-lg sm:text-xl">{division.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm sm:text-base mb-4">{division.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {division.achievements.map((achievement) => (
                  <span
                    key={achievement}
                    className={`inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs sm:text-sm font-medium text-primary transition-colors hover:bg-primary/20`}
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}