import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Database, Users, Cog } from "lucide-react"

const researchAreas = [
  {
    title: "Advanced Materials Research",
    description: "Developing next-generation materials for aerospace applications, including lightweight composites and heat-resistant alloys.",
    icon: Microscope,
    stats: "20+ Patents Filed",
  },
  {
    title: "AI & Autonomous Systems",
    description: "Creating intelligent navigation systems and autonomous control mechanisms for drones and spacecraft.",
    icon: Database,
    stats: "15+ AI Models Deployed",
  },
  {
    title: "Global Innovation Network",
    description: "Collaborating with research institutions and organizing global hackathons to drive innovation.",
    icon: Users,
    stats: "50+ Partner Institutions",
  },
  {
    title: "Manufacturing Innovation",
    description: "Developing automated production systems and quality control processes for aerospace components.",
    icon: Cog,
    stats: "5 R&D Centers",
  },
]

export function Research() {
  return (
    <section className="container py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Research & Development</h2>
        <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
          Pushing the Boundaries of Innovation
        </p>
        <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
          Our dedicated research teams work at the cutting edge of aerospace technology,
          developing solutions that will define the future of flight and space exploration.
        </p>
      </div>
      <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {researchAreas.map((area) => (
          <Card key={area.title} className="border-2 transition-colors hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-3 text-lg sm:text-xl">
                <area.icon className="h-6 w-6 text-primary" />
                {area.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm sm:text-base">{area.description}</CardDescription>
              <p className="mt-4 font-semibold text-primary">{area.stats}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}